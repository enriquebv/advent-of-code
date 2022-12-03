# Advent Of Code 2022

![](https://img.shields.io/badge/stars%20⭐-04-yellow)
![](https://img.shields.io/badge/day%20📅-03-blue)
![](https://img.shields.io/badge/days%20completed-02-red)

- [JavaScript](#javascript)
- [Rust](#rust)

| 🎄                       | ☃️                       | 🎅🏻                       |
| ------------------------ | ------------------------ | ------------------------ |
| Day 01 `js ✅` `rust ⬜` | Day 11 `js ⬜` `rust ⬜` | Day 21 `js ⬜` `rust ⬜` |
| Day 02 `js ✅` `rust ⬜` | Day 12 `js ⬜` `rust ⬜` | Day 22 `js ⬜` `rust ⬜` |
| Day 03 `js ⬜` `rust ⬜` | Day 13 `js ⬜` `rust ⬜` | Day 23 `js ⬜` `rust ⬜` |
| Day 04 `js ⬜` `rust ⬜` | Day 14 `js ⬜` `rust ⬜` | Day 24 `js ⬜` `rust ⬜` |
| Day 05 `js ⬜` `rust ⬜` | Day 15 `js ⬜` `rust ⬜` | Day 25 `js ⬜` `rust ⬜` |
| Day 06 `js ⬜` `rust ⬜` | Day 16 `js ⬜` `rust ⬜` |
| Day 07 `js ⬜` `rust ⬜` | Day 17 `js ⬜` `rust ⬜` |
| Day 08 `js ⬜` `rust ⬜` | Day 18 `js ⬜` `rust ⬜` |
| Day 09 `js ⬜` `rust ⬜` | Day 19 `js ⬜` `rust ⬜` |
| Day 10 `js ⬜` `rust ⬜` | Day 20 `js ⬜` `rust ⬜` |

## JavaScript

- **Objective**: Enhance TDD kung fu.
- **Steps to solve days**:
  1. Create tests before code.
  2. Create ugly code to make tests green.
  3. Refactor to enhance code communication.

### Structure

```
javascript/
├─ day-01/
│  ├─ index.test.js
│  ├─ index.js
│  ├─ input.txt
├─ day-02/
```

- Each day has it's own dir (`day-01`, `day-02`).
- **index.js**: Should expose `solve` methods (can be `solve1`, `solve2` if exercise need it), and other exercise methods to be tested.
- **index.test.js**: Where tests reside. Must have an "DEMO_INPUT" variable with Advent of Code example input, and tests should use that input.
- **input.txt**: Advent of Code input to solve exercise.

## Rust

> This dir contains [a modified version of this template](https://github.com/fspoettel/advent-of-code-rust).

Optional, but desirable.

- **Objective**: Learn Rust.
