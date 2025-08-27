const calc = require('./calculadora')

let prompt = require('prompt-sync')()

const operation = prompt("Qual a operação?")
const firstNumber = parseFloat(prompt("Qual o primeiro número? "))
const secondNumber = operation === "+" || operation === "-" || operation === "*" || operation === "/"
    ?
    parseFloat(prompt("Qual o segundo número? "))
    :
    0

switch (operation) {
    case "+":
        console.log("O resultado é " + calc.sumNumber(firstNumber, secondNumber))
        break
    case "-":
        console.log("O resultado é " + calc.subtractNumber(firstNumber, secondNumber))
        break
    case "*":
        console.log("O resultado é " + calc.multiplyNumber(firstNumber, secondNumber))
        break
    case "/":
        console.log("O resultado é " + calc.divideNumber(firstNumber, secondNumber))
        break
    case "raiz":
        console.log("O resultado é " + calc.squareRoot(firstNumber))
        break
    case "quadrado":
        console.log("O resultado é " + calc.squareNumber(firstNumber))
}