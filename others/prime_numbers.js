
let isPrimeNumber = number => {

  if(number <= 1)
    return false;

  for(let x=2; x <= (number / 2); x++){
    console.log( x, number / 2, number % x,  number / x );
    if(number % x == 0)
      return false;
  }

  return true;
};

let result = isPrimeNumber(600851475143);
console.log(result);