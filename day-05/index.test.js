import { readFile } from '../shared'
import { solvePartOne, solvePartTwo, parseInput } from './'

describe('Day 05', () => {
  it('should "parseInput" parse input into valid data structure', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))
    const { stacks, movements } = parsed

    expect(stacks).toEqual([['N', 'Z'], ['D', 'C', 'M'], ['P']])
    expect(movements).toEqual([
      { quantity: 1, fromStack: 1, toStack: 0 },
      { quantity: 3, fromStack: 0, toStack: 2 },
      { quantity: 2, fromStack: 1, toStack: 0 },
      { quantity: 1, fromStack: 0, toStack: 1 },
    ])
  })

  it('should "solvePartOne" return expected result', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))
    const result = solvePartOne(parsed)

    expect(result).toBe('CMZ')
  })

  it('should "solvePartTwo" return expected result', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))
    const result = solvePartTwo(parsed)

    expect(result).toBe(/* expected part two example result */)
  })
})
