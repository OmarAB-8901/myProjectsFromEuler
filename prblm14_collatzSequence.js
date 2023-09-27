
let longestChain = 0;
let collatzSequense = number => {

  longestChain ++;

  if(number === 1){
    return number;
  }

  if( number % 2 !== 0 ){
    number = ( (number * 3) + 1 )
  } 

  return collatzSequense(number / 2);
}

// console.time;
// let result = collatzSequense( 5000000 );
// console.log(result);
// console.timeEnd;

let obtaintCollatzResult = () => {

  let longestChain = 0;
  for(let i=100000001; i>1; i--){
    let result = collatzSequense(i);
    longestChain = Math.max(longestChain, result)
  }

  return longestChain;
}

console.time();
let result = obtaintCollatzResult();
console.log(result);
console.timeEnd();