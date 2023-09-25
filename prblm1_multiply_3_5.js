
  let multiply = (until) => {
  
    let addition = 0;

    for(let i=1; i<until; i++){
      
      if( i % 3 == 0 || i % 5 == 0)
        addition += i;
    }

    return addition;
  }

  let result = multiply(1000);
  console.log(result);