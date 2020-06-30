"use strict"


var allprojects
allprojects =  JSON.parse(localStorage.getItem("allProjects"))
console.log(allprojects)


var perviewsection = document.getElementById("section2");

for (var i = 0; i < 6; i++) {
    var div = document.createElement("div");
    div.id = i;
    var link = document.createElement("a");
    link.addEventListener("click", redirectToProjectPage);
    link.setAttribute("href", "project-page.html");
    link.setAttribute("id", allprojects[i].id);
    var img = document.createElement("img");
    img.setAttribute("src", allprojects[i].image);
    img.setAttribute("class", "imageStyle");
    link.appendChild(img);
    var article = document.createElement("article");
    var h4 = document.createElement("h4");
    h4.textContent = allprojects[i].title;
    article.appendChild(h4);
    var p = document.createElement("p");
    p.setAttribute("class","card-info")
    p.innerHTML = `<i class="far fa-money-bill-alt"></i> <span id="raised">${allprojects[i].raised}</span> Raised of <i class="fas fa-bullseye"></i> <span id="goal">${allprojects[i].goal}</span>`;
    article.appendChild(p);
    link.appendChild(article);
    div.appendChild(link);
    perviewsection.appendChild(div);
  }

 function redirectToProjectPage(event) {
  var visted = loadInfo2.find(checkExistance, this.id);
  localStorage.setItem("visted", JSON.stringify(visted));
}


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
} 