// Make connection
var socket = io.connect("http://localhost:4000");

// Query DOM
var createRoom = document.getElementById("createRoom");

// Emit events
createRoom.addEventListener("click", function() {
  let key = Math.floor(Math.random() * 1000);
  console.log(key);
  socket.emit("createRoom", key, true);
});
