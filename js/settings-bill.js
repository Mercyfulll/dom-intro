// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

const checkRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
const callCostText = document.querySelector(".callCostSetting");
const smsCostText = document.querySelector(".smsCostSetting");
const warningText = document.querySelector(".warningLevelSetting");
const criticalText = document.querySelector(".criticalLevelSetting");
const updateSettingsBtn = document.querySelector(".updateSettings");
const buttonAdd = document.querySelector(".AddSettings");
const callTotalThree = document.querySelector(".callTotalSettings");
const smsTotalThree = document.querySelector(".smsTotalSettings");
const totalThree = document.querySelector(".totalSettings");

var totalOfCalls = 0;
callTotalThree.innerHTML = totalOfCalls.toFixed(2)
var totalOfSms = 0;
smsTotalThree.innerHTML = smsTotal.toFixed(2);
var totalOfCost = 0;
totalThree.innerHTML = totalOfCost.toFixed(2);


var smsInput = 0;
var callInput = 0;
var warningInput = 0;
var criticalInput = 0;

updateSettingsBtn.addEventListener('click', function(){
   
    smsInput = parseFloat(smsCostText.value);
    callInput = parseFloat(callCostText.value);
    warningInput = parseFloat(warningText.value);
    criticalInput = parseFloat(criticalText.value);

    totalThree.classList.remove("danger")
    totalThree.classList.remove("warning")
    buttonAdd.disabled = false;
    
})

function settingsBillTotal(){
    
    var checkRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if (checkRadioBtn) {
        var billItemTypeWithSettings = checkRadioBtn.value
        if (billItemTypeWithSettings === "call") {
            totalOfCalls += callInput;
        }
        else if (billItemTypeWithSettings === "sms") {
            totalOfSms += smsInput;
        }
    }
    
    callTotalThree.innerHTML = totalOfCalls.toFixed(2)
    smsTotalThree.innerHTML = totalOfSms.toFixed(2)
    var totalOfCost = totalOfCalls + totalOfSms;
    totalThree.innerHTML = totalOfCost.toFixed(2)
    
    if (totalOfCost >= criticalInput) {
        totalThree.classList.add("danger");
        buttonAdd.disabled = true;
    }else if (totalOfCost >= warningInput) {
        totalThree.classList.add("warning");
        

    }
     
}

buttonAdd.addEventListener("click", settingsBillTotal)