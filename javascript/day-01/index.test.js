import { parseInput, sumNumbers, solve } from './index'

const DEMO_INPUT = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`

describe('Day 01', () => {
  it('should "parseInput" parse input raw input into valid matrix data structure', () => {
    const matrix = parseInput(DEMO_INPUT)

    matrix.forEach((array) => {
      expect(array).toBeInstanceOf(Array)
      array.forEach((item) => expect(item).toEqual(expect.any(Number)))
    })
  })

  it('should "sumNumbers" correctly compute all number passed as arguments', () => {
    expect(sumNumbers(1)).toEqual(1)
    expect(sumNumbers(1, 2)).toEqual(3)

    const parsed = parseInput(DEMO_INPUT)

    const expectedSums = [6000, 4000, 11000, 24000, 10000]

    expectedSums.forEach((expectedSum, index) => expect(sumNumbers(...parsed[index])).toEqual(expectedSum))
  })

  it('should "main" return both day cases', () => {
    const result = solve(parseInput(DEMO_INPUT))

    expect(result.biggestCalories).toEqual(24000)
    expect(result.firstThreeBiggestCalories).toEqual(35000)
  })
})
