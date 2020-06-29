'use strict'
var loadInfo2= JSON.parse(localStorage.getItem('loadInfo'));
var perviewContainer=  document.getElementById('projectsPreview');
for(var i = 0 ; i<loadInfo2.length; i++){
   var div = document.createElement('div');
   div.id= i;
   perviewContainer.appendChild(div);
   var img= document.createElement('img');
   img.setAttribute('src', loadInfo2[i].image);
   div.appendChild(img);
   var h4 = document.createElement('h4');
   h4.textContent=loadInfo2[i].title;
   div.appendChild(h4);
   var p = document.createElement('p');
   p.innerHTML=`<i class="far fa-money-bill-alt"></i> <span id="raised">${loadInfo2[i].raised}</span> Raised of <i class="fas fa-bullseye"></i> <span id="goal">${loadInfo2[i].goal}</span>`
   div.appendChild(p);
}




//<p><i class="far fa-money-bill-alt"></i> <span id="raised"></span> Raised of <i class="fas fa-bullseye"></i> <span id="goal"></span></p>