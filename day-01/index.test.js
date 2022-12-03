import { readFile } from '../shared'
import { parseInput, sumNumbers, solve } from './index'

describe('Day 01', () => {
  it('should "parseInput" parse input raw input into valid matrix data structure', () => {
    const matrix = parseInput(readFile(__dirname, 'example.txt'))

    matrix.forEach((array) => {
      expect(array).toBeInstanceOf(Array)
      array.forEach((item) => expect(item).toEqual(expect.any(Number)))
    })
  })

  it('should "sumNumbers" correctly compute all number passed as arguments', () => {
    expect(sumNumbers(1)).toEqual(1)
    expect(sumNumbers(1, 2)).toEqual(3)

    const parsed = parseInput(readFile(__dirname, 'example.txt'))

    const expectedSums = [6000, 4000, 11000, 24000, 10000]

    expectedSums.forEach((expectedSum, index) => expect(sumNumbers(...parsed[index])).toEqual(expectedSum))
  })

  it('should "solve" return both day cases', () => {
    const result = solve(parseInput(readFile(__dirname, 'example.txt')))

    expect(result.biggestCalories).toEqual(24000)
    expect(result.firstThreeBiggestCalories).toEqual(35000)
  })
})
