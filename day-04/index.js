import { readFile } from '../shared'

export function parseInput(input) {
  return input.split('\n').map((line) =>
    line.split(',').map((group) => {
      const [start, end] = group.split('-').map(Number)

      return { start, end }
    })
  )
}

export function checkRangeOverlap(firstRange, secondRange) {
  // We will get the bigger range to check if small one fits inside.
  const rangesSortedBySize = [firstRange, secondRange].sort((a, b) => {
    const aSize = a.end - a.start
    const bSize = b.end - b.start

    return bSize - aSize
  })

  const [biggerRange, smallerRange] = rangesSortedBySize

  return smallerRange.start >= biggerRange.start && smallerRange.end <= biggerRange.end
}

export function checkRangeIntersection(firstRange, secondRange) {
  /**
   * To simplify checks, we order both ranges from left to right.
   * Then we only need to check if right one, start or ends inside left.
   * Direction sort was a suggestion of @jorgepexp, but his brain shutdown just he before say that
   * so I'm not sure if deserves credit. 🌚❤️
   */
  const rangesSortedBySize = [firstRange, secondRange].sort((a, b) => a.start - b.start)

  const [leftRange, rightRange] = rangesSortedBySize

  const rightStartsInLeftRange = rightRange.start >= leftRange.start && rightRange.start <= leftRange.end
  const rightEndsInLeftRange = rightRange.end >= leftRange.start && rightRange.end <= leftRange.end

  return rightStartsInLeftRange || rightEndsInLeftRange
}

export function solvePartOne(groups) {
  return groups.filter((ranges) => checkRangeOverlap(...ranges)).length
}

export function solvePartTwo(groups) {
  return groups.filter((ranges) => checkRangeIntersection(...ranges)).length
}

export function main() {
  const input = readFile(__dirname, 'input.txt')
  const parsed = parseInput(input)
  console.log('🎄 Part one result:', solvePartOne(parsed))
  console.log('🎄 Part two result:', solvePartTwo(parsed))
}
