// var httpProxy = require('http-proxy');

// var proxy = httpProxy.createProxyServer({
//   target:
// });

// http.createServer(function(req, res) {
//   proxy.web(req, res, { target: 'http://mytarget.com:8080' });
// });

const express = require('express');
const port = 3000;
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log('Listening in on port: 3000'));
