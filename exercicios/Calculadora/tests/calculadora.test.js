const calc = require('../calculadora')

describe('Testando a calculadora', () => {

    //Adição
    test('1 + 3 = 4', () => {
        expect(calc.sumNumber(1, 3)).toBe(4)
    })
    test('1 + 0 = 1', () => {
        expect(calc.sumNumber(1, 0)).toBe(1)
    })
    test('0 + 0 = 0', () => {
        expect(calc.sumNumber(0, 0)).toBe(0)
    })
    test('-1 + -2 = -3', () => {
        expect(calc.sumNumber(-1, -2)).toBe(-3)
    })

    // Subtração
    test('1 - 1 = 0', () => {
        expect(calc.subtractNumber(1, 1)).toBe(0)
    })
    test('10 - 5 = 5', () => {
        expect(calc.subtractNumber(10, 5)).toBe(5)
    })
    test('0 - 5 = -5', () => {
        expect(calc.subtractNumber(0, 5)).toBe(-5)
    })
    test('5 - -5 = 10', () => {
        expect(calc.subtractNumber(5, -5)).toBe(10)
    })
    test('-5 - 5 = -10', () => {
        expect(calc.subtractNumber(-5, 5)).toBe(-10)
    })
    test('-5 - -5 = 0', () => {
        expect(calc.subtractNumber(-5, -5)).toBe(0)
    })
    test('5.2 - 2.2 = 3', () => {
        expect(calc.subtractNumber(5.2, 2.2)).toBe(3)
    })
    test('-5.5 - -2.5 = -8', () => {
        expect(calc.subtractNumber(-5.5, -2.5)).toBe(-3)
    })

    //Multiplicação
    test('10 * 5 = 50', () => {
        expect(calc.multiplyNumber(10, 5)).toBe(50)
    })
    test('10 * -5 = -50', () => {
        expect(calc.multiplyNumber(10, -5)).toBe(-50)
    })
    test('0 * 5 = 0', () => {
        expect(calc.multiplyNumber(0, 5)).toBe(0)
    })
    test('-10 * -5 = 50', () => {
        expect(calc.multiplyNumber(-10, -5)).toBe(50)
    })
    test('1.5 * 5 = 7.5', () => {
        expect(calc.multiplyNumber(1.5, 5)).toBe(7.5)
    })

    //Divisão
    test('10 / 5 = 2', () => {
        expect(calc.divideNumber(10, 5)).toBe(2)
    })
    test('-10 / 5 = 2', () => {
        expect(calc.divideNumber(-10, 5)).toBe(-2)
    })
    test('10 / -5 = -2', () => {
        expect(calc.divideNumber(10, -5)).toBe(-2)
    })
    test('-20 / -5 = -4', () => {
        expect(calc.divideNumber(-20, -5)).toBe(4)
    })
    test('2 / 0 = "Não é possível dividir por 0"', () => {
        expect(calc.divideNumber(-2, 0)).toBe("Não é possível dividir por 0")
    })
    test('0 / 2 = 0', () => {
        expect(calc.divideNumber(0, 2)).toBe(0)
    })

})