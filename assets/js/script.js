// VARS
const burgerBtn = document.querySelector('.nav_burger');
const mainMenu = document.querySelector('.nav');
const searchIcon = document.querySelector('.nav-btn__item--search');
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-form__input');
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

    // SEARCH FORM
    if (event.target === searchIcon) {
        toogler(searchForm, 'visible');
        searchInput.removeAttribute('disabled', '');
        searchInput.focus();
    }

    // SHOW/HIDE SEARCH FORM
    if (searchForm.classList.contains('visible') &&
        !event.target.closest('.search-form') &&
        !event.target.classList.contains('nav-btn__item--search')) {
        searchForm.classList.remove('visible');
        searchInput.blur();
    }

    // SHARE BUTTON ACTION
    if (event.target === shareIcon || event.target === footerShareIcon) {
        shareData = {
            title: shareTitle,
            url: location.href
        }
        navigator.share(shareData);
    }
})


