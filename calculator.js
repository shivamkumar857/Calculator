

// let s1 = document.getElementById("s1")
// let s2 = document.getElementById("s2")
// let s3 = document.getElementById("s3")
// let s4 = document.getElementById("s4")
// let s5 = document.getElementById("s5")
// let s6 = document.getElementById("s6")
// let s7 = document.getElementById("s7")
// let s8 = document.getElementById("s8")
// let s9 = document.getElementById("s9")
// let s0 = document.getElementById("s0")
// let splus = document.getElementById("splus")
// let sminus = document.getElementById("sminus")
// let sdiv = document.getElementById("sdiv")
// let smul = document.getElementById("smultiply")
// let sdisplay = document.getElementById("display")
// let sclear = document.getElementById("clear")
// let sequal = document.getElementById("sequal") // Corrected ID
// let sdecimal = document.getElementById("sdecimal") // Decimal button

// let currentInput = ""
// let operator = ""
// let firstOperand = null

// function updateDisplay(value) {
//     sdisplay.value = value
// }

// // Number buttons
// [s0, s1, s2, s3, s4, s5, s6, s7, s8, s9].forEach((btn, idx) => {
//     btn.onclick = function() {
//         currentInput += idx.toString()
//         updateDisplay(currentInput)
//     }
// })

// // Decimal button
// sdecimal.onclick = function() {
//     if (!currentInput.includes(".")) {
//         if (currentInput === "") {
//             currentInput = "0."
//         } else {
//             currentInput += "."
//         }
//         updateDisplay(currentInput)
//     }
// }

// // Operator buttons
// splus.onclick = function() { setOperator("+") }
// sminus.onclick = function() { setOperator("-") }
// smul.onclick = function() { setOperator("*") }
// sdiv.onclick = function() { setOperator("/") }

// function setOperator(op) {
//     if (currentInput === "") return
//     if (firstOperand === null) {
//         firstOperand = parseFloat(currentInput)
//         operator = op
//         currentInput = ""
//         updateDisplay("")
//     }
// }

// // Equal button
// sequal.onclick = function() {
//     if (firstOperand !== null && operator !== "" && currentInput !== "") {
//         let secondOperand = parseFloat(currentInput)
//         let result
//         switch (operator) {
//             case "+": result = firstOperand + secondOperand; break
//             case "-": result = firstOperand - secondOperand; break
//             case "*": result = firstOperand * secondOperand; break
//             case "/": result = secondOperand !== 0 ? firstOperand / secondOperand : "Error"; break
//             default: result = "Error"
//         }
//         updateDisplay(result)
//         // Reset for next calculation
//         currentInput = ""
//         operator = ""
//         firstOperand = null
//     }
// }

// // Clear button
// sclear.onclick = function() {
//     currentInput = ""
//     operator = ""
//     firstOperand = null
//     updateDisplay("")
// }

let s1 = document.getElementById("s1")
let s2 = document.getElementById("s2")
let s3 = document.getElementById("s3")
let s4 = document.getElementById("s4")
let s5 = document.getElementById("s5")
let s6 = document.getElementById("s6")
let s7 = document.getElementById("s7")
let s8 = document.getElementById("s8")
let s9 = document.getElementById("s9")
let s0 = document.getElementById("s0")
let splus = document.getElementById("splus")
let sminus = document.getElementById("sminus")
let sdiv = document.getElementById("sdiv")
let smul = document.getElementById("smultiply")
let sdisplay = document.getElementById("display")
let sclear = document.getElementById("clear")
let sequal = document.getElementById("sequal")
let sdecimal = document.getElementById("sdecimal")

let expression = ""

function updateDisplay(value) {
    sdisplay.value = value
}

// Number buttons
[s0, s1, s2, s3, s4, s5, s6, s7, s8, s9].forEach((btn, idx) => {
    btn.onclick = function() {
        expression += idx.toString()
        updateDisplay(expression)
    }
})

// Decimal button
sdecimal.onclick = function() {
    // Prevent multiple decimals in a number
    let parts = expression.split(/[\+\-\*\/]/)
    let lastPart = parts[parts.length - 1]
    if (!lastPart.includes(".")) {
        if (expression === "" || /[\+\-\*\/]$/.test(expression)) {
            expression += "0."
        } else {
            expression += "."
        }
        updateDisplay(expression)
    }
}

// Operator buttons
splus.onclick = function() { addOperator("+") }
sminus.onclick = function() { addOperator("-") }
smul.onclick = function() { addOperator("*") }
sdiv.onclick = function() { addOperator("/") }

function addOperator(op) {
    if (expression === "") return
    // Prevent two operators in a row
    if (/[\+\-\*\/]$/.test(expression)) {
        expression = expression.slice(0, -1) + op
    } else {
        expression += op
    }
    updateDisplay(expression)
}

// Equal button
sequal.onclick = function() {
    try {
        // Evaluate the expression using eval (for simple calculator)
        let result = eval(expression)
        updateDisplay(result)
        expression = result.toString()
    } catch (e) {
        updateDisplay("Error")
        expression = ""
    }
}

// Clear button
sclear.onclick = function() {
    expression = ""
    updateDisplay("")
}