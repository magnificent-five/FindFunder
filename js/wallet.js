'use strict'


// // Constructor for wallet 
function Wallet() {
    this.amount = 0;
}


if(localStorage.getItem('wallet')){
    newWallet=JSON.parse(localStorage.getItem('wallet'));
}
else{
//Declare wallet object
var newWallet = new Wallet();
}


// Create an event listener so that when the deposit link is clicked, the depositFunction method is invoked.
var deposiT = document.getElementById('btn1');
var depositInput = document.getElementById('deposit');
deposiT.addEventListener('click', depositFunction)

function depositFunction(event) {
    console.log(depositInput.value);
// Prevent the page from reloading
// update the amount value
// save wallate in local storage
// update the wallet in HTMl
    event.preventDefault(); 
    newWallet.amount += Number(depositInput.value);
    console.log(newWallet.amount)
    saveWallet();
    inMyWallet();

}



// Create an event listener so that when the withDraw link is clicked, the withDrawFunction method is invoked.
var withDraw = document.getElementById('btn2');
var withdrawInput = document.getElementById('withdraw');
withDraw.addEventListener('click', withDrawFunction)

function withDrawFunction(event) {
// Prevent the page from reloading
// update the amount value
// save wallate in local storage
// update the wallet in HTMl
    event.preventDefault();
    if (newWallet.amount<withdrawInput.value){
        console.log('you don\'t have enough money')
    }
    else{
    newWallet.amount -= Number(withdrawInput.value);
    }
    console.log(newWallet.amount)
    saveWallet();
    inMyWallet();

}




// function to save wallet
function saveWallet() {

    localStorage.setItem('wallet', JSON.stringify(newWallet));
}


// function to update the contant of IN MY WALLET
var myWallet=document.getElementById('in_my_wallet');
var myWalletValue=document.createElement('p');
myWallet.appendChild(myWalletValue);
function inMyWallet(){
    
    myWalletValue.textContent=Number(newWallet.amount);
    console.log(myWalletValue)
}







//Function for result of donation in chart
function draw() {

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: projectDonateArray[0].name,
            datasets: [{
                label: '# of amount',
                data: projectDonateArray.donateAmount,
                backgroundColor: red,
                borderColor: black,
                borderWidth: 1,

            }]
        },

        options: {
            responsive: false,
            maintainAspectRatio: false,



            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    fontColor: 'black'
                }
            },

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        precision: 1,
                        stepSize: 1,

                        fontColor: 'black'

                    }
                }],

                xAxes: [{
                    ticks: {
                        fontColor: 'black'
                    }

                }
                ]
            }
        }
    });
}



