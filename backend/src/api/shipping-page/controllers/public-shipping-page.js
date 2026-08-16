module.exports = {
  async find(ctx) {
    return strapi.documents('api::shipping-page.shipping-page').findFirst({
      status: 'published',
      populate: '*',
    });
  },
};