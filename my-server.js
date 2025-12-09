var http = require('http');
http.createServer(function (req, res) {
    res.write('Hello World from Trenity Gilford!');
    res.end();
}).listen(3000, function() {
    console.log('Server is listening on port 3000');
});