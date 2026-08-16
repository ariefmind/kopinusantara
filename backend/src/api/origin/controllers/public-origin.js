module.exports = {
  async find(ctx) {
    const docs = await strapi.documents('api::origin.origin').findMany({
      status: 'published',
      sort: 'name:asc',
      limit: 100,
    });
    return docs.map((d) => ({
      slug: d.slug,
      name: d.name,
      region: d.region,
      menuRegion: d.menuRegion,
      elevation: d.elevation,
      coords: d.coords,
      process: d.process,
      harvest: d.harvest,
      character: d.character,
      shortNote: d.shortNote,
      panelNote: d.panelNote,
      lede: d.lede,
      story: d.story,
      flavor: d.flavor,
      price: d.price,
      glyph: d.glyph,
      panelId: d.panelId,
    }));
  },
};