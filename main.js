const plusBtn = document.querySelector('#plusBtn');
let lis = document.querySelectorAll('li');
let nav = document.querySelector('nav');
const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.card1')
const closeBtn = document.querySelector('.closeBtn');
const overlay = modal.querySelector('.modal_overlay');

plusBtn.addEventListener('click',function() {
  document.querySelector('.project').scrollIntoView(true);
});


const openModal = () => {
  modal.classList.remove('hidden');
}

const closeModal = () => {
  modal.classList.add('hidden');
}


lis.forEach(li => {
  li.addEventListener('click', function() {
    lis.forEach(list => list.classList.remove('active'));
    this.classList.add('active');
  });
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 700) {
    nav.classList.add('nav_fix');
  } else {
    nav.classList.remove('nav_fix');
  }
});


openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);





