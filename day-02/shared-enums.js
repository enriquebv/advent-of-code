// We only store here enums shared between methods, or used in tests.
// Local method enums will be scoped in that methods.

export const SHAPES = {
  ROCK: 'ROCK',
  PAPER: 'PAPER',
  SCISSORS: 'SCISSORS',
}

export const OUTPUTS = {
  DRAW: 'DRAW',
  LOSS: 'LOSS',
  WIN: 'WIN',
}

export const SHAPE_POINTS = {
  [SHAPES.ROCK]: 1,
  [SHAPES.PAPER]: 2,
  [SHAPES.SCISSORS]: 3,
}

export const ROUND_OUTPUT_POINTS = {
  [OUTPUTS.DRAW]: 3,
  [OUTPUTS.LOSS]: 0,
  [OUTPUTS.WIN]: 6,
}

export const OPPONENT_SHAPES = {
  A: SHAPES.ROCK,
  B: SHAPES.PAPER,
  C: SHAPES.SCISSORS,
}
