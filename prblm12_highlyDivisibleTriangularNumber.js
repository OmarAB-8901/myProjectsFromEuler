
  let highlyDivisibleTriangularNumber = (until, untilDivisible) => {
    
    let previousNumber = 0;
    let divisiblesNumbers = 0
    
    for(let i=1; i<=until; i++){
    
      let resultSum = i + previousNumber;

      let totDivisibles = 0;
      let testNumbers = '';
      for(let j=1; j<=resultSum; j++){
        console.log(j, resultSum % j, resultSum % j == 0);
        totDivisibles += resultSum % j == 0 ? 1 : 0;
        testNumbers += resultSum % j == 0 ? `${j},` : '';
        // console.log(j, totDivisibles, totDivisibles);
      }
      console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');
      if(totDivisibles === untilDivisible)
        return resultSum;

      previousNumber += i;
    }
  }

  let result = highlyDivisibleTriangularNumber(7, 5);
  console.log(result);