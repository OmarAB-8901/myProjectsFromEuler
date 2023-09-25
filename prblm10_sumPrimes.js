

let isPrimeNumber = number => {

  if (number <= 1)
    return false;

  for (let i = 2; i <= (number / 2); i++) {

    if (number % i === 0)
      return false;
  }

  return true;
};

let summationPrimes = (until) => {

  let sumPrimes = 2;
  for (let i = 3; i < until; i++) {

    if( i % 2 !== 0 ){
      
      sumPrimes += isPrimeNumber(i) ? i : 0;
    }
  }

  return sumPrimes;
}

console.time();
let result = summationPrimes( 2000000 );
console.log(result);
console.timeEnd();