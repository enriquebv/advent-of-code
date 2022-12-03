import { spawn } from 'child_process'
import path from 'path'

const day = Number(process.argv[2])

if (Number.isNaN(day)) {
  console.error('❌ You need to provide a number to run that day. Example: yarn solve 1')
  process.exit(1)
}

const dayPadded = String(day).padStart(2, '0')

const c = spawn(`node`, ['-r', 'esm', path.resolve(__dirname, `./day-${dayPadded}`)])

c.stdout.on('data', (data) => console.log(data.toString()))
c.stderr.on('data', (error) => console.error(error.toString()))
c.on('exit', (code) => process.exit(code))
