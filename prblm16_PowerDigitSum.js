
  let result = 2**1000;
  console.log(result, result.toString());

  let resultToArray = result.toString().split('');

  let sumEachNumer = 0;
  for (let i = 0; i < resultToArray.length; i++) {
    sumEachNumer += Number(resultToArray[i]);
  }

  console.log(sumEachNumer);