// VARS
const burgerBtn = document.querySelector('.nav_burger');
const mainMenu = document.querySelector('.nav');
const shareIcon = document.querySelector('.nav-btn__item--share');
const footerShareIcon = document.querySelector('.footer__icon--share');
const shareTitle = document.querySelector('title').textContent;

// TOGGLES FUNCTION
const toogler = (item, itemClass) => {
    item.classList.toggle(itemClass);
}

// WEB SHARE API STATUS CHECK
if (navigator.share) {
    shareIcon.classList.add('visible');
    footerShareIcon.classList.add('visible');
}

// CLICK EVENT
document.addEventListener('click', event => {
    // MENU TOGGLE BUTTON
    if (event.target.closest('.nav_burger')) {
        toogler(burgerBtn, 'active');
        toogler(mainMenu, 'active');
        toogler(document.body, 'disabled');
    }
    // SHARE BUTTON ACTION
    if (event.target == shareIcon || event.target == footerShareIcon) {
        shareData = {
            title: "shareTitle",
            url: location.href
        }
        navigator.share(shareData);
    }
})


