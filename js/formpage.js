'use strict'
//add  event listner to the submit and collect data for 
// for the project pages .
var formData = document.getElementById("project-form");
formData.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    var title = event.target.Title.value;
    var image = event.target.Image.value;
    var goal = Number(event.target.Goal.value).valueOf();
    var name = event.target.Name.value;
    var location = event.target.Location.value;
    var story = event.target.Story.value;
    var selectedIndex = event.target.Catagory.options.selectedIndex;
    var catagory = event.target.Catagory.options[selectedIndex].value;
    console.log(title, image, goal, name, location, catagory, story);
    var project = new ProjectMaker(title, image, goal, name, location, story, catagory);
    project.createRandomRaised();
    allProjects.push(project);
    filteration();
    console.log(educationArr);

    addToLoalStorage()
    console.log(project.title, project.image, project.goal, project.name, project.location, project.catagory, project.story, project.raised);
    console.log(allProjects);
}
// a constructer to make all the data entred to an array of projects.
function ProjectMaker(title, image, goal, name, location, story, catagory) {
    this.title = title;
    this.image = image;
    this.goal = goal;
    this.name = name;
    this.location = location;
    this.story = story;
    this.id = allProjects.length;
    this.catagory = catagory;
    this.raised = 0;
}
ProjectMaker.prototype.createRandomRaised = function () {        //generate randomValue for raised
    this.raised = Math.floor(Math.random() * (10000 - 1000) + 1000);
}

// to add all prjocets array to local storage and to add each catagory array to local storage as well.
function addToLoalStorage() {
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
    localStorage.setItem("EducationArr", JSON.stringify(educationArr));
    localStorage.setItem("medicalArr",JSON.stringify(medicalArr));
    localStorage.setItem("non-profitArr",JSON.stringify(non_profitArr));

} 

var educationArr =[];
var medicalArr =[];
var non_profitArr = [];

function checkExistance(e) {
    return e.catagory == this;
  }
   function filteration(){
   educationArr = allProjects.filter(checkExistance, 'Education');
   medicalArr= allProjects.filter(checkExistance, 'Medical');
   non_profitArr = allProjects.filter(checkExistance, 'Nonprofit');
  }