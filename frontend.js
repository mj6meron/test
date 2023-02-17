// Add event listeners to the lamp buttons
document.getElementById("lamp-on-btn").addEventListener("click", function () {
  console.log("here we click it");
  fetch("http://localhost:3000/lamp/on")
    .then((response) => response.text())
    .then((result) => {
      document.getElementById("lamp-result").textContent = result;
    })
    .catch((error) => {
      document.getElementById("lamp-result").textContent =
        "Error turning lamp on.";
    });
});

document.getElementById("lamp-off-btn").addEventListener("click", function () {
  fetch("http://localhost:3000/lamp/off")
    .then((response) => response.text())
    .then((result) => {
      document.getElementById("lamp-result").textContent = result;
    })
    .catch((error) => {
      document.getElementById("lamp-result").textContent =
        "Error turning lamp off.";
    });
});
