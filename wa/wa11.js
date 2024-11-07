// Select the button and overlay elements
const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

// Add an event listener to the button to toggle the mode
btn.addEventListener('click', function() {
  // Check the current button text to determine the mode
  if (btn.textContent === 'Darken') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Dark overlay
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Transparent overlay
  }
});
