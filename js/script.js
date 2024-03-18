// Toggle class active
const navbarNav = document.querySelector
('.navbar-nav');
// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};

//Klik dilual sidebar  untuk menghilanngkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
navbarNav.classList.remove('active');        
    }
});

