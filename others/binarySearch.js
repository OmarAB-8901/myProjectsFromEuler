
let max = 100000, min = 1;
const arrayTest = [];

for(let i=0; i<70000000; i++){

  arrayTest.push(Math.floor( Math.random() * (max - min) + i ));
}

// console.log(arrayTest.sort( (a,b) => a-b ).at(-1));

let time = 0;
let valueToSearch = arrayTest.at(-1);
let forWayToSearch = () => {

  for(let i=0; i<arrayTest.length; i++){
    time++;
    if( arrayTest[i] === valueToSearch)
      return time;
  }
} 

console.time('For Way');
let result = forWayToSearch();
console.log(result);
console.timeEnd('For Way');

console.log('\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-\n');

time = 0;
let binarySearchWay = (array, searchableValue) => {

  const middle = Math.floor( array.length / 2 );
  time++
  
  if(array[middle] === searchableValue || array.length == 1){
    return time;
  } else if(searchableValue < array[middle]){
    return binarySearchWay( array.slice(0, middle), searchableValue );
  } else {
    return binarySearchWay( array.slice(middle), searchableValue );
  }
}

console.time('Binary Search');
result = binarySearchWay(arrayTest, valueToSearch);
console.log(result);
console.timeEnd('Binary Search');