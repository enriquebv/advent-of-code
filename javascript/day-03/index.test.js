import { readFile } from '../shared'
import { parseInput, getItemValue, solvePartOne, solvePartTwo } from './index.js'

describe('Day 03', () => {
  it('should "parseInput" parse input into valid matrix data structure', () => {
    const matrix = parseInput(readFile(__dirname, 'example.txt'))

    expect(matrix).toBeInstanceOf(Array)
    matrix.forEach((rucksack) => {
      expect(rucksack).toBeInstanceOf(Array)
      rucksack.forEach((character) => expect(typeof character).toBe('string'))
    })
  })

  it('should "getItemValue" should return correct item values per character', () => {
    expect(getItemValue('a')).toBe(1)
    expect(getItemValue('b')).toBe(2)
    expect(getItemValue('c')).toBe(3)
    expect(getItemValue('x')).toBe(24)
    expect(getItemValue('y')).toBe(25)
    expect(getItemValue('z')).toBe(26)

    expect(getItemValue('A')).toBe(27)
    expect(getItemValue('B')).toBe(28)
    expect(getItemValue('C')).toBe(29)
    expect(getItemValue('X')).toBe(50)
    expect(getItemValue('Y')).toBe(51)
    expect(getItemValue('Z')).toBe(52)
  })

  it('should "solvePartOne" return expected result', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))

    const result = solvePartOne(parsed)
    console.log(result)

    expect(result).toBe(157)
  })

  it('should "solvePartTwo" return expected result', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))
    const result = solvePartTwo(parsed)

    expect(result).toBe(70)
  })
})
