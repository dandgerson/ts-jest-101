type OperationType = (a: number, b: number) => number

export interface CalculatorInterface {
  precision: number
  add: OperationType
  sub: OperationType
  mult: OperationType
  div: OperationType
  format: (n: number) => number
}

type OptionsType = {
  precision: number
}

class Calculator implements CalculatorInterface {
  precision: number

  constructor({
    precision,
  }: OptionsType) {
    this.precision = precision
  }

  format = (n: number) => Number((n).toFixed(this.precision))

  add: OperationType = (a, b) => {
    return this.format(a + b)
  }
  mult: OperationType = (a, b) => {
    return this.format(a * b)
  }
  sub: OperationType = (a, b) => {
    return this.format(a - b)
  }
  div: OperationType = (a, b) => {
    return this.format(a / b)
  }
}

export default Calculator
