import { readFile } from '../shared'

export function parseInput(input) {
  const [cratesInput, movementsInput] = input.split('\n\n')
  const cratesLines = cratesInput.split('\n')
  const stackLines = cratesLines.slice(0, cratesLines.length - 1)
  const stackLinesCount = Math.max(
    ...cratesLines
      .slice(cratesLines.length - 1)[0]
      .trim()
      .split(/\s{1,}/g)
      .map(Number)
  )

  const stacks = []

  stackLines.forEach((stackLine) => {
    for (let index = 0; index < stackLinesCount; index++) {
      const start = index * 3 + index
      const end = start + 3

      if (!stacks[index]) stacks.push([])

      const crate = stackLine.slice(start, end).charAt(1).replace(' ', '')

      if (crate) stacks[index].push(crate)
    }
  })

  const movementsLines = movementsInput.split('\n')
  const movements = movementsLines.map((line) => {
    const movementInformation = line.split(' ')
    const quantity = Number(movementInformation[1])
    const fromStack = Number(movementInformation[3]) - 1
    const toStack = Number(movementInformation[5]) - 1

    return { quantity, fromStack, toStack }
  })

  return { stacks, movements }
}

export function solve({ stacks, movements, crane }) {
  let mutatedStacks = JSON.parse(JSON.stringify(stacks))

  movements.forEach(({ quantity, fromStack, toStack }) => {
    let cratesToMove = mutatedStacks[fromStack].splice(0, quantity)

    if (crane === 'CrateMover 9001') {
      cratesToMove = cratesToMove.reverse()
    }

    cratesToMove.forEach((crate) => mutatedStacks[toStack].unshift(crate))
  })

  return mutatedStacks.map((stack) => stack[0]).join('')
}

export function main() {
  const input = readFile(__dirname, 'input.txt')
  const parsed = parseInput(input)
  console.log('🎄 Part one result:', solve({ ...parsed, crane: 'CrateMover 9000' }))
  console.log('🎄 Part two result:', solve({ ...parsed, crane: 'CrateMover 9001' }))
}
