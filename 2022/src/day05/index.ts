import run from "aocrunner"

function rotateArr90(arr: string[]) {
  const rows = arr.length;

  let cols = 0;
  for (let i = 0; i < rows; i++) {
    cols = Math.max(cols, arr[i].length);
  }

  const result = Array.from({ length: cols }, () => Array(rows));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      result[col][rows - 1 - row] = arr[row][col];
    }
  }

  return result.map(a => a.join(""))
}

function extractNumbers(str: string) {
  let currentNumber = '';
  const numbers = [];
  for (const char of str) {
    if (isNaN(parseInt(char, 10))) {
      if (currentNumber) {
        numbers.push(parseInt(currentNumber, 10));
        currentNumber = '';
      }
    } else {
      currentNumber += char;
    }
  }
  if (currentNumber) {
    numbers.push(parseInt(currentNumber, 10));
  }
  return numbers;
}



const parseInput = (rawInput: string) => {

  let input: string[][] = rawInput.split('\n\n').map(a => a.split('\n'))
  let inputStack = input[0]
  let inputMoves = input[1]

  // console.log(inputStack);
  // console.log(inputMoves);



  inputStack = inputStack.slice(0, -1)

  inputStack = rotateArr90(inputStack)

  inputStack = inputStack.filter((_, i) => (i - 1) % 4 === 0).map(a => a.replace(/\s/gm, ""))

  inputMoves = inputMoves.map(a => extractNumbers(a))

  input = [inputStack, inputMoves]

  return input
}
const makeMovePt1 = (S: string[], M: number[]) => {
  let [count, from, to] = M

  from--
  to--

  for (let i = 0; i < count; i++) {
    let temp = S[from].slice(-1)

    S[from] = S[from].slice(0, -1)
    // console.log(temp);

    S[to] += temp

  }

  let result: string[] = S
  return result
}
const makeMovePt2 = (S: string[], M: number[]) => {
  let [count, from, to] = M
  from--
  to--


  let temp = S[from].slice(-count)

  S[from] = S[from].slice(0, -count)


  S[to] += temp
  // console.table(S);
  let result: string[] = S
  return result
}

const makeAllMovesPt1 = (a: any) => {
  let [stack, moves] = a

  moves.forEach((move: number[]) => {
    stack = makeMovePt1(stack, move)
  });

  let result = stack
  return result
}

const makeAllMovesPt2 = (a: any) => {
  let [stack, moves] = a

  moves.forEach((move: number[]) => {
    stack = makeMovePt2(stack, move)
  });

  let result = stack
  return result
}


const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  console.log(input);

  let result = makeAllMovesPt1(input)
  result = result.map(a => a.slice(-1)).join("")
  return result
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  let result = makeAllMovesPt2(input)
  result = result.map(a => a.slice(-1)).join("")
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
        input: `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`,
        expected: "MCD",
      },
    ],
    solution: part2,
  },
  trimTestInputs: false,
  // onlyTests: true,
})
