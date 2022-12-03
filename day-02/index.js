import { readFile } from '../shared'
import { SHAPES, OUTPUTS, SHAPE_POINTS, ROUND_OUTPUT_POINTS, OPPONENT_SHAPES } from './shared-enums'

export function parseInput(input) {
  return input
    .trim()
    .split(/\n/)
    .map((round) => round.split(' '))
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

export function solvePartOne(rounds) {
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

    return (total += ROUND_OUTPUT_POINTS[roundOutput] + SHAPE_POINTS[strategicShape])
  }, 0)
}

export function solvePartTwo(rounds) {
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
    const roundValue = ROUND_OUTPUT_POINTS[roundOutput]
    const opponentShape = OPPONENT_SHAPES[opponent]
    let strategicShape

    if (roundOutput === OUTPUTS.DRAW) strategicShape = opponentShape
    if (roundOutput === OUTPUTS.LOSS) strategicShape = SHAPE_OPPOSITE_IF_LOSS[opponentShape]
    if (roundOutput === OUTPUTS.WIN) strategicShape = SHAPE_OPPOSITE_IF_WIN[opponentShape]

    const strategicShapeValue = SHAPE_POINTS[strategicShape]

    return (total += roundValue + strategicShapeValue)
  }, 0)
}

export function main() {
  const input = readFile(__dirname, './input.txt')
  const parsed = parseInput(input)
  console.log('🎄 Part one result:', solvePartOne(parsed))
  console.log('🎄 Part two result:', solvePartTwo(parsed))
}
