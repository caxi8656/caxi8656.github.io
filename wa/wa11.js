// Select all buttons, image containers, and overlays
const buttons = document.querySelectorAll('.dark');
const fullImages = document.querySelectorAll('.full-img');
const overlays = document.querySelectorAll('.overlay');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', function() {
    // Handle the size change
    fullImages.forEach(img => img.classList.remove('enlarged'));
    fullImages[index].classList.add('enlarged');

    // Handle the darken/lighten functionality
    const overlay = overlays[index];
    if (btn.textContent === 'Darken') {
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Darken the overlay
    } else {
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Lighten the overlay
    }
  });
});
