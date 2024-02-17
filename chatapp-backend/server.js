// chat-backend/server.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Socket.io event handling
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle incoming messages
  socket.on('sendMessage', (message) => {
    io.emit('message', message);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  // Send the updated user list to all clients
  io.emit('userList', Object.keys(io.sockets.connected));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});