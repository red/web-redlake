var express = require('express');
var app = express();

// Test
app.get('/api/', function (req, res) {
	res.json({ testResponse: 'success' });
});

app.listen(5000, function () {
	console.log('Express server listening on port 5000.');
});
