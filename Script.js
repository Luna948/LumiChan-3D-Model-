const socket = new WebSocket("ws://0.0.0.0:8765"); // Replace with actual IP

socket.onopen = function () {
    console.log("Connected to WebSocket Server");
};

socket.onmessage = function (event) {
    console.log("Received:", event.data);
    updateLumiAnimation(event.data); // Call function to update animation
};

socket.onerror = function (error) {
    console.log("WebSocket Error: ", error);
};

socket.onclose = function () {
    console.log("WebSocket Connection Closed");
};

document.getElementById("sendButton").addEventListener("click", function() {
    let userInput = document.getElementById("userInput").value;
    console.log("User Input:", userInput);

function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    socket.send(userInput); // Send user message to backend
}

// Function to update animation based on response
function updateLumiAnimation(expression) {
    let model = document.getElementById("lumiModel");
    
    if (expression === "show_happy_animation") {
        model.src = "happy_animation.glb";
    } else if (expression === "show_sad_animation") {
        model.src = "sad_animation.glb";
    } else {
        model.src = "neutral_animation.glb";
    }
}
