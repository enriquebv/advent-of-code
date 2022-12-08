import { readFile, sumNumbers } from '../shared'

export function parseInput(input) {
  const result = {}
  let lastDir = result

  const lines = input.split('\n').map((line) => line.trim())

  for (const line of lines) {
    const isCommand = line.startsWith('$ ')
    const lineChunks = line.split(' ')
    const isAccesingDir = isCommand && lineChunks.includes('cd')

    if (isAccesingDir) {
      const dirName = lineChunks[2]

      if (dirName === '/') continue

      lastDir = lastDir[dirName]

      continue
    }

    if (!isCommand) {
      const [info, name] = lineChunks

      lastDir[name] =
        info === 'dir'
          ? {
              '..': lastDir,
            }
          : Number(info)
    }
  }

  return result
}

export function getFlatDirSizes(dir) {
  const flatDirSizes = {}

  const readRecursiveFiles = (dir, name) => {
    const fileSizes = Object.values(dir).filter((item) => typeof item === 'number')
    const dirs = Object.keys(dir).filter((item) => typeof dir[item] !== 'number' && item !== '..')

    const fileSizesSum = sumNumbers(...fileSizes)
    const dirSizesSum = sumNumbers(
      ...dirs.map((subdirName) => readRecursiveFiles(dir[subdirName], `${name}.${subdirName}`))
    )

    const total = fileSizesSum + dirSizesSum

    flatDirSizes[name] = total

    return total
  }

  readRecursiveFiles(dir, '/')

  return flatDirSizes
}

export function solvePartOne(filesTree) {
  return Object.values(getFlatDirSizes(filesTree))
    .filter((size) => size <= 100_000)
    .reduce((total, size) => (total += size), 0)
}

export function solvePartTwo(filesTree) {
  const DISK_SIZE = 70_000_000
  const UPDATE_SIZE = 30_000_000
  const flatDirSizes = getFlatDirSizes(filesTree)
  const currentSpace = flatDirSizes['/']
  const sorted = Object.values(getFlatDirSizes(filesTree)).sort((a, b) => a - b)

  return sorted.find((dirSize) => UPDATE_SIZE + currentSpace - dirSize <= DISK_SIZE)
}

export function main() {
  const input = readFile(__dirname, 'input.txt')
  const parsed = parseInput(input)
  console.log('🎄 Part one result:', solvePartOne(parsed))
  console.log('🎄 Part two result:', solvePartTwo(parsed))
}
