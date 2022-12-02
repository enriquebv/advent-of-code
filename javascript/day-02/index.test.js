import { getRoundOutput, parseInput, solve1, solve2 } from '.'

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
    expect(getRoundOutput('SCISSORS', 'PAPER')).toEqual('WIN')
    expect(getRoundOutput('ROCK', 'SCISSORS')).toEqual('WIN')
    expect(getRoundOutput('PAPER', 'ROCK')).toEqual('WIN')

    expect(getRoundOutput('PAPER', 'SCISSORS')).toEqual('LOSS')
    expect(getRoundOutput('SCISSORS', 'ROCK')).toEqual('LOSS')
    expect(getRoundOutput('ROCK', 'PAPER')).toEqual('LOSS')

    expect(getRoundOutput('PAPER', 'PAPER')).toEqual('DRAW')
    expect(getRoundOutput('SCISSORS', 'SCISSORS')).toEqual('DRAW')
    expect(getRoundOutput('ROCK', 'ROCK')).toEqual('DRAW')
  })

  it('should calculate theoric output if second column are shapes', () => {
    expect(solve1(parseInput(DEMO_INPUT))).toEqual(15)
  })

  it('should calculate theoric output if second column are outputs', () => {
    expect(solve2(parseInput(DEMO_INPUT))).toEqual(12)
  })
})
