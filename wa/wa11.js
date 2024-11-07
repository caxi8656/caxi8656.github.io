// Select all buttons and overlays
const buttons = document.querySelectorAll('.dark');
const overlays = document.querySelectorAll('.overlay');

// Loop through each button and add a click event listener
buttons.forEach((btn, index) => {
  btn.addEventListener('click', function() {
    const overlay = overlays[index]; // Get the corresponding overlay
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
});
