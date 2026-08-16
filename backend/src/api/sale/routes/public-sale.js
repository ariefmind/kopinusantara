module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/public/sales',
      handler: 'public-sale.create',
      config: { auth: false },
    },
  ],
};