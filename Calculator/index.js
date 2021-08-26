let num1 = document.getElementById("fnum-el")
let num2 = document.getElementById("snum-el")

let result = document.getElementById("sum-el")
let our_result = null


function add() {

    result.textContent = "Result = "
    our_result = Number(num1.value) + Number(num2.value)
    result.textContent += " " + our_result

}

function subtract() {

    result.textContent = "Result = "

    our_result = num1.value - num2.value
    result.textContent += " " + our_result

}

function divide() {
    result.textContent = "Result = "

    our_result = num1.value / num2.value
    result.textContent += " " + our_result

}

function multiply() {   

    result.textContent = "Result = "
    
    our_result = num1.value * num2.value
    result.textContent += " " + our_result

}