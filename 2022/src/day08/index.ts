import run from "aocrunner"

const parseInput = (rawInput: string) => {
  return rawInput.split('\n\n')
                 .map(a=>a.split('\n')
                          .map(a=>(a.split('')).map(a=>Number(a))))[0]
}


const treeVisibleSide = (element:number, a:number[]) =>{
  let result = true
  
  let current = element
  for (let i = 0; i < a.length; i++) {
    const e = a[i];
    if (current<=e)
     result = false
  }
  return result
}

const treeVisibleCount = (element:number,a:number[] )  =>{
  let result =a.findIndex(a=>a>=element)  
  return result==-1? a.length : result+1
}

const treeVisible = (element: number, a:number[][]) =>{
  let result:boolean[] = []
  for (let i = 0; i < a.length; i++) {
    const e = a[i];
    result.push(treeVisibleSide(element,e))
  }

  return result.includes(true)
} 

const checkBorderingUnits = (a:number[][], part:number = 1) =>{
  let [height,length] = [a.length,a[0].length]  
  let result = part==1? height*length : 0
  
  for (let row = 1; row < a.length-1; row++) {  
    for (let col = 1; col < a[0].length-1; col++) {
    const element = a[row][col];  
    
    //N,E,S,W
    let distances:number[] = [row,a.length-col-1,a.length-row-1,col]
     
    let neighbors:number[][] = [[],[],[],[]]
    for (let n = 0; n < distances[0]; n++) {
        neighbors[0].push(a[row-(n+1)][col])   
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
    // console.log(element,neighbors,neighbors.map(a=>treeVisibleCount(element,a) ).reduce((a,b)=>a*b));
    
    if(part==1){
    let visibility = treeVisible(element,neighbors)
    visibility? result:result--
    }
    else{ 
    let view = neighbors.map(a=>treeVisibleCount(element,a) ).reduce((a,b)=>a*b);
    result = view>result? view:result  
    }
    }
  }
  return result
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  
  let result = checkBorderingUnits(input,1)
  
  return result
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  let result = checkBorderingUnits(input,2)

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
        input: `30373
25512
65332
33549
35390`,
        expected: 8,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  // onlyTests: true,
})
