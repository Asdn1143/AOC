import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split('\n\n')

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  
  const result = input.map((a)=>{    
    const final = a.split("\n").map(Number)
    return final.reduce((a,b)=>a+b,0)
  }) 
  
  return Math.max(...result)
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  const result = input.map((a)=>{    
    const final = a.split("\n").map(Number)
    return final.reduce((a,b)=>a+b,0)
  }) 
  result.sort()

  return result.slice(-3).reduce((a,b)=>a+b)
}

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
