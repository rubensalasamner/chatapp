// Make connection
var socket = io.connect("http://localhost:4000", { query: "id=10" });

// Query DOM
var admin = document.getElementById("admin"),
  user = document.getElementById("user");

// Emit events
btn.addEventListener("click", function() {});

slider.addEventListener("change", () => {
  socket.emit("saveData", slider.value);
  console.log(slider.value);
});

message.addEventListener("keypress", () => {
  socket.emit("typing", handle.value);
});

btn.addEventListener("click", function() {
  socket.emit("test", "hej");
});

// Listen for events
socket.on("chat", function(data) {
  feedback.innerHTML = "";
  output.innerHTML +=
    "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
});

socket.on("typing", data => {
  feedback.innerHTML = "<p><em>" + data + " is typing a message..</em</p>";
});

socket.on("saveData", data => {
  console.log(data);
});

socket.on("test", function(data) {
  console.log(data);
});

socket.on("slider", data => {
  console.log(data);
  output.innerHTML +=
    "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
});
