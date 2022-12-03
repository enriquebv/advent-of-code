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

export function main() {
  const input = readFile(__dirname, './input.txt')
  const parsed = parseInput(input)
  console.log('🎄 Part one result:', solve(parsed).biggestCalories)
  console.log('🎄 Part one result:', solve(parsed).firstThreeBiggestCalories)
}
