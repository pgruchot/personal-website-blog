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


const ulArticles = document.getElementById("ulArticles");
const buttonDown = document.getElementById("down");
const buttonTop = document.getElementById("top");
const articleArray = ulArticles.querySelectorAll('li');
const scrollValue = articleArray[0].offsetHeight;

buttonDown.addEventListener('click', () => {
    console.log(ulArticles.scrollTop);
    ulArticles.scrollBy({ 
        top: Number(scrollValue),
        left: 0, 
        behavior: 'smooth' 
      });
});
buttonTop.addEventListener('click', () => {
    console.log(ulArticles.scrollTop);
    ulArticles.scrollBy({ 
        top: -Number(scrollValue),
        left: 0, 
        behavior: 'smooth' 
      });
});