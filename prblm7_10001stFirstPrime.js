
let isPrimeNumber = number => {
    
  if(number <= 1)
    return false;

  for(let i=2; i<=(number / 2); i++){
    
    if(number % i === 0 )
      return false;
  }

  return true;
};

// let is10001Prime = number => {

//   let totPrimeNumbers = 1;
//   for(let i=3; i<=999999; i++){
  
//     if(i % 2 !== 0){

//       totPrimeNumbers += isPrimeNumber(i) ? 1 : 0;
//       console.log(i, totPrimeNumbers);
//       if(totPrimeNumbers == number)
//         return i;
//     }
//   }
// };

let is10001Prime = number => {

  let totPrimeNumbers = 1;
  // let answerFinded = false;
  let i = 3;
  while( true ){
  
    if(i % 2 !== 0){

      totPrimeNumbers += isPrimeNumber(i) ? 1 : 0;
      console.log(i, totPrimeNumbers);
     
      if(totPrimeNumbers == number){
        return i;
      }
    }
    i++
  }
};

let result = is10001Prime(10001);
console.log(result);

// 2 - 104729