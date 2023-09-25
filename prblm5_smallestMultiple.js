
  let smalletMultipe = () => {
  
    let number = 999999999;
    let minus = Infinity;

    for(let i=number; i>=1; i--){
    
      let isAllZero = true;
      for(let j=20; j>=1; j--){
    
        let result = i % j;

        if(result !== 0)
          isAllZero = false;
      }

      if( isAllZero )
        minus = i < minus ? i : minus;
    }

    return minus;
  }

  let result = smalletMultipe();
  console.log(result);