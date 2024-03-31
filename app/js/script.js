const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');
const navbarListWrapper = document.querySelector('.navbar-list-wrapper');

navbarShowBtn.addEventListener('click', () => {
    navbarListWrapper.classList.add('show');
});

navbarHideBtn.addEventListener('click', () => {
    navbarListWrapper.classList.remove('show');
});

let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});