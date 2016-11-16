var express = require('express');
var http = require('http')
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static('./dist'));

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

http.createServer(app).listen(port, function(){
    console.log("Express server listening on port " + port);
});