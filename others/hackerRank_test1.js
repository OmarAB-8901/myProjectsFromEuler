
  let transactions = (logs, threshold) => {
    
    let resultLogs = {};
    logs.forEach( (elem, i, arrLogs) => {

      let valuesAccum = elem.split(' ');
      let valuesElem = i < arrLogs.length-1 ? arrLogs[i+1].split(' ') : [];
      
      for(let j=0; j<2; j++){
      
        if(resultLogs[valuesAccum[j]] == undefined)
          resultLogs[valuesAccum[j]] = 1;
        
        for(let k=0; k<2; k++){

          if(valuesAccum[j] === valuesElem[k])
            resultLogs[valuesAccum[j]] += 1;
        }
      }
    });

    return Object.keys(resultLogs).map( (id) => ({ 'ID': id, times:resultLogs[id] }) ).sort( (a,b) => b.times-a.times ).slice(0, threshold).map((id) => Number(id.ID))
  }

  let result = transactions(['88 99 200', '88 99 300', '99 32 100', '12 12 15'], 2);
  console.log(result);