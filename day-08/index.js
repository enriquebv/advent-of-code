import { readFile } from '../shared'

export function parseInput(input) {
  return input.split('\n').map((line) => line.split('').map(Number))
}

export function solvePartOne(grid) {
  const edgesCount = grid.length * 2 + (grid[0].length - 2) * 2
  let visibles = 0

  const getRow = (x) =>
    Array(grid.length)
      .fill()
      .map((_, i) => grid[i][x])

  for (const [y, column] of grid.entries()) {
    for (const [x, tree] of column.entries()) {
      const isEdge = x === 0 || x === grid.length - 1 || y === 0 || y === column.length - 1

      if (isEdge) continue

      const maxAtTop = Math.max(...getRow(x).slice(0, y))
      const maxAtBottom = Math.max(...getRow(x).slice(y + 1))
      const maxAtLeft = Math.max(...column.slice(0, x))
      const maxAtRight = Math.max(...column.slice(x + 1))

      const visible = maxAtTop < tree || maxAtBottom < tree || maxAtRight < tree || maxAtLeft < tree

      if (visible) visibles++
    }
  }

  return edgesCount + visibles
}

export function getDistanceToSimilarSizeItems({ array, startingPosition }) {
  const reference = array[startingPosition]
  const previous = array.slice(0, startingPosition).reverse()
  const next = array.slice(startingPosition + 1)
  let previousDistance = 0
  let nextDistance = 0

  for (const item of previous) {
    previousDistance++

    if (item >= reference) break
  }

  for (const item of next) {
    nextDistance++

    if (item >= reference) break
  }

  return {
    previousDistance,
    nextDistance,
  }
}

export function solvePartTwo(grid) {
  const scenicScores = []

  const getRow = (x) =>
    Array(grid.length)
      .fill()
      .map((_, i) => grid[i][x])

  for (const [y, column] of grid.entries()) {
    for (const [x] of column.entries()) {
      const isEdge = x === 0 || x === grid.length - 1 || y === 0 || y === column.length - 1

      if (isEdge) continue

      const { previousDistance: left, nextDistance: right } = getDistanceToSimilarSizeItems({
        array: column,
        startingPosition: x,
      })
      const { previousDistance: top, nextDistance: bottom } = getDistanceToSimilarSizeItems({
        array: getRow(x),
        startingPosition: y,
      })

      scenicScores.push(left * right * top * bottom)
    }
  }

  return Math.max(...scenicScores)
}

export function main() {
  const input = readFile(__dirname, 'input.txt')
  const parsed = parseInput(input)
  console.log('🎄 Part one result:', solvePartOne(parsed))
  console.log('🎄 Part two result:', solvePartTwo(parsed))
}
