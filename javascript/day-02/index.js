const fs = require('fs')
const path = require('path')

export function parseInput(input) {
  return input
    .trim()
    .split(/\n/)
    .map((round) => round.split(' '))
}

// Welcome to enumland

const SHAPES = {
  ROCK: 'ROCK',
  PAPER: 'PAPER',
  SCISSORS: 'SCISSORS',
}

const OUTPUTS = {
  DRAW: 'DRAW',
  LOSS: 'LOSS',
  WIN: 'WIN',
}

export function getRoundOutput(reference, comparision) {
  if (reference === comparision) return OUTPUTS.DRAW

  const WIN_CASES = [
    `${SHAPES.ROCK} vs ${SHAPES.SCISSORS}`,
    `${SHAPES.SCISSORS} vs ${SHAPES.PAPER}`,
    `${SHAPES.PAPER} vs ${SHAPES.ROCK}`,
  ]
  const currentCase = `${reference} vs ${comparision}`

  return WIN_CASES.includes(currentCase) ? OUTPUTS.WIN : OUTPUTS.LOSS
}

const SHAPE_VALUES = {
  [SHAPES.ROCK]: 1,
  [SHAPES.PAPER]: 2,
  [SHAPES.SCISSORS]: 3,
}

const ROUND_OUTPUT_VALUES = {
  [OUTPUTS.DRAW]: 3,
  [OUTPUTS.LOSS]: 0,
  [OUTPUTS.WIN]: 6,
}

const OPPONENT_SHAPES = {
  A: SHAPES.ROCK,
  B: SHAPES.PAPER,
  C: SHAPES.SCISSORS,
}

export function solve1(rounds) {
  const INPUT_TO_SHAPE = {
    ...OPPONENT_SHAPES,
    X: SHAPES.ROCK,
    Y: SHAPES.PAPER,
    Z: SHAPES.SCISSORS,
  }

  return rounds.reduce((total, [opponent, strategic]) => {
    const opponentShape = INPUT_TO_SHAPE[opponent]
    const strategicShape = INPUT_TO_SHAPE[strategic]

    const roundOutput = getRoundOutput(strategicShape, opponentShape)

    return (total += ROUND_OUTPUT_VALUES[roundOutput] + SHAPE_VALUES[strategicShape])
  }, 0)
}

export function solve2(rounds) {
  const STRATEGIC_OUTPUT = {
    X: OUTPUTS.LOSS,
    Y: OUTPUTS.DRAW,
    Z: OUTPUTS.WIN,
  }

  const SHAPE_OPPOSITE_IF_WIN = {
    [SHAPES.ROCK]: SHAPES.PAPER,
    [SHAPES.PAPER]: SHAPES.SCISSORS,
    [SHAPES.SCISSORS]: SHAPES.ROCK,
  }

  const SHAPE_OPPOSITE_IF_LOSS = {
    [SHAPES.ROCK]: SHAPES.SCISSORS,
    [SHAPES.PAPER]: SHAPES.ROCK,
    [SHAPES.SCISSORS]: SHAPES.PAPER,
  }

  return rounds.reduce((total, [opponent, output]) => {
    const roundOutput = STRATEGIC_OUTPUT[output]
    const roundValue = ROUND_OUTPUT_VALUES[roundOutput]
    const opponentShape = OPPONENT_SHAPES[opponent]
    let strategicShape

    if (roundOutput === OUTPUTS.DRAW) strategicShape = opponentShape
    if (roundOutput === OUTPUTS.LOSS) strategicShape = SHAPE_OPPOSITE_IF_LOSS[opponentShape]
    if (roundOutput === OUTPUTS.WIN) strategicShape = SHAPE_OPPOSITE_IF_WIN[opponentShape]

    const strategicShapeValue = SHAPE_VALUES[strategicShape]

    return (total += roundValue + strategicShapeValue)
  }, 0)
}

const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf-8')

console.log('First case result:', solve1(parseInput(input))) // 14375
console.log('Second case result:', solve2(parseInput(input))) // 14375
