import { readFile } from '../shared'
import { parseInput, solve } from './index'

describe('Day 01', () => {
  it('should "parseInput" parse input raw input into valid matrix data structure', () => {
    const matrix = parseInput(readFile(__dirname, 'example.txt'))

    matrix.forEach((array) => {
      expect(array).toBeInstanceOf(Array)
      array.forEach((item) => expect(item).toEqual(expect.any(Number)))
    })
  })

  it('should "solve" return both day cases', () => {
    const result = solve(parseInput(readFile(__dirname, 'example.txt')))

    expect(result.biggestCalories).toEqual(24000)
    expect(result.firstThreeBiggestCalories).toEqual(35000)
  })
})
