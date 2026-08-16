const { errors } = require('@strapi/utils');
const { ApplicationError, ValidationError } = errors;

module.exports = {
  async create(ctx) {
    const body = ctx.request.body || {};
    const { customerName, customerPhone, customerEmail, customerAddress, items = [], source } = body;

    if (!customerName) {
      throw new ValidationError('Nama penerima wajib diisi.');
    }
    if (!Array.isArray(items) || items.length === 0) {
      throw new ValidationError('Keranjang masih kosong.');
    }

    const slugs = [...new Set(items.map((i) => i.slug))];
    const products = await strapi.documents('api::product.product').findMany({
      status: 'published',
      filters: { slug: { $in: slugs } },
      limit: 100,
    });
    const bySlug = new Map(products.map((p) => [p.slug, p]));

    const validated = [];
    let total = 0;

    for (const item of items) {
      const p = bySlug.get(item.slug);
      if (!p) {
        throw new ValidationError(`Produk ${item.slug} tidak ditemukan.`);
      }
      const prices = p.prices || {};
      const stock = p.stock || {};
      const unitPrice = prices[item.size];
      if (!unitPrice) {
        throw new ValidationError(`Ukuran ${item.size} tidak valid untuk ${p.name}.`);
      }
      const qty = Math.max(1, parseInt(item.qty, 10) || 1);
      const available = stock[item.size] != null ? Number(stock[item.size]) : Infinity;
      if (available !== Infinity && qty > available) {
        throw new ApplicationError(`Stok ${p.name} (${item.size}) tidak cukup. Tersedia ${available}.`);
      }
      total += unitPrice * qty;
      validated.push({ slug: p.slug, name: p.name, size: item.size, qty, unitPrice });
    }

    const orderRef = 'ARS-' + Date.now().toString(36).toUpperCase();
    const saleData = {
      orderRef,
      customerName: String(customerName),
      customerPhone: String(customerPhone || ''),
      customerAddress: String(customerAddress || ''),
      items: validated,
      total: Math.round(total),
      status: 'pending',
      source: source || 'web',
    };
    if (customerEmail && typeof customerEmail === 'string') {
      saleData.customerEmail = customerEmail.trim();
    }
    const sale = await strapi.documents('api::sale.sale').create({ data: saleData });

    for (const v of validated) {
      const p = bySlug.get(v.slug);
      const stock = { ...(p.stock || {}) };
      if (stock[v.size] != null) {
        stock[v.size] = Math.max(0, Number(stock[v.size]) - v.qty);
        await strapi.documents('api::product.product').update({
          documentId: p.documentId,
          data: { stock },
          status: 'published',
        });
      }
    }

    return { orderRef, total: Math.round(total), items: validated, saleId: sale.documentId };
  },
};