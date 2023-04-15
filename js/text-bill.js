// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

const billTypeText = document.querySelector(".billTypeText");
const addToBillBtn = document.querySelector(".addToBillBtn");
const callTotalOne = document.querySelector(".callTotalOne");
const smsTotalOne = document.querySelector(".smsTotalOne");
const totalOne = document.querySelector(".totalOne");

var callsTotal = 0;
callTotalOne.innerHTML = callsTotal.toFixed(2);
var smsTotal = 0;
smsTotalOne.innerHTML = smsTotal.toFixed(2);
var totalCost = 0;
totalOne.innerHTML = totalCost.toFixed(2);


function textBillTotal() {
    var bill = billTypeText.value.trim()
    var billTypeEntered = bill.toLowerCase() ;

        if (billTypeEntered === "call") {
            callsTotal += 2.75
        }
        else if (billTypeEntered === "sms") {
            smsTotal += 0.75;
        } 

    callTotalOne.innerHTML = callsTotal.toFixed(2)
    smsTotalOne.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalOne.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50) {
        totalOne.classList.add("danger");
    }
    else if (totalCost >= 30) {
        totalOne.classList.add("warning");
    }
    
}
addToBillBtn.addEventListener("click", textBillTotal)