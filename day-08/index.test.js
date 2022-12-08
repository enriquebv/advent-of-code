import { readFile } from '../shared'
import { solvePartOne, solvePartTwo, parseInput, getDistanceToSimilarSizeItems } from './'

describe('Day 08', () => {
  it('should "parseInput" parse input into valid data structure', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))

    expect(parsed).toEqual([
      [3, 0, 3, 7, 3],
      [2, 5, 5, 1, 2],
      [6, 5, 3, 3, 2],
      [3, 3, 5, 4, 9],
      [3, 5, 3, 9, 0],
    ])
  })

  it('should "distanceToGeaterOrEqual" correctly calculates distance', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))

    expect(
      getDistanceToSimilarSizeItems({
        array: [1, 5, 3, 2, 2, 1],
        startingPosition: 2,
      })
    ).toEqual({
      previousDistance: 1,
      nextDistance: 3,
    })

    expect(
      getDistanceToSimilarSizeItems({
        array: [1, 1, 1, 1, 1, 5, 4, 4, 4, 7, 1, 1],
        startingPosition: 5,
      })
    ).toEqual({
      previousDistance: 5,
      nextDistance: 4,
    })

    expect(
      getDistanceToSimilarSizeItems({
        array: parsed[1],
        startingPosition: 2,
      })
    ).toEqual({
      previousDistance: 1,
      nextDistance: 2,
    })
  })

  it('should solve part one return expected result', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))
    const result = solvePartOne(parsed)

    expect(result).toBe(21)
  })

  it.todo('should solve part two return expected result')
})
