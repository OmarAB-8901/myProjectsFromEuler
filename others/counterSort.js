let sortedArray = [];
  let maxValueSort = arr.toSorted().at(-1);
  let arrCounter = [];
  
  for(let i=0; i<=maxValueSort; i++)
    arrCounter[i] = 0;
  
  arr.forEach( function(elem){
   arrCounter[elem] += 1; 
  });
  
  arrCounter.forEach(function(elem, i){
    
    if(elem != 0){
      
      for(let j=0; j<elem; j++){
        sortedArray.push(i);
      }
    }
  });
  
  return sortedArray;