// VARS
const burgerBtn = document.querySelector('.nav_burger');
const mainMenu = document.querySelector('.nav');


const toogler = (item, itemClass) => {
    item.classList.toggle(itemClass);
}

document.addEventListener('click', event => {
    if (event.target.closest('.nav_burger')) {
        toogler(burgerBtn, 'active');
        toogler(mainMenu, 'active');
        toogler(document.body, 'disabled');
    }
})