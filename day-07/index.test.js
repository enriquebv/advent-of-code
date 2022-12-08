import { readFile } from '../shared'
import { solvePartOne, solvePartTwo, parseInput } from './'

describe('Day 07', () => {
  it('should "parseInput" parse input into valid data structure', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))

    expect(parsed).toEqual({
      a: {
        '..': expect.any(Object),
        e: {
          '..': expect.any(Object),
          i: 584,
        },
        f: 29116,
        g: 2557,
        'h.lst': 62596,
      },
      'b.txt': 14848514,
      'c.dat': 8504156,
      d: {
        '..': expect.any(Object),
        j: 4060174,
        'd.log': 8033020,
        'd.ext': 5626152,
        k: 7214296,
      },
    })
  })

  it('should solve part one return expected result', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))
    const result = solvePartOne(parsed)

    expect(result).toBe(95437)
  })

  it('should solve part two return expected result', () => {
    const parsed = parseInput(readFile(__dirname, 'example.txt'))
    const result = solvePartTwo(parsed)

    expect(result).toBe(24933642)
  })
})
