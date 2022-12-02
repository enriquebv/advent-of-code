import { getRoundOutput, parseInput, solve1, solve2 } from '.'
import { SHAPES, OUTPUTS } from './shared-enums'

const DEMO_INPUT = `
A Y
B X
C Z
`
describe('Day 02', () => {
  it('should "parseInput" parse input raw input into valid rounds data structure', () => {
    const parsed = parseInput(DEMO_INPUT)

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
    expect(solve1(parseInput(DEMO_INPUT))).toEqual(15)
  })

  it('should calculate theoric output if second column are outputs', () => {
    expect(solve2(parseInput(DEMO_INPUT))).toEqual(12)
  })
})
