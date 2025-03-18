// Select the body element to detect mouse movement
const bodyEL = document.querySelector("body");

// Add an event listener for mouse movement
bodyEL.addEventListener("mousemove", (event) => {
  // Get the current mouse position
  const xpos = event.offsetX; // X-coordinate of the mouse
  const ypos = event.offsetY; // Y-coordinate of the mouse

  // Create a new span element to represent the heart
  const spanEL = document.createElement("span");

  // Position the heart at the cursor location
  spanEL.style.left = xpos + "px";
  spanEL.style.top = ypos + "px";

  // Generate a random size for the heart
  const size = Math.random() * 100;
  spanEL.style.width = size + "px";
  spanEL.style.height = size + "px"; // Match width for a proportional shape
  spanEL.style.animation = "animate 3s linear"; // Apply the animation

  // Append the heart to the body
  bodyEL.appendChild(spanEL);

  // Remove the heart after 3 seconds to prevent excessive DOM elements
  setTimeout(() => {
    spanEL.remove();
  }, 3000);
});
