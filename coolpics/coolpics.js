const menuButton = document.querySelector('.menu');
const navList = document.querySelector('nav ul');
const gallery = document.querySelector('.gallery');

navList.classList.add('hide');

menuButton.addEventListener('click', () => {
  navList.classList.toggle('hide');
});

function handleResize() {
  if (window.innerWidth > 1000) {
    navList.classList.remove('hide');
  } else {
    navList.classList.add('hide');
  }
}

handleResize();
window.addEventListener('resize', handleResize);

const modal = document.createElement('dialog');
document.body.appendChild(modal);

gallery.addEventListener('click', (event) => {
  const img = event.target.closest('img');
  if (!img) return;

  const src = img.getAttribute('src');
  const baseName = src.split('-')[0];
  const largeSrc = baseName + '-full.jpeg';

  modal.innerHTML = `
    <img src="${largeSrc}" alt="${img.alt}">
    <button class="close-viewer">X</button>
  `;

  modal.showModal();

  const closeBtn = modal.querySelector('.close-viewer');
  closeBtn.addEventListener('click', () => modal.close());
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});