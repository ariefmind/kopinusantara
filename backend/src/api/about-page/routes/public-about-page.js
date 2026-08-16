module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/public/about-page',
      handler: 'public-about-page.find',
      config: { auth: false },
    },
  ],
};