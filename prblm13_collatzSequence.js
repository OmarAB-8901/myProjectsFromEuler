
let isEven = number => number % 2 === 0;

let longestChain = '';
let collatzSequense = number => {

  if(number === 1){
    let result = longestChain += 1;
    longestChain = '';
    return result;
  }

  if( isEven(number) ){
    longestChain += number;
    number /= 2;
  } else{
    longestChain += number;
    number = (number * 3) + 1;
  }

  return collatzSequense(number);
} 

let obtaintCollatzResult = () => {

  let longestChain = 0;
  for(let i=1000000; i>1; i--){
    let result = collatzSequense(i);
    longestChain = Math.max(longestChain, result.length)
  }
console.log(longestChain);
  return longestChain;
}

obtaintCollatzResult();