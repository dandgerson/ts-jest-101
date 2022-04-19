import calc from "./calc";

describe('cacl', () => {
  describe('add', () => {
    test('should return 15 for add(10, 5)', () => {
      expect(calc.add(10, 5)).toEqual(15)
    })
  })
})
