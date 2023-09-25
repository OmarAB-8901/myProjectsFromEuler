
  let fibonacci = (until) => {
  
    let resultAdditionEvens = 0;
    let fibonacci = [0, 1];

    for(let i=1; i<until; i++){
      
      let addition = fibonacci[i] + fibonacci[i-1];
      fibonacci.push(addition);

      if(addition % 2 === 0)
        resultAdditionEvens += addition;
    }

    return resultAdditionEvens;
  };

  let result = fibonacci(33);
  console.log(result);