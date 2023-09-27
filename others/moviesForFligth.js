
let moviesRecomendation = (fligthDuration, movieDuration) => {

  let timeRecomendation = fligthDuration - 30;
  let moviesRecomendation = [0,0];

  // let moviesSorted = movieDuration.toSorted();

  movieDuration.reduce( (accum, elem, i, movies) => {

    for( let j=(i+1);  j<=movies.length; j++){
    
      if((elem + movies[j]) === timeRecomendation){
        
        if(moviesRecomendation[0] < elem && moviesRecomendation[1] < elem || moviesRecomendation[0] < movies[j] && moviesRecomendation[1] < movies[j]){
          moviesRecomendation = [i,j];
          continue;
        }
      }
    }
    console.log( moviesRecomendation );
    return elem;
  }, movieDuration[0]);
};

moviesRecomendation(90, [1, 10, 25, 35, 60, 59, 2]);

console.log("--------------------------------------------------------------------------------------------------------------");

let otherMoviesRecomendation = (fligthDuration, movieDuration) => {

  let timeRecomendation = fligthDuration - 30;
  let moviesRecomendation = [0,0];

  movieDuration.forEach( (movie, i, movies) => {

    for( let j=(i+1);  j<=movies.length; j++){
    
      if((movie + movies[j]) === timeRecomendation){

        if(moviesRecomendation[0] < movie && moviesRecomendation[1] < movie || moviesRecomendation[0] < movies[j] && moviesRecomendation[1] < movies[j]){
          moviesRecomendation = [i,j];
          continue;
        }
      }
    }
  });

  return moviesRecomendation;
};

let result = otherMoviesRecomendation(90, [1, 10, 25, 35, 60, 59, 1]);
console.log(result);