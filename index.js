const express = require('express');
const app = express();
const cors = require('cors')

let checkoutEncrypt = require('@cellulant/checkout_encryption');

const PORT = process.env.PORT || 8080;
const accessKey = "<YOUR_ACCESS_KEY>"
const IVKey = "nzC8VqDZtP96C8Fk";
const secretKey = "CvS4Zy2dMsDAqVny";
const algorithm = "aes-256-cbc";

const liveSecretKey = "AfREDRvFHfDMiDKZ";
const liveIVkey = "ytAFYyYwGQttEmZN";

app.use(express.json());
app.use(cors());

app.get('/payment', (req, res) => {

	var payloadObj = req.body;
	// console.log(payloadObj);


	// var payloadObj = {
	// 	"merchant_transaction_id":"787867001614",
	// 	"customer_first_name":"Test",
	// 	"customer_last_name":"User",
	// 	"msisdn":254700000000,
	// 	"customer_email":"joel.lartey@yahoo.com",
	// 	"request_amount":10.0,
	// 	"currency_code":"KES",
	// 	"account_number":"12345",
	// 	"service_code":"FRANKOTRADINGLIMITED",
	// 	"due_date":"2022-03-21 12:49:36",
	// 	"request_description":"Test payment",
	// 	"country_code":"KEN",
	// 	"language_code":"en",
	// 	"success_redirect_url":"http://abc.com/success",
	// 	"fail_redirect_url":"http://abc.com/fail",
	// 	"pending_redirect_url":"http://abc.com/pending",
	// 	"callback_url":"http://abc.com/callback",
	// 	"charge_beneficiaries":null
	// };

	const payloadStr = JSON.stringify(payloadObj);


	// Create object of the Encryption class  
	let encryption = new checkoutEncrypt.Encryption(liveIVkey, liveSecretKey, algorithm);


	var result = encryption.encrypt(payloadStr);

	// print the result
	// console.log(result);
	res.status(200).send({
		encryptedResults: result
	})

});

app.listen(PORT, () => console.log(`it's alive on port${PORT}`));


