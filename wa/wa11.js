// Select all buttons and images
const buttons = document.querySelectorAll('.dark');
const fullImages = document.querySelectorAll('.full-img');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', function() {
    // Remove the 'enlarged' class from all images
    fullImages.forEach(img => img.classList.remove('enlarged'));

    // Add the 'enlarged' class to the clicked image
    fullImages[index].classList.add('enlarged');
  });
});
