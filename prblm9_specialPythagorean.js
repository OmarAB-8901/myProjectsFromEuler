
  // let specialPythagorean = () => {
    
  //   let PythagoreanTipletValue = 1000;
  //   let a, b, c = 0
    
  //   for(a=1; a<20; a++){
      
  //     let sumAllSides = 0;
  //     for(b=(a+1); b<20; b++){
  //       console.log('a:', a, '=', a**2, 'b:', b, '=', b**2);
  //       c = a**2 + b**2;
  //       console.log('c', c);
  //       sumAllSides = a**2 + b**2 + c;
  //       console.log(sumAllSides, (PythagoreanTipletValue == sumAllSides));
  //     }
     
  //   }

  //   return null;
  // };

  // let result = specialPythagorean();
  // console.log(result);


  function solution(n) {
// console.log(Math.floor(n / 3 + 1));
    for (var c = Math.floor(n / 3 + 1); c < n / 2; c++) {
  
      var sqa_b = c * c - n * n + 2 * n * c;
      console.log(sqa_b);
      var a_b = Math.floor(Math.sqrt(sqa_b));
      console.log(a_b, '-', a_b * a_b);
      if (a_b * a_b == sqa_b) {
        var b = (n - c + a_b) / 2;
        var a = n - b - c;
        return a * b * c;
      }
    }
    return -1
  }
  let result = solution(1000);
  console.log(result);


  // https://www.xarg.org/puzzle/project-euler/problem-9/#:~:text=Project%20Euler%209%20Solution%3A%20Special%20Pythagorean%20triplet%20Problem,which%20a%20%2B%20b%20%2B%20c%20%3D%201000.