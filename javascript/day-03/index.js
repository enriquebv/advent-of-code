import { readFile } from '../shared'

export function parseInput(input) {
  return input.split('\n').map((line) => {
    const halfIndex = line.length / 2
    const firstHalf = line.slice(0, halfIndex)
    const secondHalf = line.slice(halfIndex)

    return [firstHalf.split(''), secondHalf.split('')]
  })
}

export function getItemValue(char) {
  const charCode = char.charCodeAt(0)
  const isLowerCase = charCode >= 97 && charCode <= 122

  if (isLowerCase) {
    return charCode - 96
  }

  return charCode - 38
}

export function solve1(rucksacks) {
  let i = 0

  for (const [first, second] of rucksacks) {
    const m = first.find((l) => second.includes(l))
    const v = m ? getItemValue(m) : 0

    i += v
  }

  return i
}

export function solve2(rucksacks) {
  const groupsCount = Math.ceil(rucksacks.length / 3)
  const p = []

  for (let i = 0; i <= groupsCount - 1; i++) {
    const s = i * 3
    const e = s + 3
    const g = rucksacks.slice(s, e)
    const groupRucksacks = g.map(([f, s]) => [...f, ...s])
    const m = groupRucksacks[0].find((l) => groupRucksacks[1].includes(l) && groupRucksacks[2].includes(l))

    p.push(getItemValue(m))
  }

  return p.reduce((acc, i) => i + acc, 0)
}

const input = readFile(__dirname, 'input.txt')

// console.log('🎄 Solution day 03, part 1:', solve1(parseInput(input))) // 7845
console.log('🎄 Solution day 03, part 2:', solve2(parseInput(input))) // 7845
