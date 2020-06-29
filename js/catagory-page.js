'use strict'
var loadInfo2= JSON.parse(localStorage.getItem('loadInfo'));
var perviewContainer=  document.getElementById('projectsPreview');
for(var i = 0 ; i<loadInfo2.length; i++){
   var div = document.createElement('div');
   div.id= i;
   var link =document.createElement('a')
   link.setAttribute('href',"#");
   
   var img= document.createElement('img');
   img.setAttribute('src', loadInfo2[i].image);
   img.setAttribute("class","imageStyle")
   link.appendChild(img);
   var article =document.createElement("article")
   var h4 = document.createElement('h4');
   h4.textContent=loadInfo2[i].title;
   article.appendChild(h4);
   var p = document.createElement('p');
   p.innerHTML=`<i class="far fa-money-bill-alt"></i> <span id="raised">${loadInfo2[i].raised}</span> Raised of <i class="fas fa-bullseye"></i> <span id="goal">${loadInfo2[i].goal}</span>`
   article.appendChild(p);
   
    link.appendChild(article);
    div.appendChild(link);
   perviewContainer.appendChild(div);
   
}




