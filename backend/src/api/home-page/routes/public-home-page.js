module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/public/home-page',
      handler: 'public-home-page.find',
      config: { auth: false },
    },
  ],
};