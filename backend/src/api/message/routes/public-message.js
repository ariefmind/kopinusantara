module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/public/messages',
      handler: 'public-message.create',
      config: { auth: false },
    },
  ],
};