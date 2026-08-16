module.exports = {
  async find(ctx) {
    return strapi.documents('api::about-page.about-page').findFirst({
      status: 'published',
      populate: '*',
    });
  },
};