const server = require('http').createServer();
const io = require('socket.io')(server);

const PORT = 4000;

server.listen(PORT);
console.log(`Listening on port ${PORT}...`);


io.on('connection', (socket) => {
  console.log('a user connected', socket.id)
})