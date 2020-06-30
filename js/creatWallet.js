'use strict'



var formCreat = document.getElementById('formCreat');
var formUser = document.getElementById('formUser');
var formOption = document.getElementById('walletOptions');
var logIn = document.getElementById('login');




//event listener to creat new wallet 
formCreat.addEventListener('submit', formCreatFunction);


function formCreatFunction(event) {

    event.preventDefault();
    // creat inputs field to creat wallet
    formUser.innerHTML = `<input id="inputName"  type="input" placeholder="Input your name" > <br>`

    formUser.innerHTML += `<input id="submitCreat"  type="submit" value="Submit" > <br>`

}





//check if I have wallets array in storage
if (localStorage.getItem('walletsArray')) {
    getMyWallet();
    if (walletsArray.length > 2) {

        render();
    }
}




//event listener to creat new wallet and input the new name

formUser.addEventListener('submit', inputname);
function inputname(event) {

    event.preventDefault();
    if(localStorage.getItem('walletsArray')){

        getMyWallet();
    }
    var name = event.target.inputName.value;
    var CreatWalletnew = new CreatWallet(name);
    console.log(name);
    saveMyWallet();

}



var currentWallet = [];

//event listener to creat new wallet and input the new name

logIn.addEventListener('submit', functionlogin);
function functionlogin(event) {

    event.preventDefault();
    getMyWallet();
    var username = event.target.loginName.value;
    if (walletsArray.some(e => e.name === username)) {
        /* walletsArray contains the element we're looking for */

        //make the current value the choosing one from all wallets

        for (var i = 0; i < walletsArray.length; i++) {
            if (walletsArray[i].name == username) {
                currentWallet = walletsArray[i];
            }
        }
    }

    else {
        alert('you don\'t have wallet')
    }
    //  console.log(name);
    console.log(currentWallet);
    saveMyWallet();
    updatewallets();

}


//function to save wallets

function saveMyWallet() {
    localStorage.setItem('walletsArray', JSON.stringify(walletsArray));
    localStorage.setItem('currentWallet', JSON.stringify(currentWallet));
}

//function to get wallets
function getMyWallet() {
    walletsArray = JSON.parse(localStorage.getItem('walletsArray'));
}




//render function to give me lasts three wallets
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

//function to updat the wallet in wallets array
function updatewallets() {

    //seclect the wallet from wallets array and update it
    JSON.parse(localStorage.getItem("walletsArray"));
    for (var i = 0; i < walletsArray.length; i++) {
        if (walletsArray[i].name == currentWallet.name) {
            walletsArray[i].amount = currentWallet.amount;
        }
    }
    //  }
    localStorage.setItem("walletsArray", JSON.stringify(walletsArray));
}