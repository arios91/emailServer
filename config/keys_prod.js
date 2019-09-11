module.exports = {
    // stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    // stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    stripePublishableKey: 'pk_test_Mqk5tVgm8NXvt81KUk3iigKo',
    stripeSecretKey: 'sk_test_6eY7Gej779d3mEC51fPHukwQ',
    nodeMailerUser: process.env.NODE_MAILER_USER,
    nodeMailerPass: process.env.NODE_MAILER_PASS,
    whiteList: process.env.WHITELIST.split(' '),
    orderInEmail: 'alx.rios91@gmail.com',
    orderInSender: process.env.ORDER_IN_SENDER
}