/*
 * This is just a placeholder
 */

const {
	STRIPE_PUBLISHABLE_KEY,
	STRIPE_SECRET_KEY,
	STRIPE_PLAN_ID,
	KEYGEN_PRODUCT_TOKEN,
	KEYGEN_ACCOUNT_ID,
	KEYGEN_POLICY_ID,
	PORT = 8080
} = process.env;

const stripe = require('stripe')(STRIPE_SECRET_KEY);

exports.handler = function (event, context, callback) {
	callback(null, {
		statusCode: 200,
		body: 'Hello, World'
	});
};
