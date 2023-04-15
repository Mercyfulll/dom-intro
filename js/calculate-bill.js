//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button

const billString = document.querySelector(".billString");
const billTotal = document.querySelector(".billTotal");
const calculateBtn = document.querySelector(".calculateBtn");


function totalPhoneBill(){
    var billStrings = billString.value.split(",");
    var total = 0
    for (var i = 0; i < billStrings.length; i++) {
        var billItem = billStrings[i].trim().toLowerCase();
        
        if (billItem.toLowerCase() === "call") {
            total += 2.75;
        }
        else if (billItem.toLowerCase() === "sms") {
            total += 0.75;
        }
    }
        var roundedBillTotal = total.toFixed(2); 
        billTotal.innerHTML = roundedBillTotal;
         

        if (roundedBillTotal > 20 & roundedBillTotal < 30){
            billTotal.classList.add("warning")
        } else if (roundedBillTotal > 30){
            billTotal.classList.add("danger")
        }
        console.log(billTotal.innerHTML);
}


calculateBtn.addEventListener('click',totalPhoneBill);


