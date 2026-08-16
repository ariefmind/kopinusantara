module.exports = {
  async find(ctx) {
    return strapi.documents('api::home-page.home-page').findFirst({
      status: 'published',
    });
  },
};