// Get DOM elements
const inputField = document.getElementById("inputField");
const logDiv = document.getElementById("log");
const clearBtn = document.getElementById("clearBtn");

// Listen for key presses in the input field
inputField.addEventListener("keydown", function (event) {
    
    // Create a new line for each key pressed
    const keyPressed = event.key;

    // Create a new element safely
    const keyElement = document.createElement("div");

    // Use textContent to prevent XSS and unsafe HTML injection
    keyElement.textContent = `Key Pressed: ${keyPressed}`;

    // Append to log
    logDiv.appendChild(keyElement);
});

// Clear log button functionality
clearBtn.addEventListener("click", function () {
    logDiv.textContent = ""; // Safe clearing of content
});