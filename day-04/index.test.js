import { readFile } from '../shared'
import { solvePartOne, solvePartTwo, parseInput, checkRangeIntersection, checkRangeOverlap } from './'

describe('Day 04', () => {
  it('should "parseInput" parse input into valid data structure', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt')) // Check data structure
    parsed.forEach((group) => {
      expect(group).toBeInstanceOf(Array)
      expect(group).toHaveLength(2)
      expect(group[0]).toMatchObject({
        start: expect.any(Number),
        end: expect.any(Number),
      })
    })
  })

  it('should "checkRange" return true if any range overlaps the other', () => {
    const OVERLAP_CASES = [
      {
        ranges: [
          { start: 2, end: 4 },
          { start: 6, end: 8 },
        ],
        expected: false,
      },
      {
        ranges: [
          { start: 2, end: 3 },
          { start: 4, end: 5 },
        ],
        expected: false,
      },
      {
        ranges: [
          { start: 7, end: 9 },
          { start: 5, end: 7 },
        ],
        expected: false,
      },
      {
        ranges: [
          { start: 2, end: 8 },
          { start: 3, end: 7 },
        ],
        expected: true,
      },
      {
        ranges: [
          { start: 6, end: 6 },
          { start: 4, end: 6 },
        ],
        expected: true,
      },
      {
        ranges: [
          { start: 2, end: 6 },
          { start: 4, end: 8 },
        ],
        expected: false,
      },
    ]

    OVERLAP_CASES.forEach((testCase, index) => {
      try {
        expect(checkRangeOverlap(...testCase.ranges)).toBe(testCase.expected)
      } catch (error) {
        console.log(`❌ Overlap case ${index + 1}/${OVERLAP_CASES.length} failed.`)
        throw error
      }
    })
  })

  it('should "checkRange" return true if range overlaps', () => {
    const INTERSECTION_CASES = [
      {
        ranges: [
          { start: 2, end: 4 },
          { start: 6, end: 8 },
        ],
        expected: false,
      },
      {
        ranges: [
          { start: 2, end: 3 },
          { start: 4, end: 5 },
        ],
        expected: false,
      },
      {
        ranges: [
          { start: 7, end: 9 },
          { start: 5, end: 7 },
        ],
        expected: true,
      },
      {
        ranges: [
          { start: 2, end: 8 },
          { start: 3, end: 7 },
        ],
        expected: true,
      },
      {
        ranges: [
          { start: 6, end: 6 },
          { start: 4, end: 6 },
        ],
        expected: true,
      },
      {
        ranges: [
          { start: 2, end: 6 },
          { start: 4, end: 8 },
        ],
        expected: true,
      },
    ]

    INTERSECTION_CASES.forEach((testCase, index) => {
      try {
        expect(checkRangeIntersection(...testCase.ranges)).toBe(testCase.expected)
      } catch (error) {
        console.log(`❌ Intersection case ${index + 1}/${OVERLAP_CASES.length} failed.`)
        throw error
      }
    })
  })

  it('should "solvePartOne" return expected result', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))
    const result = solvePartOne(parsed)

    expect(result).toBe(2)
  })

  it('should "solvePartTwo" return expected result', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))
    const result = solvePartTwo(parsed)

    expect(result).toBe(4)
  })
})
