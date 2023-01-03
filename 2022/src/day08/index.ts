import run from "aocrunner"

const parseInput = (rawInput: string) => {
  return rawInput.split('\n\n')
                 .map(a=>a.split('\n')
                          .map(a=>(a.split('')).map(a=>Number(a))))[0]
}

const checkBorderingUnits = (a:number[][]) =>{
  console.table(a);
  
  for (let row = 1; row < a.length-1; row++) {  
    for (let col = 1; col < a[0].length-1; col++) {
    const element = a[row][col];  
    let  covered = true
    let [height,length] = [a.length,a[0].length]  
    //N,E,S,W
    let distances:number[] = [row,a.length-col-1,a.length-row-1,col]
     

    let neighbors:number[][] = [[],[],[],[]]
    for (let n = 0; n < distances[0]; n++) {
        neighbors[0].push(a[row-(n+1)][col])
        
    }
    if([...neighbors[0]].){
      covered = false
    }
    
    for (let e = 0; e < distances[1]; e++) {
      neighbors[1].push(a[row][col+(e+1)])
    }
    for (let s = 0; s < distances[2]; s++) {
      neighbors[2].push(a[row+(s+1)][col])
    }
    for (let w = 0; w < distances[3]; w++) {
      neighbors[3].push(a[row][col-(w+1)])
    }

    console.log(element,neighbors,covered);
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
