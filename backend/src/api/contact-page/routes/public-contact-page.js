module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/public/contact-page',
      handler: 'public-contact-page.find',
      config: { auth: false },
    },
  ],
};