require('dotenv').config();
var express = require('express');
var app = express();

// Test
app.get('/api/', function (req, res) {
	res.json({ testResponse: [process.env.TEST_SECRET, process.env.NODE_ENV] });
});

app.listen(5000, function () {
	console.log('Express server listening on port 5000.');
});
