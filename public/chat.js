// Make connection
var socket = io.connect("http://localhost:4000");

// Query DOM
var message = document.getElementById("message"),
  handle = document.getElementById("handle"),
  btn = document.getElementById("send"),
  output = document.getElementById("output"),
  feedback = document.getElementById("feedback"),
  slider = document.getElementById("slider"),
  test = document.getElementById("test"),
  btn2 = document.getElementById("send2"),
  happy = document.getElementById("happy"),
  sad = document.getElementById("sad"),
  users = document.getElementById("users");
// Emit events
/* btn.addEventListener("click", function() {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
  message.value = "";
});
 */
/* btn2.addEventListener("click", function() {
  console.log("hej");
  socket.emit("chat2", {
    message2: test.value
  });
}); */

users.addEventListener("click", function() {
  console.log("user added");
  socket.emit("users");
});

happy.addEventListener("click", function() {
  console.log("happy");
  socket.emit("happy");
});

sad.addEventListener("click", function() {
  console.log("sad");
  socket.emit("sad");
});

/* // slider
slider.addEventListener("change", () => {
  socket.emit("slider", slider.value);
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

socket.on("slider", data => {});
 */
