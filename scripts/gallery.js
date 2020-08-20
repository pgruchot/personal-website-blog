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


const imageDotArray = document.querySelectorAll('.dot');
const imageDivArray = document.querySelectorAll('.right-image');
const transitionBlock = document.getElementById('right-transition-block');
imageDotArray.forEach(element => {
    element.addEventListener('click', (e) =>{
        e.preventDefault;
        transitionBlock.classList.remove("right-transition-block-play");
        void transitionBlock.offsetWidth;
        transitionBlock.classList.add("right-transition-block-play");
        let imgIndex = event.target.dataset.imgnum;
        document.querySelector('.image-active').classList.toggle('image-active');
        document.querySelector('.dot-active').classList.toggle('dot-active');
        document.querySelector(`div[data-imgnum='${imgIndex}']`).classList.toggle('image-active');
        document.querySelector(`a[data-imgnum='${imgIndex}']`).classList.toggle('dot-active');
    })
});