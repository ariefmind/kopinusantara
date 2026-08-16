const { errors } = require('@strapi/utils');
const { ValidationError } = errors;

module.exports = {
  async create(ctx) {
    const body = ctx.request.body || {};
    const { productName, supplier, qty, unit, cost, date, notes, status } = body;
    if (!productName) {
      throw new ValidationError('Nama produk wajib diisi.');
    }
    const purchase = await strapi.documents('api::purchase.purchase').create({
      data: {
        productName: String(productName),
        supplier: String(supplier || ''),
        qty: Math.max(0, parseInt(qty, 10) || 0),
        unit: String(unit || 'kg'),
        cost: Number(cost || 0),
        date: date || new Date().toISOString().slice(0, 10),
        notes: String(notes || ''),
        status: status || 'ordered',
      },
    });
    return { id: purchase.documentId, ok: true };
  },
};