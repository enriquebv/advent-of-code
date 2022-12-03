import fs from 'fs'
import path from 'path'

export function readFile(...filepaths) {
  return fs.readFileSync(path.resolve(...filepaths), 'utf-8')
}
