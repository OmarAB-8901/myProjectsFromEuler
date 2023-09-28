
function sockMerchant(n, ar) {

  let orderSocks = ar.sort((a,b) => a-b);

  let totalPair = 0;
  let i = 0;
  while( i < n ){
    
    if(orderSocks[i] == orderSocks[i+1]){
      totalPair ++;
      i += 2;
    } else {
      i ++;
    }
  }

  return totalPair;
}

let result = sockMerchant(9, [10,20,20,10,10,30,50,10,20]);
console.log(result);