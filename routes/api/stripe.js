const express = require('express');
const router = express.Router();
const stripeCtrl = require('../../controllers/api/stripe')


router.post('/create-checkout-session', stripeCtrl.newStripe);

module.exports = router;