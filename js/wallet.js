"use strict";

var walletValue = document.getElementById("walletValue");

//Constructor for wallet
function Wallet() {
  this.amount = 0;
}

var newWallet = new Wallet();

//Lets get the amount of my stored wallet if exist
loadWallet();
inMyWallet();

// Create an event listener so that when the deposit link is clicked, the depositFunction method is invoked.
var deposiT = document.getElementById("btn1");
var depositInput = document.getElementById("deposit");
deposiT.addEventListener("click", depositFunction);

function depositFunction(event) {
  console.log(depositInput.value);
  // Prevent the page from reloading
  // update the amount value
  // save wallate in local storage
  // update the wallet in HTMl
  event.preventDefault();
  newWallet.amount += Number(depositInput.value);
  console.log(newWallet.amount);
  saveWallet();
  inMyWallet();
}

// Create an event listener so that when the withDraw link is clicked, the withDrawFunction method is invoked.
var withDraw = document.getElementById("btn2");
var withdrawInput = document.getElementById("withdraw");
withDraw.addEventListener("click", withDrawFunction);

function withDrawFunction(event) {
  // Prevent the page from reloading
  // update the amount value
  // save wallate in local storage
  // update the wallet in HTMl
  event.preventDefault();
  if (newWallet.amount < withdrawInput.value) {
   // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// open the modal 
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    //alert("you don't have enough money");
  } else {
    newWallet.amount -= Number(withdrawInput.value);
  }
  console.log(newWallet.amount);
  saveWallet();
  inMyWallet();
}

// function to save wallet
function saveWallet() {
  localStorage.setItem("wallet", JSON.stringify(newWallet));
}

// function to update the contant of IN MY WALLET
function inMyWallet() {
  console.log(newWallet);
  walletValue.textContent ="$"+parseInt(newWallet.amount);
}

//function to keep track of my stored wallet
function loadWallet() {
  if (!localStorage.getItem("wallet")) {
    return;
  }
  newWallet = JSON.parse(localStorage.getItem("wallet"));
}


draw();

//Function for result of donation in chart
function draw() {
  //check if there is a donation
  if (!localStorage.getItem("projectDonateArray")) {
    return;
  }
  var donationArr = JSON.parse(localStorage.getItem("projectDonateArray"));

  var namesArr = [];
  var amountsArr = [];
  for (var i = 0; i < donationArr.length; i++) {
    namesArr.push(donationArr[i].name);
    amountsArr.push(donationArr[i].amount);
  }
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: namesArr,
      //labelThicknees:5,
      datasets: [
        {
          barThickness: 20,
          label: "# of amount",
          data: amountsArr,
          backgroundColor: '#cbd0d3',
          borderColor: 'black',
          borderWidth: 1,
        },
      ],
    },

    options: {
      responsive: false,
      maintainAspectRatio: false,

      legend: {
        labels: {
          // This more specific font property overrides the global property
          fontColor: "black",
        },
      },

      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              precision: 1,
              stepSize: 1,

              fontColor: "black",
            },
          },
        ],

        xAxes: [
          {
            ticks: {
              fontColor: "black",
            },
          },
        ],
      },
    },
  });
}
