// Add an event listener to the door button
document.getElementById("door-btn").addEventListener("click", function() {
	fetch("/door/open")
		.then(response => response.text())
		.then(result => {
			document.getElementById("door-result").textContent = result;
		})
		.catch(error => {
			document.getElementById("door-result").textContent = "Error opening door.";
		});
});

// Add event listeners to the lamp buttons
document.getElementById("lamp-on-btn").addEventListener("click", function() {
	fetch("/lamp/on")
		.then(response => response.text())
		.then(result => {
			document.getElementById("lamp-result").textContent = result;
		})
		.catch(error => {
			document.getElementById("lamp-result").textContent = "Error turning lamp on.";
		});
});

document.getElementById("lamp-off-btn").addEventListener("click", function() {
	fetch("/lamp/off")
		.then(response => response.text())
		.then(result => {
			document.getElementById("lamp-result").textContent = result;
		})
		.catch(error => {
			document.getElementById("
