const http = require('http');
const PORT = 7000;
const PORT2 = 7500;

//================== 7000
function handleRequest(req, res) {
    res.end('Works 7000!' + req.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log('listening. Port: ' + PORT);
});

//================= 7500

function handleRequest2(req, res) {
    res.end('Works 7500!' + req.url);
}

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function() {
    console.log('listening. Port: ' + PORT2);
});