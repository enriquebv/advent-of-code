import { readFile } from '../shared'
import { solvePartOne, solvePartTwo, parseInput, checkRange } from './'

describe('Day 04', () => {
  it('should "parseInput" parse input into valid data structure', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt')) // Check data structure
    parsed.forEach((group) => {
      expect(group).toBeInstanceOf(Array)
      expect(group).toHaveLength(2)
      expect(group[0]).toHaveLength(2)
      expect(group[1]).toHaveLength(2)
      group[0].forEach((item) => expect(typeof item).toBe('number'))
    })
  })

  it('should "checkRange" return true if second any of the ranges can be included in the other', () => {
    expect(checkRange('inclusion', [1, 3], [4, 5])).toBe(false)
    expect(checkRange('inclusion', [1, 4], [2, 3])).toBe(true)
  })

  it.only('should "checkRange" return true if range overlaps', () => {
    const cases = [
      {
        ranges: [
          [2, 4],
          [6, 8],
        ],
        expected: false,
      },
      {
        ranges: [
          [2, 3],
          [4, 5],
        ],
        expected: false,
      },
      {
        ranges: [
          [7, 9],
          [5, 7],
        ],
        expected: true,
      },
      {
        ranges: [
          [2, 8],
          [3, 7],
        ],
        expected: true,
      },
      {
        ranges: [
          [6, 6],
          [4, 6],
        ],
        expected: true,
      },
      {
        ranges: [
          [2, 6],
          [4, 8],
        ],
        expected: true,
      },
    ]

    cases.forEach((testCase) => expect(checkRange('overlap', ...testCase.ranges)).toBe(testCase.expected))
  })

  it('should "solvePartOne" return expected result', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))
    const result = solvePartOne(parsed)

    expect(result).toBe(2)
  })

  it('should "solvePartTwo" return expected result', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))
    const result = solvePartTwo(parsed)

    expect(result).toBe(/* expected part two example result */)
  })
})
