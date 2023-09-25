
  let sumSquareDifference = number => {
    
    let firstSum = 0;
    let secondSume = 0;

    for(let i=1; i<=number; i++){
    
      firstSum += i**2;
      secondSume += i;
    }

    return (secondSume**2) - firstSum;
  }

  let result = sumSquareDifference(100);
  console.log(result);