
let moviesRecomendation = (fligthDuration, movieDuration) => {

  let timeRecomendation = fligthDuration - 30;
  let moviesRecomendation = [0,0];

  // let moviesSorted = movieDuration.toSorted();

  movieDuration.reduce( (accum, elem, i, movies) => {

    for( let j=(i+1);  j<=movies.length; j++){
    
      if((elem + movies[j]) === timeRecomendation){
        
        if(movies[moviesRecomendation[0]] < elem && movies[moviesRecomendation[1]] < elem || movies[moviesRecomendation[0]] < movies[j] && movies[moviesRecomendation[1] < movies[j]]){
          moviesRecomendation = [i,j];
          continue;
        }
      }
    }
    // console.log( moviesRecomendation );
    return elem;
  }, movieDuration[0]);

  return moviesRecomendation;
};

let result = moviesRecomendation(90, [1, 10, 25, 35, 60, 59, 1]);
console.log(result);

console.log("--------------------------------------------------------------------------------------------------------------");

let otherMoviesRecomendation = (fligthDuration, movieDuration) => {

  let timeRecomendation = fligthDuration - 30;
  let moviesRecomendation = [0,0];

  movieDuration.forEach( (movie, i, movies) => {

    for( let j=(i+1);  j<=movies.length; j++){
    
      if((movie + movies[j]) === timeRecomendation){

        if(movies[moviesRecomendation[0]] < movie && movies[moviesRecomendation[1]] < movie || movies[moviesRecomendation[0]] < movies[j] && movies[moviesRecomendation[1] < movies[j]]){
          moviesRecomendation = [i,j];
          continue;
        }
      }
      // console.log( moviesRecomendation );
    }
  });

  return moviesRecomendation;
};

result = otherMoviesRecomendation(90, [1, 10, 25, 35, 60, 59, 1]);
console.log(result);