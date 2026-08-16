const { errors } = require('@strapi/utils');
const { ValidationError } = errors;

module.exports = {
  async create(ctx) {
    const body = ctx.request.body || {};
    const { name, company, email, subject, message } = body;
    if (!name || !message) {
      throw new ValidationError('Nama dan pesan wajib diisi.');
    }
    const created = await strapi.documents('api::message.message').create({
      data: {
        name: String(name),
        company: String(company || ''),
        email: String(email || ''),
        subject: String(subject || ''),
        message: String(message),
      },
    });
    return { id: created.documentId, ok: true };
  },
};