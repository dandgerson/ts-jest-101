type OptionsType = {
  precision: number
}

class Calculator {
  precision: number

  constructor({
    precision,
  }: OptionsType) {
    this.precision = precision
  }

  format = (n: number) => Number((n).toFixed(this.precision))

  add(a: number, b: number): number {
    return this.format(a + b)
  }
  mult(a: number, b: number): number {
    return this.format(a * b)
  }
  sub(a: number, b: number): number {
    return this.format(a - b)
  }
  div(a: number, b: number): number {
    return this.format(a / b)
  }
}

export default Calculator
