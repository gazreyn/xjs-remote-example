var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var app = require('http').createServer(app);
var io = require('socket.io')(app);

app.listen(3000, () => {
    console.log('Please add extension/Proxy.html as an extension in XSplit Broadcaster');
    console.log('Then open index.html in your browser');
});

io.on('connection', (socket) => {

    socket.on('remoteSendEvent', (message) => {
        io.emit('proxyMessage', message);
    });

    socket.on('proxySendEvent', (message) => {
        io.emit('remoteMessage', message);
    });
});