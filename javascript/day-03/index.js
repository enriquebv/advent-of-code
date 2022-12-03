import { readFile } from '../shared'

export function parseInput(input) {
  return input.split('\n').map((line) => line.split(''))
}

export function getItemValue(char) {
  const charCode = char.charCodeAt(0)
  const isLowerCase = charCode >= 97 && charCode <= 122

  if (isLowerCase) {
    return charCode - 96
  }

  return charCode - 38
}

export const getFirstCharacterCoincidenceInCollections = (...collections) =>
  collections[0].find((char) => collections.slice(1).every((collection) => collection.includes(char)))

export function solvePartOne(rucksacks) {
  let totalPriorities = 0

  for (const rucksack of rucksacks) {
    const first = rucksack.slice(0, rucksack.length / 2)
    const second = rucksack.slice(rucksack.length / 2)

    const itemInBothCompartments = getFirstCharacterCoincidenceInCollections(first, second)
    const itemValue = itemInBothCompartments ? getItemValue(itemInBothCompartments) : 0

    totalPriorities += itemValue
  }

  return totalPriorities
}

export function solvePartTwo(rucksacks) {
  const groupsCount = Math.ceil(rucksacks.length / 3)
  let totalPriorities = 0

  for (let groupIndex = 0; groupIndex <= groupsCount - 1; groupIndex++) {
    const sliceStart = groupIndex * 3
    const sliceEnd = sliceStart + 3
    const group = rucksacks.slice(sliceStart, sliceEnd)
    const badge = getFirstCharacterCoincidenceInCollections(...group)

    totalPriorities += getItemValue(badge)
  }

  return totalPriorities
}

export function main() {
  const input = readFile(__dirname, 'input.txt')
  const parsed = parseInput(input)
  console.log('🎄 Part one result:', solvePartOne(parsed))
  console.log('🎄 Part two result:', solvePartTwo(parsed))
}
