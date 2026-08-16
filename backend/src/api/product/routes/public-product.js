module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/public/products',
      handler: 'public-product.find',
      config: { auth: false },
    },
  ],
};