const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
  // Only respond if an <img> was clicked
  if (e.target.tagName === 'IMG') {
    // Get the thumbnail src
    const thumbSrc = e.target.getAttribute('src');

    // Replace "-sm" with "-lg" to load the high-res version
    const largeSrc = thumbSrc.replace('-sm', '-full');

    // Set modal image src and alt
    modalImage.src = largeSrc;
    modalImage.alt = e.target.alt;

    // Show the modal
    modal.showModal();
  }
}

// Close modal on button click
closeButton.addEventListener('click', () => {
  modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

// Close modal on Esc key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.open) {
    modal.close();
  }
});