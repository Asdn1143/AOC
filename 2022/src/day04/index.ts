import run from "aocrunner"
import { constants } from "crypto"

const parseInput = (rawInput: string) => rawInput.split("\n").map(a=>a.split(',').map(a=>a.split('-').map(a=>Number(a)) ))

const pairMutContainment = (a:number[][]) => {
  let [pairL, pairR] = a
  let result = ((pairL[0]<=pairR[0]&&pairL[1]>=pairR[1])
              ||(pairL[0]>=pairR[0]&&pairL[1]<=pairR[1]))? 1:0
  return result
}

const pairMutOverlap = (a:number[][]) => {
  let [pairL, pairR] = a
  let result = ((pairL[0]<=pairR[0]&&pairL[1]>=pairR[1])
              ||(pairL[0]>=pairR[0]&&pairL[0]<=pairR[1])
              ||(pairL[1]>=pairR[0]&&pairL[1]<=pairR[1]))? 1:0
  return result
}


const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  
  let result:number = 0 

  input.forEach(a => result+=pairMutContainment(a))
  
  return result
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  let result:number = 0

  input.forEach(a=> result+=pairMutOverlap(a))

  return result
}

run({
  part1: {
    tests: [
      {
        input: `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`,
        expected: 2,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`,
        expected: 4,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  // onlyTests: true,
})
