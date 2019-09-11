module.exports = {
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    nodeMailerUser: process.env.NODE_MAILER_USER,
    nodeMailerPass: process.env.NODE_MAILER_PASS,
    whiteList: process.env.WHITELIST.split(' '),
    orderInEmail: process.env.ORDER_IN_EMAIL,
    orderInSender: process.env.ORDER_IN_SENDER
}