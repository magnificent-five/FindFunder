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