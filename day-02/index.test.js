import { getRoundOutput, parseInput, solvePartOne, solvePartTwo } from '.'
import { readFile } from '../shared'
import { SHAPES, OUTPUTS } from './shared-enums'

describe('Day 02', () => {
  it('should "parseInput" parse input raw input into valid rounds data structure', () => {
    const parsed = parseInput(readFile(__dirname, './example.txt'))

    parsed.forEach((line) => {
      expect(line).toBeInstanceOf(Array)
      expect(line).toHaveLength(2)
    })
  })

  it('should "getRoundOutput" correctly returns three possible outputs', () => {
    expect(getRoundOutput(SHAPES.SCISSORS, SHAPES.PAPER)).toEqual(OUTPUTS.WIN)
    expect(getRoundOutput(SHAPES.ROCK, SHAPES.SCISSORS)).toEqual(OUTPUTS.WIN)
    expect(getRoundOutput(SHAPES.PAPER, SHAPES.ROCK)).toEqual(OUTPUTS.WIN)

    expect(getRoundOutput(SHAPES.PAPER, SHAPES.SCISSORS)).toEqual(OUTPUTS.LOSS)
    expect(getRoundOutput(SHAPES.SCISSORS, SHAPES.ROCK)).toEqual(OUTPUTS.LOSS)
    expect(getRoundOutput(SHAPES.ROCK, SHAPES.PAPER)).toEqual(OUTPUTS.LOSS)

    expect(getRoundOutput(SHAPES.PAPER, SHAPES.PAPER)).toEqual(OUTPUTS.DRAW)
    expect(getRoundOutput(SHAPES.SCISSORS, SHAPES.SCISSORS)).toEqual(OUTPUTS.DRAW)
    expect(getRoundOutput(SHAPES.ROCK, SHAPES.ROCK)).toEqual(OUTPUTS.DRAW)
  })

  it('should calculate theoric output if second column are shapes', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))
    const result = solvePartOne(parsed)
    expect(result).toEqual(15)
  })

  it('should calculate theoric output if second column are outputs', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))
    const result = solvePartTwo(parsed)
    expect(result).toEqual(12)
  })
})
