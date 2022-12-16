# Advent Of Code 2022

![](https://img.shields.io/badge/stars%20⭐-16-yellow)
![](https://img.shields.io/badge/day%20📅-16-blue)
![](https://img.shields.io/badge/days%20completed-8-red)

| 🎄        | ☃️        | 🎅🏻        |
| --------- | --------- | --------- |
| Day 01 ✅ | Day 11 ⬜ | Day 21 ⬜ |
| Day 02 ✅ | Day 12 ⬜ | Day 22 ⬜ |
| Day 03 ✅ | Day 13 ⬜ | Day 23 ⬜ |
| Day 04 ✅ | Day 14 ⬜ | Day 24 ⬜ |
| Day 05 ✅ | Day 15 ⬜ | Day 25 ⬜ |
| Day 06 ✅ | Day 16 ⬜ |
| Day 07 ✅ | Day 17 ⬜ |
| Day 08 ✅ | Day 18 ⬜ |
| Day 09 ⬜ | Day 19 ⬜ |
| Day 10 ⬜ | Day 20 ⬜ |

- **Objective**: Enhance TDD kung fu.
- **Steps to solve days**:
  1. Create tests before code.
  2. Create ugly code to make tests green.
  3. Refactor to enhance code communication.

## Structure

```
javascript/
├─ day-01/
│  ├─ index.test.js
│  ├─ index.js
│  ├─ input.txt
│  ├─ example.txt
├─ day-02/
```

- Each day has it's own dir (`day-01`, `day-02`).
- **index.js**: Should expose `main` method.
- **index.test.js**: Where tests reside. This tests should use only `example.txt` input file.
- **input.txt**: Advent of Code input to solve exercise.
- **example.txt**: Advent of Code example input to solve exercise.

## Commands

### yarn test

Run tests in `index.test.js` files.

### yarn scaffold [number]

Create a `day-[number]` dir with basic files to start coding.

### yarn solve [number]

Run `day-[number]/index.js:main` method.
