"use strict"
// getting the page info from local storage depending 
//  on the clicked case on catagory page
var visted = JSON.parse(localStorage.getItem('visted'));
console.log(visted)
// here we are assigning variables to the id of the tag on the 
// html and adding the info of the current project .
var newTitle = document.getElementById("title");
 newTitle.textContent = visted.title ;

 var newImage =document.getElementById("Img");
 newImage.src =visted.image;
 
 var newName = document.getElementById("name")
 newName.textContent = visted.name;

 var newRaised = document.getElementById("raised")
 newRaised.textContent = visted.raised 

 var newlocation = document.getElementById("location");
 newlocation.textContent = visted.location;

 var goall = document.getElementById("donate");
 goall.textContent = visted.goal
 
 var newStory = document.getElementById("story");
 newStory.textContent =visted.story;





// function to get back the wallet from storage
var myWallet;
function getWallet (){
    myWallet=JSON.parse(localStorage.getItem('wallet')) 
    }
 
// Create an event listener so that when the donate link is clicked, the donateFunction method is invoked.
var donate = document.getElementById('form');
donate.addEventListener('submit', donateFunction);



function donateFunction(event) {
// Prevent the page from reloading
// update the amount value
// save wallate in local storage
// update the wallet in HTMl
    getWallet();
    event.preventDefault();
    myWallet.amount -= Number(event.target.donateValue.value);
    var donateAmount=Number(event.target.donateValue.value);
    localStorage.setItem('wallet', JSON.stringify(myWallet));
    var newProjectDonate= new ProjectDonate (visted , donateAmount)
    localStorage.setItem('projectDonateArray', JSON.stringify(projectDonateArray));
    // draw();

}



// creat new arry
var projectDonateArray=[];
//check if there is project array in storage 
if (localStorage.getItem('projectDonateArray')){
    projectDonateArray= JSON.parse(localStorage.getItem('projectDonateArray'));
}


//Project Donate Constructor 
function ProjectDonate(obj, donateAmount){
    this.id=obj.id;
    this.name=obj.title
    thid.amount=donateAmount;
    projectDonateArray.push(this);
}


