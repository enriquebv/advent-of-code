import { hasRepeats, solve } from './'

describe('Day 06', () => {
  it('should "hasRepeats" return true if finds repeated elements', () => {
    expect(hasRepeats(['a', 'b', 'c'])).toBe(false)
    expect(hasRepeats(['a', 'b', 'a'])).toBe(true)
  })

  it('should "solve" return expected result', () => {
    const packetSize = 4

    expect(solve('mjqjpqmgbljsphdztnvjfqwrcgsmlb', packetSize)).toBe(7)
    expect(solve('bvwbjplbgvbhsrlpgdmjqwftvncz', packetSize)).toBe(5)
    expect(solve('nppdvjthqldpwncqszvftbrmjlhg', packetSize)).toBe(6)
    expect(solve('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', packetSize)).toBe(10)
    expect(solve('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', packetSize)).toBe(11)
  })

  it('should "solve" part two return expected result', () => {
    const packetSize = 14

    expect(solve('mjqjpqmgbljsphdztnvjfqwrcgsmlb', packetSize)).toBe(19)
    expect(solve('bvwbjplbgvbhsrlpgdmjqwftvncz', packetSize)).toBe(23)
    expect(solve('nppdvjthqldpwncqszvftbrmjlhg', packetSize)).toBe(23)
    expect(solve('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', packetSize)).toBe(29)
    expect(solve('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', packetSize)).toBe(26)
  })
})
