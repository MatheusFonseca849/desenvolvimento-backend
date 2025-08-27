const sumNumber = (a, b) => {
 return a + b
}

const subtractNumber = (a, b) => {
    return a - b
}

const multiplyNumber = (a, b) => {
    return a * b
}

const divideNumber = (a, b) => {
    b === 0 ? "Não é possível dividir por 0" : a / b
}

const squareNumber = (a) => {
    return a * a
}

const squareRoot = (a) => {
    return Math.sqrt(a)
}

module.exports = {
    sumNumber,
    subtractNumber,
    multiplyNumber,
    divideNumber,
    squareNumber,
    squareRoot
}