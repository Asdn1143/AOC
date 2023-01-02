import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split('\n')

// My first working attempt at the problem.
// Saving it for the future for reflections on refactoring.

// const findSharedChar = (a:string[]) =>{
  // const sharedChars:any[] = []
  // a.forEach(e => {
    // sharedChars.push(new Set(e))
  // });
    //  
  // let final:string[] = []
  // const refLine = [...a[0]]
  // 
  // for (let i = 0; i < sharedChars.length; i++) {
    // let e = sharedChars[i]
    // final = refLine.filter(c => (e.has(c)))
  // }
// 
  // return final[0]
// }

const findSharedChar = (a:string[]) =>{
// Setting input to a reference line and the content to be filtered. 
  let ref = new Set(a[0])
  const rest = a.slice(1).map(a=>a.split(""))

// Recursively filtering by creating a set of a filtered line.
  rest.forEach((line) =>{
    ref = new Set(line.filter(c=>ref.has(c)))
  })

//Ref gets changed into an array and the result is the first (and only) entry
  const result:string = Array.from(ref)[0]
  return result
}
 
const charCode = (a:string) =>{
  const aToZ = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  return aToZ.findIndex(e => e===a) 
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  
  let result:number =  0
  
  input.forEach(e =>{
    let input:string[] = [e.slice(0,e.length/2),e.slice(e.length/2)]
    result+=charCode(findSharedChar(input))
  })
  
  return result
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  let result:number  = 0 
  for (let i = 0; i < input.length; i+=3) {
    let strings:string[] = [input[i],input[i+1],input[i+2]]
    result+=charCode(findSharedChar(strings))
  }
    
  
  return result
}

run({
  part1: {
    tests: [
      {
        input: `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`,
        
        
        
        
        
        expected: 157,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: 70,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  // onlyTests: true,
})
