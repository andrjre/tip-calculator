let billTotal = document.getElementById("billTotal")
let submit = document.getElementById("submit")
let result = document.getElementById("result")
let tipTotal = document.getElementById("tipTotal")

submit.onclick = function(){
    result.textContent = "In total you pay " + "£" + Math.round(billTotal.value * 1.2)
    tipTotal.textContent ="The server recieves " +  "£" + ((Math.round(billTotal.value * 1.2) - billTotal.value))
    
    if(billTotal.value < 3){
        tipTotal.textContent = "dont bother"
    }
}
   

// find out how to set to 2 decimal places
// implement people divider and tip % option