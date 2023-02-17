const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
const http = require('http');
const socketio = require('socket.io');
const getRouter = require("./api/get");

const app = express();

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Use this after the variable declaration

// Connect to MongoDB using Mongoose
// This will be implemeted shortly

// Create HTTP server and attach Socket.io
const server = http.createServer(app);
const io = socketio(server);

// Handle socket connection
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle incoming messages from the client
  socket.on('lamp:on', (data) => {
    console.log('Received lamp:on message');
    // Send a message back to the client to acknowledge the request
    socket.emit('lamp:status', { status: 'on' });
  });

  socket.on('lamp:off', (data) => {
    console.log('Received lamp:off message');
    // Send a message back to the client to acknowledge the request
    socket.emit('lamp:status', { status: 'off' });
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Use the GET router
app.use("/", getRouter(io));

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, function () {
  console.log(`Server is listening on port ${port}`);
});

