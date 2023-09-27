let multiplyOf = (until, ...numbers) => {

  let sumMultiplies = 0;
  
  numbers.forEach( function(num){
    
    for(let i=1; i<until; i++){
      let result = i % num;
      
      sumMultiplies += result == 0 ? i : 0;
    }
    console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-");
  });
  
  return sumMultiplies;
}

console.time();
console.log(multiplyOf(1000, 3, 5));
console.timeEnd();


console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-");

let multiplyOfSolved2 = (until, ...numbers) => {

  let sumMultiplies = 0;
  
  for(let i=1; i<until; i++){
    
    let result_3 = i % numbers[0];
    let result_5 = i % numbers[1];

    if( i % numbers[0] == 0 || i % numbers[1] == 0 )
      sumMultiplies += i;
  }
  
  return sumMultiplies;
}

console.time();
console.log(multiplyOfSolved2(1000, 3, 5));
console.timeEnd();