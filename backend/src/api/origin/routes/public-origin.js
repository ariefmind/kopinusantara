module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/public/origins',
      handler: 'public-origin.find',
      config: { auth: false },
    },
  ],
};