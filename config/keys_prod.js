module.exports = {
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    nodeMailerUser: process.env.NODE_MAILER_USER,
    nodeMailerPass: process.env.NODE_MAILER_PASS,
    whiteList: ['https://www.petalosarte.com', 'http://petalosarte.com'],
    orderInEmail: process.env.ORDER_IN_EMAIL,
    orderInSender: '"Petalos Arte Flower Shop" <orders@petalosarte.com>'
}