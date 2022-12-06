import { readFile } from '../shared'

export const hasRepeats = (collection) => collection.some((item, i) => collection.lastIndexOf(item) !== i)

export function solve(datastream, packetSize) {
  const datastreamCharacters = datastream.split('')

  for (const [index, character] of datastreamCharacters.entries()) {
    if (index < packetSize - 1) continue

    // To detect start-of-packet marker, just generates an array with adjacent elements
    // to the current character.
    // By example, if packet size is 4:
    // - We have this input: mjqjpqmgbljsphdztnvjfqwrcgsmlb
    // - First element check is is 4th, j (we skip 3 first characters, line 9)
    // - Obtains [packetSize - 1] elements from left and right of the character:
    //   - Left: mjq
    //   - Right: pqm
    // - Builds "total" variable to create a single array.
    // - Checks slicing by packet size, keeping the check index:
    //   - mjqj => Not valid, repeated characters (check index: 0)
    //   - jqjp => Not valid (check index: 1)
    //   - qjpq => Not valid (check index: 2)
    //   - pqmg => Valid, without repeated characters (check index 3)
    // And to obtain marker, just add [check index] + [character index + 1]
    const previousChars = datastreamCharacters.slice(index - (packetSize - 1), index)
    const nextChars = datastreamCharacters.slice(index + 1, index + packetSize)
    const total = [...previousChars, character, ...nextChars]

    for (let checkIndex = 0; checkIndex < packetSize; checkIndex++) {
      const packet = total.slice(checkIndex, checkIndex + packetSize)

      if (!hasRepeats(packet)) {
        return index + checkIndex + 1
      }
    }
  }
}

export function main() {
  const input = readFile(__dirname, 'input.txt')
  console.log('🎄 Part one result:', solve(input, 4))
  console.log('🎄 Part two result:', solve(input, 14))
}
