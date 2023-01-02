import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

const firstDisctinctSubstring = (input:string, length:number) =>{
  for (let i = 0; i < input.length-length; i++) {
    const element = input.substring(i,i+length);
    if (element == Array.from(new Set(element)).join(''))
    return i+length
  }
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
    
  let result = firstDisctinctSubstring(input,4)

  return result
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  let result = firstDisctinctSubstring(input,14)

  return result 
}

run({
  part1: {
    tests: [
      {
        input: `bvwbjplbgvbhsrlpgdmjqwftvncz`,
        expected: 5,
      },
      {
        input: `nppdvjthqldpwncqszvftbrmjlhg`,
        expected: 6,
      },
      {
        input: `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`,
        expected: 10,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `mjqjpqmgbljsphdztnvjfqwrcgsmlb`,
        expected: 19,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})




