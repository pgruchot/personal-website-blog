const ulArticless = document.getElementById("ulArticles");
const buttonDown = document.getElementById("down");
const buttonTop = document.getElementById("top");
const articleArray = ulArticles.querySelectorAll("li");
const scrollValue = articleArray[0].offsetHeight;

buttonDown.addEventListener("click", () => {
  console.log(ulArticles.scrollTop);
  ulArticles.scrollBy({
    top: Number(scrollValue),
    left: 0,
    behavior: "smooth",
  });
});
buttonTop.addEventListener("click", () => {
  console.log(ulArticles.scrollTop);
  ulArticles.scrollBy({
    top: -Number(scrollValue),
    left: 0,
    behavior: "smooth",
  });
});

const menu = document.querySelector(".menu");
const menuBurger = document.querySelector(".menu-burger");
const menuLinks = document.querySelectorAll(".link-default");
menuBurger.addEventListener("click", (e) => {
  menu.classList.toggle("menu-active");
  for (let index = 0; index < menuLinks.length; index++) {
    let element = menuLinks[index];
    element.classList.toggle("link-active");
    console.log(element);
  }

  menuBurger.classList.toggle("menu-burger-toggle");
});

const search = document.getElementById("search");
console.log(search);
const articlesh2 = document.querySelectorAll(".article h2");
console.log(articlesh2[1].parentElement.parentElement);
search.addEventListener("keyup", (e) => {
  console.log(e);
  let searchValue = search.value;
  console.log(searchValue);
  articlesh2.forEach((article) => {
    let articleTitle = article.textContent;
    if (articleTitle.includes(searchValue)) {
      article.parentElement.parentElement.classList.remove("article-disabled");
    } else {
      article.parentElement.parentElement.classList.add("article-disabled");
    }
  });
});

articleArray.forEach((article) => {
  article.addEventListener("click", (e) => {
    for (let index = 0; index < articleArray.length; index++) {
      articleArray[index].classList.toggle("article-disabled");
      console.log(articleArray[index]);
    }
    article.classList.toggle("article-disabled");
    article.classList.toggle("article-active");
    console.log(article);
  });
});
