function flippingMatrix(matrix){
  
  console.log( matrix );
  
  for(let i=0; i<matrix.length; i++){
    
    for(let j=0; j<matrix[i].length; j++){
    

    } 
  }

  console.log( matrix );
   let suma = (matrix[0][0] + matrix[0][1]) + (matrix[1][0] + matrix[1][1])
   return suma;
}

let matrix = [];
matrix.push( [112,42,83,119] );
matrix.push( [56,125,56,49] );
matrix.push( [15,78,101,43] );
matrix.push( [62,98,114,108] );

let result = flippingMatrix(matrix); // 414
console.log( "\nResultado:", result, '\n------------------------------------------------------------------------\n' );

matrix = [];
matrix.push( [107,54,128,15] );
matrix.push( [12,75,110,138] );
matrix.push( [100,96,34,85] );
matrix.push( [75,15,28,112] );

result = flippingMatrix(matrix); // 488
console.log( "\nResultado:", result );