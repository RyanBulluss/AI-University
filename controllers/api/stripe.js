const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
const stripe = require('stripe')(STRIPE_SECRET_KEY);
const SERVER_URL = process.env.SERVER_URL
const User = require('../../models/user')


module.exports = {
    newStripe,
}


async function newStripe(req, res) {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'subscription',
            line_items: [{
                price: 'price_1NlbH1LgUjNg2o1vP8qcwqRG',
                quantity: 1,
            }],
            success_url: `${SERVER_URL}/success`,
            cancel_url: `${SERVER_URL}/cancel`,
        });
        console.log(session)
        res.json({ url: session.url });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}
