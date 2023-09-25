
  let isPalindrome = number => {

    number = number.toString();

    let reversed = number.split('').reverse();
    reversed = reversed.join('');

    return Number(number) === Number(reversed);
  };

  let largepalindrome = () => {
    
    let result = 0;
    let largest = 0;
    let threeDigitNum = 999;
    for(let i = threeDigitNum; i > 99; i--){
      
      for(let j = threeDigitNum; j > 99; j--){

        result = j * i;

        if(isPalindrome( result )){
          console.log(i, j, result);
          largest = Math.max( result, largest );
        }
      }
    }
    return largest;
  };

  let result = largepalindrome();
  console.log(result);