let [...numberButtons] = document.querySelectorAll(".number")
let [...operatorButtons] = document.querySelectorAll(".operator")
const deleteButton = document.getElementById("delete")
const equalsButton = document.getElementById("equals")
const display = document.getElementById("text")
const remember = document.getElementById("remember")
const forget = document.getElementById("forget")
const type = document.getElementById("type")
let data = ""
let input = ""
const operators = ["+","-","*","/"]
let operatorCount = 0
numberButtons.forEach((button) => button.onclick = function(){
    input += this.value
    display.value = input
})
operatorButtons.forEach((button) => button.onclick = function(){
    if(input === '' || checkLastOperator()) return
    operatorCount++

    if(operatorCount === 2){
        calculate()
        operatorCount = 1
    }

    input += ` ${this.value} `
    display.value = input

})
deleteButton.onclick = function(){
    input = input.trim()
    if(input.length > 0){
        input = input.slice(0,-1)
        display.value = input
    }
    
}
function checkLastOperator(){
    const last = input.trim().slice(-1)
    return operators.includes(last)
}
equalsButton.addEventListener("click",calculate)
function calculate(){
    try {
        input = eval(input).toString()
        display.value = input
    }
    catch (error) {
        display.value = 'Error'
        input = ''
    }
}
function checkOperator(){
    input = input.trim()
    if(input.split("").includes(" ")){
        return true

    }
}
remember.onclick = function(){
    if(checkOperator()) return
    data = input
}
forget.onclick = function(){
    data = ""
}
type.onclick = function(){
    input += data
    display.value = input
}