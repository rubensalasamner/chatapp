var express = require("express");
var socket = require("socket.io");
var path = require("path");

// WebSocket

// App setup
var app = express();
var server = app.listen(4000, () => {
  console.log("listening to request on port 4000");
});

// Routes
app.get("/login", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/login.html"));
});

app.get("/admin", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/admin.html"));
});

// Static files
app.use(express.static("public"));

// User data
let happyCounter = 5;
let users = [];

// Socket setup
var io = socket(server);

let connectCounter = 0;

io.on("connection", socket => {
  console.log("made socket connection", socket.id);
  users.push({
    userId: socket.id,
    value: null
  });
  connectCounter++;
  console.log(connectCounter);
  // Handle chat event
  socket.on("chat", data => {
    io.emit("chat", data);
    console.log("made socket connection");
  });

  socket.on("disconnect", function() {
    connectCounter--;
    console.log(connectCounter);
    users = users.filter(user => user.userId !== socket.id);
  });

  socket.on("typing", data => {
    socket.broadcast.emit("typing", data);
  });

  socket.on("happy", function() {
    happyCounter++;
    console.log(happyCounter);
  });

  socket.on("sad", function() {
    happyCounter--;
    console.log(happyCounter);
  });

  socket.on("users", function() {
    console.log(users);
  });

  socket.on("createRoom", data => {
    socket.join(data);
    console.log(io.sockets.rooms);
    io.emit("createdRoom", data);
  });
});
