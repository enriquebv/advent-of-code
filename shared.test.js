import { sumNumbers } from './shared'

it('should "sumNumbers" correctly compute all number passed as arguments', () => {
  expect(sumNumbers(1)).toEqual(1)
  expect(sumNumbers(1, 2)).toEqual(3)
  expect(sumNumbers(1000, 2000, 3000)).toEqual(6000)
})
