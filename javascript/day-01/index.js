import { readFile } from '../shared'

export function parseInput(input) {
  return input
    .trim()
    .split(/\n\n/)
    .map((line) => line.split('\n').map(Number))
}

export function sumNumbers(...numbers) {
  return numbers.reduce((acc, line) => (acc += line), 0)
}

export function solve(caloriesMatrix) {
  const totalCaloriesPerElf = caloriesMatrix.map((calories) => sumNumbers(...calories))

  const totalCaloriesSortedDescendent = [...totalCaloriesPerElf].sort((a, b) => b - a)

  const biggestCalories = totalCaloriesSortedDescendent[0]
  const firstThreeBiggestCalories = sumNumbers(...totalCaloriesSortedDescendent.slice(0, 2))

  return { biggestCalories, firstThreeBiggestCalories }
}

const input = readFile(__dirname, './input.txt')

const result = solve(parseInput(input))

console.log('Biggest calories =>', result.biggestCalories)
console.log('Total of the biggest three elfs =>', result.firstThreeBiggestCalories)
