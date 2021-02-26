const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/www/xjs-remote.html');
});

app.get('/extension', (req, res) => {
    res.sendFile(__dirname + '/www/proxy-extension.html');
});

app.use('/scripts', express.static(__dirname + '/node_modules/xjs-framework/dist/'));

io.on('connection', (socket) => {

    socket.on('remoteSendEvent', (message) => {
        io.emit('proxyMessage', message);
    });

    socket.on('proxySendEvent', (message) => {
        io.emit('remoteMessage', message);
    });
});

http.listen(PORT, () => {
    console.log(`Please add http://localhost:${PORT}/extension as an extension in XSplit Broadcaster`);
    console.log(`Please add http://localhost:${PORT} as an extension in XSplit Broadcaster`);
});