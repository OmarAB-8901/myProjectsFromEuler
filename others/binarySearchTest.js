
  let arrayTest = [];
  let maxVal = 9999999;

  for(let i=0; i< 9999999; i++){
  
    arrayTest.push( Math.floor( (Math.random() + maxVal) - i ) );
  }

  arrayTest = arrayTest.sort((a,b)=> a-b);

  let time = 0;
  let forWay = (array, searchableValue) => {
    
    for(let i=0; i<9999999; i++){
      time ++;
      
      if(array[i] === searchableValue){
        return time;
      }
    }
  }

  console.time('for Way');
  console.log( 'Times', forWay( arrayTest, arrayTest.at(-1) ) );
  console.timeEnd('for Way');

  console.log('\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-\n');

  time = 0;
  let binarySearchWay = (array, searchableValue) => {
    time ++;

    let middle = Math.floor( array.length / 2 );

    if(array[middle] === searchableValue){
      return time;
    } else if ( searchableValue < array[middle] ){
      return binarySearchWay( array.slice(0, middle), searchableValue );
    } else {
      return binarySearchWay( array.slice(middle), searchableValue );
    }
  }

  console.time('binary Search Way');
  console.log( 'Times', binarySearchWay( arrayTest, arrayTest.at(-1) ) );
  console.timeEnd('binary Search Way');