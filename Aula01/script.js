// Get the button and color code elements
const colorButton = document.getElementById("colorButton");
const colorCode = document.getElementById("colorCode");

// Array of beautiful colors to choose from
const colors = [
  "#000000",
  "#43454a",
  "#1e1b1bff",
  "#111111"
];

// Function to get a random color from the array
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Add click event listener to the button
colorButton.addEventListener("click", function () {
  // Get a random color
  const newColor = getRandomColor();

  // Change the background color of the body
  document.body.style.backgroundColor = newColor;

  // Update the color code display
  colorCode.textContent = newColor;
});
