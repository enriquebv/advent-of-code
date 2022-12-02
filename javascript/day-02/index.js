const fs = require('fs')
const path = require('path')

function getRoundOutput(reference, comparision) {
  if (reference === comparision) return 'DRAW'

  const WIN_CASES = ['ROCK vs SCISSORS', 'SCISSORS vs PAPER', 'PAPER vs ROCK']
  const currentCase = `${reference} vs ${comparision}`

  return WIN_CASES.includes(currentCase) ? 'WIN' : 'LOSS'
}

function processMatch(input) {
  const roundMatrix = input
    .trim()
    .split(/\n/)
    .map((round) => round.split(' '))

  const INPUT_TO_SHAPE = {
    A: 'ROCK',
    B: 'PAPER',
    C: 'SCISSORS',
    X: 'ROCK',
    Y: 'PAPER',
    Z: 'SCISSORS',
  }

  const SHAPE_VALUES = {
    ROCK: 1,
    PAPER: 2,
    SCISSORS: 3,
  }

  const ROUND_OUTPUT_VALUES = {
    DRAW: 3,
    LOSS: 0,
    WIN: 6,
  }

  const STRATEGIC_OUTPUT = {
    X: 'LOSS',
    Y: 'DRAW',
    X: 'WIN',
  }

  const SHAPE_LOSS = {
    SCISSORS: 'ROCK',
    PAPER: 'SCISSORS',
    ROCK: 'PAPER',
  }

  return roundMatrix.reduce((total, [opponentInput, strategicInput]) => {
    const opponentShape = INPUT_TO_SHAPE[opponentInput]
    const strategicShape = INPUT_TO_SHAPE[strategicInput]

    const roundOutput = getRoundOutput(strategicShape, opponentShape)

    return (total += ROUND_OUTPUT_VALUES[roundOutput] + SHAPE_VALUES[strategicShape])
  }, 0)
}

const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf-8')

console.log('First case result:', processMatch(input)) // 14375
