import { readFile } from '../shared'
import { solve1, parseInput, getItemValue, solve2 } from './index.js'

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

  it('should "solve" return expected result', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))
    const result = solve1(parsed)

    expect(result).toBe(157)
  })

  it.only('should "solve" return expected result', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))
    const result = solve2(parsed)

    expect(result).toBe(70)
  })
})
