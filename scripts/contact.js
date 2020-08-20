const menu = document.querySelector('.menu');
const menuBurger = document.querySelector('.menu-burger');
const menuLinks = document.querySelectorAll('.link-default');
menuBurger.addEventListener('click', (e) => {
    menu.classList.toggle('menu-active');
    for (let index = 0; index < menuLinks.length; index++) {
        let element = menuLinks[index];
        element.classList.toggle('link-active');
        console.log(element);
    }

    menuBurger.classList.toggle('menu-burger-toggle');

});