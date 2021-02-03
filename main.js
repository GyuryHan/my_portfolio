let lis = document.querySelectorAll('li');

lis.forEach(li => {
  li.addEventListener('click', function() {
    lis.forEach(list => list.classList.remove('active'));
    this.classList.add('active');
  });
});



// function showNav() {
//   if (window.pageYOffset > 700) {
//       document.nav.classList.add('nav_sticky');
//   } else {
//       document.nav.classList.remove('nav_sticky');
//   }
// }

let nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 700) {
    nav.classList.add('nav_fix');
  } else {
    nav.classList.remove('nav_fix');
  }
});