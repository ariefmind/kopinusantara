module.exports = {
  async find(ctx) {
    return strapi.documents('api::contact-page.contact-page').findFirst({
      status: 'published',
    });
  },
};