// Total number of bubbles to create
var total = 30,
  // Reference to the bubble container element
  container = document.getElementById("bubble-container"),
  // Get the width and height of the window for positioning the bubbles
  w = window.innerWidth,
  h = window.innerHeight;

// Loop to create and initialize the bubbles
for (var i = 0, div; i < total; i++) {
  // Create a new div element for each bubble
  div = document.createElement("div");

  // Assign the 'bubble' class to each div
  div.className = "bubble";

  // Append the bubble div to the container
  container.appendChild(div);

  // Set the initial properties of the bubble using GSAP
  gsap.set(div, {
    x: R(0, w), // Random horizontal position within the viewport width
    y: R(h, h + 100), // Random vertical position slightly below the viewport
    opacity: 1, // Initial opacity of the bubble
    scale: R(0.5, 1.5), // Random size scale for the bubble
  });

  // Start the animation for the bubble
  animm(div);
}

// Function to animate the bubbles
function animm(elm) {
  // Animate the bubble to move upwards from the bottom to the top of the viewport
  gsap.to(elm, R(5, 10), {
    y: -h, // Move to above the top of the viewport
    ease: "none", // No easing, linear movement
    repeat: -1, // Repeat infinitely
    delay: -15, // Delay before starting the animation
  });

  // Animate the horizontal movement of the bubble with a yoyo effect
  gsap.to(elm, R(2, 4), {
    x: "+=50", // Move horizontally by 50 pixels
    repeat: -1, // Repeat infinitely
    yoyo: true, // Reverse direction after each animation cycle
    ease: "sine.inOut", // Smooth sine wave easing
  });

  // Animate the opacity of the bubble with a yoyo effect
  gsap.to(elm, R(1, 2), {
    opacity: 0, // Fade out to 0 opacity
    repeat: -1, // Repeat infinitely
    yoyo: true, // Reverse direction after each animation cycle
    ease: "sine.inOut", // Smooth sine wave easing
  });
}

// Helper function to generate a random number between min and max
function R(min, max) {
  return min + Math.random() * (max - min);
}
