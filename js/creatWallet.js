'use strict'



var formCreat = document.getElementById('formCreat');
var formUser = document.getElementById('formUser');
var formOption = document.getElementById('walletOptions');


formCreat.addEventListener('submit', formCreatFunction);


function formCreatFunction(event) {

    event.preventDefault();

    formUser.innerHTML = `<input id="inputName"  type="input" placeholder="Input your name" > <br>`

    formUser.innerHTML += `<input id="submitCreat"  type="submit" value="Submit" > <br>`

}

if (localStorage.getItem('walletsArray')) {
    getMyWallet();
    if(walletsArray.length>2){
    
    render();
}}


formUser.addEventListener('submit', inputname);
function inputname(event) {

    event.preventDefault();
    var name = event.target.inputName.value;

  
   var CreatWalletnew = new CreatWallet(name);
    console.log(name);
    saveMyWallet();

}

function saveMyWallet() {
    localStorage.setItem('walletsArray', JSON.stringify(walletsArray));
}

function getMyWallet() {
    walletsArray = JSON.parse(localStorage.getItem('walletsArray'));
}



function render() {

    formOption.innerHTML += `<input id="first1" type="submit" value="${walletsArray[walletsArray.length - 3].name}" > <br>`
    formOption.innerHTML += `<input id="secound" type="submit" value="${walletsArray[walletsArray.length - 2].name}" > <br>`
    formOption.innerHTML += `<input id="third" type="submit" value="${walletsArray[walletsArray.length - 1].name}" > <br>`

}




var walletsArray = [];
//Constructor for wallet
function CreatWallet(name) {
    this.name = name;
    this.amount = 0;
    walletsArray.push(this);
}

