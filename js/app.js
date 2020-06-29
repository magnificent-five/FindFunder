
'use strict'

var allProjects =[]; 

var dorpDownOptionMedical= document.getElementById('Medical');
dorpDownOptionMedical.addEventListener('click', redirectToMedical);
function redirectToMedical(event){
//    event.preventDefault();
    var loadInfo=[];
    loadInfo = JSON.parse(localStorage.getItem('medicalArr'));
    console.log(loadInfo);
   localStorage.setItem('loadInfo', JSON.stringify(loadInfo));
   //window.location="catagory-page.html"
}

// var dorpDownOptionMedical= document.getElementById('Education');
// dorpDownOptionMedical.addEventListener('click', redirectToEducation);
// function redirectToEducation(event){
//     event.preventDefault();
//     var loadInfo=[];
//    loadInfo = JSON.parse(localStorage.getItem('EducationArr'));
//    localStorage.setItem('loadInfo', JSON.stringify(loadInfo));
//    window.location="catagory-page.html"
// }

// var dorpDownOptionMedical= document.getElementById('non-profit');
// dorpDownOptionMedical.addEventListener('click', redirectToNonProfit);
// function redirectToNonProfit(event){
//     event.preventDefault();
//     var loadInfo=[];
//    loadInfo = JSON.parse(localStorage.getItem('non-profitArr'));
//    localStorage.setItem('loadInfo', JSON.stringify(loadInfo));
//    window.location="catagory-page.html"
// }