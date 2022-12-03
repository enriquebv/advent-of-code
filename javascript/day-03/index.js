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

export function getCharacterCoincidenceBetweenCollections(...collections) {
  const [reference, ...otherCollections] = collections

  return reference.find((character) => {
    return otherCollections.every((collection) => collection.includes(character))
  })
}

export function solvePartOne(rucksacks) {
  let totalPriorities = 0

  for (const rucksack of rucksacks) {
    const first = rucksack.slice(0, rucksack.length / 2)
    const second = rucksack.slice(rucksack.length / 2)

    const itemInBothCompartments = getCharacterCoincidenceBetweenCollections(first, second)
    const itemValue = itemInBothCompartments ? getItemValue(itemInBothCompartments) : 0

    totalPriorities += itemValue
  }

  return totalPriorities
}

export function solvePartTwo(rucksacks) {
  const groupsCount = Math.ceil(rucksacks.length / 3)
  let totalPriorities = 0

  for (let groupIndex = 0; groupIndex < groupsCount; groupIndex++) {
    const sliceStart = groupIndex * 3
    const sliceEnd = sliceStart + 3
    const group = rucksacks.slice(sliceStart, sliceEnd)
    const badge = getCharacterCoincidenceBetweenCollections(...group)

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
