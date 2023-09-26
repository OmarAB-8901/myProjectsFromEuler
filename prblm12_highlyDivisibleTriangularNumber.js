
  let highlyDivisibleTriangularNumber = (until, untilDivisible) => {
    
    let previousNumber = 0;
    let divisiblesNumbers = 0
    
    for(let i=1; i<=until; i++){
    
      let resultSum = i + previousNumber;

      let totDivisibles = 0;
      for(let j=1; j<=resultSum; j++){
        
        if(resultSum % j === 0)
          totDivisibles ++;

          console.log('j',j, 'R-S:',resultSum, 'R-S%:',resultSum % j, 'R-S%==0:',resultSum % j == 0, 'TOT_DIV:',totDivisibles);
        // console.log(totDivisibles);
      }
console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');
      if(totDivisibles > untilDivisible){
        return resultSum;
      } 

      previousNumber += i;
    }
  }

  let result = highlyDivisibleTriangularNumber(10, 6);
  console.log(result);