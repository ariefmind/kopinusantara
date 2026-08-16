module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/public/shipping-page',
      handler: 'public-shipping-page.find',
      config: { auth: false },
    },
  ],
};