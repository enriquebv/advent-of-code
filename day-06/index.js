import { readFile } from '../shared'

export function solvePartOne(datastream, packetSize) {
  for (const [index, character] of datastream.split('').entries()) {
    if (index < packetSize - 1) continue

    const previousChars = datastream.split('').slice(index - (packetSize - 1), index)
    const nextChars = datastream.split('').slice(index + 1, index + packetSize)
    const total = [...previousChars, character, ...nextChars]

    for (let checkIndex = 0; checkIndex < packetSize; checkIndex++) {
      const allDifferent = new Set([...total.slice(checkIndex, checkIndex + packetSize)]).size === packetSize

      if (allDifferent) {
        return index + checkIndex + 1
      }
    }
  }
}

export function solvePartTwo(input) {
  // Code to solve the exercise
}

export function main() {
  const input = readFile(__dirname, 'input.txt')
  console.log('🎄 Part one result:', solvePartOne(input, 4))
  console.log('🎄 Part two result:', solvePartOne(input, 14))
}
