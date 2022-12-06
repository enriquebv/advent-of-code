import { readFile } from '../shared'
import { parseInput, solvePartOne, solvePartTwo } from './'

describe('Day 06', () => {
  it('should "solvePartOne" return expected result', () => {
    const packetSize = 4

    expect(solvePartOne('mjqjpqmgbljsphdztnvjfqwrcgsmlb', packetSize)).toBe(7)
    expect(solvePartOne('bvwbjplbgvbhsrlpgdmjqwftvncz', packetSize)).toBe(5)
    expect(solvePartOne('nppdvjthqldpwncqszvftbrmjlhg', packetSize)).toBe(6)
    expect(solvePartOne('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', packetSize)).toBe(10)
    expect(solvePartOne('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', packetSize)).toBe(11)
  })

  it('should "solvePartTwo" return expected result', () => {
    const packetSize = 14

    expect(solvePartOne('mjqjpqmgbljsphdztnvjfqwrcgsmlb', packetSize)).toBe(19)
    expect(solvePartOne('bvwbjplbgvbhsrlpgdmjqwftvncz', packetSize)).toBe(23)
    expect(solvePartOne('nppdvjthqldpwncqszvftbrmjlhg', packetSize)).toBe(23)
    expect(solvePartOne('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', packetSize)).toBe(29)
    expect(solvePartOne('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', packetSize)).toBe(26)
  })
})
