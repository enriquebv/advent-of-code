import path from 'path'

const day = Number(process.argv[2])

if (Number.isNaN(day)) {
  console.error('❌ You need to provide a number to run that day. Example: yarn solve 1')
  process.exit(1)
}

const dayPadded = String(day).padStart(2, '0')
const entrypoint = path.resolve(__dirname, `./day-${dayPadded}/index.js`)

try {
  require(entrypoint).main()
} catch (error) {
  const isMissingEntrypoint = error.code === 'ENOENT' && error.path === entrypoint

  if (isMissingEntrypoint) {
    console.error('❌ Day not exists.')
    process.exit(1)
  }

  throw error
}
