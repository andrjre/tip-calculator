let billTotal = document.getElementById("billTotal")
let submit = document.getElementById("submit")
let result = document.getElementById("result")
let tipTotal = document.getElementById("tipTotal")

submit.onclick = function(){
    result.textContent = "In total you pay " + (billTotal.value * 1.2)
    tipTotal.textContent ="The server recieves " +  (((billTotal.value * 1.2) - billTotal.value))
}

// find out how to set to 2 decimal places
// implement people divider 