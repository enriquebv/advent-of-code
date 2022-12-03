import { readFile } from '../shared'
import { solve, parseInput } from './'

describe('Day 03', () => {
  it('should "parseInput" parse input into valid matrix data structure', () => {
    const matrix = parseInput(readFile(__dirname, 'example.txt'))

    expect(matrix).toBeInstanceOf(Array)
    matrix.forEach((rucksack) => {
      expect(rucksack).toBeInstanceOf(Array)
      expect(rucksack).toHaveLength(2)

      rucksack[0].forEach((item) => expect(typeof item).toBe('string'))
      rucksack[1].forEach((item) => expect(typeof item).toBe('string'))
    })
  })

  it('should "solve" return expected result', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))
    const result = solve(parsed)

    expect(result).toBe(157)
  })
})
