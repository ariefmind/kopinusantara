module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/public/purchases',
      handler: 'public-purchase.create',
      config: { auth: false },
    },
  ],
};