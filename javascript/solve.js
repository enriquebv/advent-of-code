import { spawn } from 'child_process'
import path from 'path'
import { readFile } from './shared'

const day = Number(process.argv[2])

if (Number.isNaN(day)) {
  console.error('❌ You need to provide a number to run that day. Example: yarn solve 1')
  process.exit(1)
}

const dayPadded = String(day).padStart(2, '0')

const input = readFile(__dirname, `day-${dayPadded}/input.txt`)
const { main } = require(path.resolve(__dirname, `./day-${dayPadded}/index.js`))

main()
