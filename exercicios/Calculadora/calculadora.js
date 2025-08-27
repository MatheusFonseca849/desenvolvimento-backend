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
   return b === 0 ? "Não é possível dividir por 0" : a / b
}

const squareNumber = (a) => {
    return a * a
}

const squareRoot = (a) => {
    return a >= 0
    ?
    Math.sqrt(a)
    :
    "Números negativos não possuem raíz quadrada"
}

module.exports = {
    sumNumber,
    subtractNumber,
    multiplyNumber,
    divideNumber,
    squareNumber,
    squareRoot
}