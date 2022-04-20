import Calculator from "./calc";


describe('calculator', () => {
  let calc: null | Calculator = null

  beforeEach(() => {
    const options = {
      precision: 2
    }

    calc = new Calculator(options)
  })

  describe('should perform addition', () => {
    it('adds two positive numbers', () => {
      const result = calc?.add(1.333, 3.2)

      expect(result).toEqual(4.53)
    })

    it('adds two negative numbers', () => {
      const result = calc?.add(-1.333, -3.2)
      expect(result).toEqual(-4.53)
    })

    it('adds one positive and one negative numbers', () => {
      const result = calc?.add(1.333, -3.2)
      expect(result).toEqual(-1.87)
    })
  })

  it('should perform subtraction', () => {
    expect(calc?.sub).toBeDefined()
  })

  it('should perform multiplication', () => {
    expect(calc?.mult).toBeDefined()
  })

  it('should perform division', () => {
    expect(calc?.div).toBeDefined()
  })
})
