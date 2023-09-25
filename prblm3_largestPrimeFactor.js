
  let isPrimeNumber = number => {
    
    if(number <= 1)
      return false;

    for(let i=2; i<=(number / 2); i++){
      
      if(number % i === 0 )
        return false;
    }

    return true;
  };

  let largePrimeFactor = number => {
  
    let d = 3;
    while (d*d <= number){

      if(!(number % 2 === 0)){
       
        if( number % d == 0 ){
          number /= d;
        }

        else
          d+=2;
      }
    }

    return number;
  };

  // let result = largePrimeFactor(13195);
  let result = largePrimeFactor(600851475143);
  console.log( result );

  // 600851475143
  // Posible response 6857