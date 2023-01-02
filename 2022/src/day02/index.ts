import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split('\n')

//notes
//A - X = Rock 
//B - Y = Paper
//C - Z = Scissors

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const result = input.map((a)=>{   
    let [left,right] = [a[0],a[2]]
    let final = 0
    switch (right) {
      case "X":
        final+=1
        switch (left) {
          case 'A':
            final+=3;
            break;
            case 'B':
            final+=0;
            break;
            case 'C':
            final+=6;
            break;
        }
        
      break;
      case "Y":
        final+=2
        switch (left) {
          case 'A':
            final+=6;
            break;
            case 'B':
            final+=3;
            break;
            case 'C':
            final+=0;
            break;
        }  

      break;
      case "Z":
        final+=3
        switch (left) {
          case 'A':
            final+=0;
            break;
            case 'B':
            final+=6;
            break;
            case 'C':
            final+=3;
            break;
        } 
      
      default:
        final+=0
        break;
    }      
        
    return final 
  }) 


  return result.reduce((a,b)=>a+b)
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const result = input.map((a)=>{   
    let [left,right] = [a[0],a[2]]
    let final = 0
    switch (right) {
      case "X":
        final+=0
        switch (left) {
          case 'A':
            final+=1;
            break;
            case 'B':
            final+=0;
            break;
            case 'C':
            final+=2;
            break;
        }
        
      break;
      case "Y":
        final+=3
        switch (left) {
          case 'A':
            final+=2;
            break;
            case 'B':
            final+=1;
            break;
            case 'C':
            final+=0;
            break;
        }  
  
      break;
      case "Z":
        final+=6
        switch (left) {
          case 'A':
            final+=0;
            break;
            case 'B':
            final+=2;
            break;
            case 'C':
            final+=1;
            break;
        } 
      
      default:
        final+=0
        break;
    }      
        
    return final 
  }) 
  return result.reduce((a,b)=>a+b)
}

run({
  part1: {
    tests: [
      {
        input: `A X
B Y
C Z`,
        expected: 15,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `A Y
B X
C Z`,
        expected: 12,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: true,
})
