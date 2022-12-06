import { readFile } from '../shared'

export function parseInput(input) {
  const [crates, movements] = input.split('\n\n')
  const rs = crates.split('\n')
  const sd = rs.slice(0, rs.length - 1)
  const d = Math.max(
    ...rs
      .slice(rs.length - 1)[0]
      .trim()
      .split(/\s{1,}/g)
      .map(Number)
  )

  const sls = []

  sd.forEach((sl) => {
    for (let index = 0; index < d; index++) {
      const start = index * 3 + index
      const end = start + 3

      if (!sls[index]) sls.push([])

      const crate = sl.slice(start, end).charAt(1).replace(' ', '')

      if (crate) sls[index].push(crate)
    }
  })

  const ms = movements.split('\n').map((line) => {
    const movementI = line.split(' ')

    return {
      quantity: Number(movementI[1]),
      fromStack: Number(movementI[3] - 1),
      toStack: Number(movementI[5] - 1),
    }
  })

  return { stacks: sls, movements: ms }
}

export function solvePartOne({ stacks, movements }) {
  let result = JSON.parse(JSON.stringify(stacks))

  movements.forEach(({ quantity, fromStack, toStack }) => {
    const createsToMove = result[fromStack].splice(0, quantity)

    createsToMove.forEach((c) => result[toStack].unshift(c))
  })

  return result.map((s) => s[0] || ' ').join('')
}

export function solvePartTwo(input) {
  // Code to solve the exercise
}

export function main() {
  const input = readFile(__dirname, 'input.txt')
  const parsed = parseInput(input)
  console.log('🎄 Part one result:', solvePartOne(parsed))
  // console.log('🎄 Part two result:', solvePartTwo(parsed))
}
