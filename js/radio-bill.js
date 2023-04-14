// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

const billAddBtn = document.querySelector(".radioBillAddBtn")
const callTotalTwo = document.querySelector(".callTotalTwo");
const smsTotalTwo = document.querySelector(".smsTotalTwo");
const totalTwo = document.querySelector(".totalTwo");

var totalForCalls = 0;
var smsTotal = 0;

function textBillTotal() {

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
        if (billItemType === "call") {
            totalForCalls += 2.75
        }
        else if (billItemType === "sms") {
            smsTotal += 0.75;
        }
    }


    callTotalTwo.innerHTML = totalForCalls.toFixed(2)
    smsTotalTwo.innerHTML = smsTotal.toFixed(2);
    var totalCost = totalForCalls + smsTotal;
    totalTwo.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50) {
        totalTwo.classList.add("danger");
    }
    else if (totalCost >= 30) {
        totalTwo.classList.add("warning");
    }

}
billAddBtn.addEventListener("click", textBillTotal)