import { readFile } from '../shared'

export function parseInput(input) {
  return input.split('\n').map((line) => {
    const halfIndex = line.length / 2
    const firstHalf = line.slice(0, halfIndex)
    const secondHalf = line.slice(halfIndex)

    return [firstHalf.split(''), secondHalf.split('')]
  })
  // Code to parse txt input
}

export function getItemValue(char) {
  const charCode = char.charCodeAt(0)
  const isLowerCase = charCode >= 97 && charCode <= 122

  if (isLowerCase) {
    return charCode - 96
  }

  return charCode - 38
}

export function solve(rucksacks) {
  let i = 0

  for (const [first, second] of rucksacks) {
    const m = first.find((l) => second.includes(l))
    const v = m ? getItemValue(m) : 0

    i += v
  }

  return i
}

const input = readFile(__dirname, 'input.txt')

console.log('🎄 Solution day 03:', solve(parseInput(input))) // 7845
getItemValue('a')
getItemValue('z')
getItemValue('A')
getItemValue('Z')
