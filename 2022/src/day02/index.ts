import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split('\n')

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  c=b.map(rockPaperScissor).reduce((a,b)=> a+b)

function rockPaperScissor(a) {
  let b = 0
    if (a[2]=='X') {
      b+=1
      if(a[0]=='A') b+=3
      if(a[0]=='B') b+=0
      if(a[0]=='C') b+=6
    }
    if(a[2]=='Y'){
      b+=2     
      if(a[0]=='A') b+=6
      if(a[0]=='B') b+=3
      if(a[0]=='C') b+=0
    }
    if(a[2]=='Z'){
      b+=3
      if(a[0]=='A') b+=0
      if(a[0]=='B') b+=6
      if(a[0]=='C') b+=3
    }
    return b
}
  
  
  return
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  b=a.map(rockPaperScissor).reduce((x,y)=>x+y)
  function rockPaperScissor(a) {
    let b = 0
      if (a[2]=='X') {
        b+=0
        if(a[0]=='A') b+=3
        if(a[0]=='B') b+=1
        if(a[0]=='C') b+=2
      }
      if(a[2]=='Y'){
        b+=3     
        if(a[0]=='A') b+=1
        if(a[0]=='B') b+=2
        if(a[0]=='C') b+=3
      }
      if(a[2]=='Z'){
        b+=6
        if(a[0]=='A') b+=2
        if(a[0]=='B') b+=3
        if(a[0]=='C') b+=1
      }
      return b
  }
  return
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
