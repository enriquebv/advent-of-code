import fs from 'fs'
import path from 'path'

export function readFile(...filepaths) {
  return fs.readFileSync(path.resolve(...filepaths), 'utf-8')
}

export function sumNumbers(...numbers) {
  return numbers.reduce((acc, line) => (acc += line), 0)
}
