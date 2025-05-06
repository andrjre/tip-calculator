let submit = document.querySelector("#submit")
let billTotal = document.querySelector("#billTotal")
let tipPercentage = document.querySelector("#tipPercentage")
let result = document.querySelector("#result")



submit.addEventListener("click", function(){

    tipPercentagePercent = tipPercentage.value * 0.01
    let sum = billTotal.value * tipPercentagePercent 

    console.log(sum)
    result.textContent = `You tip ${sum}, The total you pay is ${Number(billTotal.value) + Number(sum)}`
}
)