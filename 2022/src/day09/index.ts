import run from "aocrunner"
import { table } from "console"

const parseInput = (rawInput: string) => {
  return rawInput.split('\n')
}

let wait = (time:number) => {
  return new Promise(resolve => setTimeout(resolve, time));
}


const createMatrix = (dim:number, base:string = '.') =>{
  let matrix:string[][] =[] 
  let temp = []
  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      temp.push(base)
    }
    matrix.push(temp)
    temp = []
  }
  return matrix
}

const movesToMatrix =(moves:string[]) =>{
  let result = 13

  let matrixDim = 6
  let matrixEmptySpace =""
  let matrix = createMatrix(matrixDim,matrixEmptySpace)

  let passed = new Set()
  
  let posH:number[] = [matrixDim-1,0]
  let preH:number[] = [matrixDim-1,0]
  let posT:number[] = [matrixDim-1,0]

  moves.forEach((move:string)=>{
    let[direct,count] = [move[0],Number(move[2])]

    for (let i = 0; i < count; i++) {
      console.log(move,posH,preH,posT);

      preH = [...posH]
      switch (direct) {
        case "U": posH[0]-- 
        break;
        case "R": posH[1]++  
        break;
        case "D": posH[0]++
        break;
        case "L": posH[1]--
        break;
        
      }
      // if(Math.abs(posH[0]))
    }

    matrix[posT[0]][posT[1]] = "T"
    matrix[posH[0]][posH[1]] = "H"
    // console.table(matrix)
    
  })
  
  return result
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  
    
  let result = movesToMatrix(input)

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
        input: `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`,
        expected: 13,
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
