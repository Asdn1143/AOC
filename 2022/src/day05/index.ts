import run from "aocrunner"

const parseInput = (rawInput: string) => {
  
// let inputWidth = rawInput[0][0].split('').length
// console.log(rawInput);

let input:string[][] =  rawInput.split('\n\n').map(a=>a.split('\n'))
// console.log(input);

// console.log(rawInput.split('\n\n')[0][0].length);

input[0] = input[0].slice(0,-1)

let column:any[] = []
let temp:any[][] = [] 
// console.log(typeof input[0][0].length);

// let inputWidth:number = input[0][0].replaceAll(undefined,"a")
// console.log(inputWidth);

// console.log(input[0][0].length);

for (let j = 1; j < input[0][0].length; j+=4){
for (let i = 0; i < input[0].length; i++) {
let element:any = input[0][i][j]
// console.log(i,j,((j-1)/4),element);
column.push(element)
}
temp.push(column.reverse())
column = []
}
// console.log(typeof input[0][0]);

input[0] = temp.map(a=>a.filter(a=>a!=" "))
input[1] = input[1].map(a=>a.replace(/[a-z]| /gm,""));

return input
}

const moveAndShowTops = (a:any) =>{ 
  // console.log(a);
  
  let [stack,moves] = a
  
  moves.forEach((move:any) => {
  let[count,from,to] = move
  from--
  to--
  // console.log(stack);
  
  let temp = stack[from].splice(-count)
  temp.reverse().forEach((a:any) => {
    stack[to].push(a)
  }); 

  });
  
  let result = stack.map((a:string[])=>a.pop()).join('')
  return result
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  
  
  
  let result = moveAndShowTops(input)


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
        input: `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`,
        expected: "CMZ",
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
  trimTestInputs: false,
  onlyTests:false,
})
