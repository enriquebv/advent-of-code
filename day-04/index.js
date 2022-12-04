import { readFile } from '../shared'

export function parseInput(input) {
  // Code to parse txt input
  return input.split('\n').map((line) => line.split(',').map((group) => group.split('-').map(Number)))
}

export function checkRange(mode, ...ranges) {
  if (mode === 'inclusion') {
    const ro = ranges
      .map((range) => {
        const [min, max] = range
        return { range, size: max - min + 1 }
      })
      .sort((a, b) => b.size - a.size)
      .map((r) => r.range)

    const [b, s] = ro
    const minc = s.range[0] >= b.range[0]
    const maxc = s.range[1] <= b.range[1]
    return minc && maxc
  }

  if (mode === 'overlap') {
    // To simplify checks, we order by direction, and only checks if right, will intercesect with left in start or end.
    // Example:
    // Left: ..234...
    // Right: ..356..
    // Will be positive, because: rightStartsBetweenLeft
    // Direction sort idea by @jorgepexp, but his brain shutdown after the idea.
    const [left, right] = ranges.sort((a, b) => a[0] - b[0]).map(({ start, end }) => ({ start, end }))
    const rightStartsBetweenLeft = right.start >= left.start && right.end <= left.end
    const rightEndsBetweenLeft = right.end >= left.start && right.end <= left.end

    return rightStartsBetweenLeft || rightEndsBetweenLeft
  }

  throw new Error('Mode not supported')
}

export function solvePartOne(input) {
  const ol = input.filter((ranges) => checkRange('inclusion', ...ranges))

  return ol.length
}

export function solvePartTwo(input) {
  const ol = input.filter((ranges) => checkRange('overlap', ...ranges))

  return ol.length
}

export function main() {
  const input = readFile(__dirname, 'input.txt')
  const parsed = parseInput(input)
  console.log('🎄 Part one result:', solvePartOne(parsed))
  console.log('🎄 Part two result:', solvePartTwo(parsed))
}
