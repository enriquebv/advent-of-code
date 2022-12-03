import fs from 'fs'
import path from 'path'

const CODE_TEMPLATE = `
  import { readFile } from '../shared'

  export function parseInput(input) {
    // Code to parse txt input
  }

  export function solve(input) {
    // Code to solve the exercise  
  }

  const input = readFile(__dirname, 'input.txt')

  console.log('🎄 Solution:', solve(parseInput(input)))
`

const TESTS_TEMPLATE = `
  import { readFile } from '../shared'
  import { solve, parseInput } from './'

  describe('Day [[day]]', () => {
    it('should "parseInput" parse input into valid data structure', () => {
      const parsed = parseInput(readFile(__dirname, 'example.txt'))

      // Check data structure
    })

    it('should "solve" return expected result', () => {
      const parsed = parseInput(readFile(__dirname, 'example.txt'))
      const result = solve(parsed)

      // Check expected example result
    })
  })
`

function createFile(filePath, content = '') {
  fs.writeFileSync(filePath, content, 'utf-8')
}

function main(day) {
  if (!day || Number.isNaN(day)) {
    console.error('❌ Day argument is needed! Example: yarn scaffold 1')
    process.exit(1)
  }

  const dayPadded = String(day).padStart(2, 0)
  const dirName = `day-${dayPadded}`

  if (fs.existsSync(dirName)) {
    console.error('❌ Day already exists, scaffold files will be not generated.')
    process.exit(1)
  }

  const input = path.resolve(__dirname, dirName, 'input.txt')
  const example = path.resolve(__dirname, dirName, 'example.txt')
  const code = path.resolve(__dirname, dirName, 'index.js')
  const tests = path.resolve(__dirname, dirName, 'index.test.js')

  fs.mkdirSync(path.resolve(__dirname, dirName))

  createFile(input)
  console.log('✅ %s/input.txt file created.', dirName)
  createFile(example)
  console.log('✅ %s/example.txt file created.', dirName)
  createFile(code, CODE_TEMPLATE)
  console.log('✅ %s/index.js file created.', dirName)
  createFile(tests, TESTS_TEMPLATE.replace('[[day]]', dayPadded))
  console.log('✅ %s/index.test.js file created.', dirName)
}

main(Number(process.argv[2]))
