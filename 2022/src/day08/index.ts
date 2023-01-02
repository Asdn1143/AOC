import run from "aocrunner"

const parseInput = (rawInput: string) => {
  return rawInput.split('\n\n')
                 .map(a=>a.split('\n')
                          .map(a=>(a.split('')).map(a=>Number(a))))[0]
}

const checkBorderingUnits = (a:number[][]) =>{
  console.log(a);
  
  for (let row = 1; row < a.length-1; row++) {  
    for (let col = 1; col < a[0].length-1; col++) {
    const element = a[row][col];  
      let distances = [[row],[a.length-col-1],[a.length-row-1],[col]]
      //N,E,S,W
      
    }
  }
  return
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  
  let result = checkBorderingUnits(input)
  
  return result
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  let result = 0

  return result 
}

run({
  part1: {
    tests: [
      {
        input: `30373
25512
65332
33549
35390`,
        expected: 21,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: ``,
        expected: 0,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: true,
})
