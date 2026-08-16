module.exports = {
  async find(ctx) {
    const docs = await strapi.documents('api::product.product').findMany({
      status: 'published',
      sort: 'name:asc',
      limit: 100,
    });
    return docs.map(({ slug, name, region, note, image, prices, stock }) => ({
      slug,
      name,
      region,
      note,
      image,
      prices,
      stock,
    }));
  },
};