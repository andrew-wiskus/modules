var http = require('http');
var balance = require('./findBalance.js');

http.createServer(function(req, res) {
    res.writeHead(200);
    res.write(balance.findBalance());
    res.end();
}).listen(3000);

console.log('listening!!!! 3k');
