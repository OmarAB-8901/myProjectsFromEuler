
let fibonacci = (until) => {

  let result = 0;
  let fibonacci = [0,1];

  for(let i=1; i<until; i++){
    
    fibonacci.push( fibonacci[i] + fibonacci[i-1]  );

    if( fibonacci[i+1] % 2 == 0 )
      result += fibonacci[i+1];
  }
console.log( fibonacci );
  return result;
}

console.time();
let result = fibonacci(33);
console.log( result );
console.timeEnd();