'use strict';
// import { data } from "./dummy-data.js";

var allProjects = [];

// this adds an invent listner to each option in the catagory  nav
// and it takes you to that page and renders all projects related to 
// that catagory .
var dorpDownOptionMedical= document.getElementById('Medical');
dorpDownOptionMedical.addEventListener('click', redirectToMedical);
function redirectToMedical(event){

    var loadInfo=[];
    loadInfo = JSON.parse(localStorage.getItem('medicalArr'));
    console.log(loadInfo);
   localStorage.setItem('loadInfo', JSON.stringify(loadInfo));
  
}

var dorpDownOptionEduction= document.getElementById('Education');
dorpDownOptionEduction.addEventListener('click', redirectToEducation);
function redirectToEducation(event){
    
    var loadInfo=[];
   loadInfo = JSON.parse(localStorage.getItem('EducationArr'));
   localStorage.setItem('loadInfo', JSON.stringify(loadInfo));

}

var dorpDownOptionnonProfit= document.getElementById('non-profit');
dorpDownOptionnonProfit.addEventListener('click', redirectToNonProfit);
function redirectToNonProfit(event){
    
    var loadInfo=[];
   loadInfo = JSON.parse(localStorage.getItem('non-profitArr'));
   localStorage.setItem('loadInfo', JSON.stringify(loadInfo));

}
