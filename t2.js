// Connect to the Socket.io server
const socket = io();

// Add event listeners to the lamp buttons
document.getElementById("lamp-on-btn").addEventListener("click", function () {
  console.log("Turning on lamp...");

  // Send a message to the Socket.io server to turn the lamp on
  socket.emit("lamp:on");
});

document.getElementById("lamp-off-btn").addEventListener("click", function () {
  console.log("Turning off lamp...");

  // Send a message to the Socket.io server to turn the lamp off
  socket.emit("lamp:off");
});

// Listen for 'lamp:status' events from the server
socket.on("lamp:status", function (data) {
  console.log("Received lamp status:", data.status);

  // Update the lamp result text based on the lamp status
  const resultText = data.status === "on" ? "Lamp is on." : "Lamp is off.";
  document.getElementById("lamp-result").textContent = resultText;
});
