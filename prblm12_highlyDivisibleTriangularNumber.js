
  let highlyDivisibleTriangularNumber = (until, untilDivisible) => {
    
    let previousNumber = 0;
    let maxDivisiblesNumbers = 0
    
    for(let i=1; i<=until; i++){
    
      let resultSum = i + previousNumber;
// maxDivisiblesNumbers = Math.max(maxDivisiblesNumbers, resultSum);
      let totDivisibles = 0;
      for(let j=1; j<=resultSum; j++){
        
        if(resultSum % j === 0){
          totDivisibles ++;
        } else {
          continue;
        }

        if(totDivisibles > untilDivisible){
          maxDivisiblesNumbers = Math.max(maxDivisiblesNumbers, totDivisibles);
          return [ resultSum, maxDivisiblesNumbers ];
        }
      }

      maxDivisiblesNumbers = Math.max(maxDivisiblesNumbers, totDivisibles);
      previousNumber += i;
    }
  }

  let result = highlyDivisibleTriangularNumber(45000, 500);
  console.log(result);