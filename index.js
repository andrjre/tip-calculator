let billTotal = document.getElementById("billTotal")
let submit = document.getElementById("submit")
let result = document.getElementById("result")
let tipTotal = document.getElementById("tipTotal")



submit.onclick = function(){
    result.textContent = Math.floor(billTotal.value * 1.2)
    tipTotal.textContent = Math.floor(((billTotal.value * 1.2) - billTotal.value))
}