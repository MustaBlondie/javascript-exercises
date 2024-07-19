const sumAll = function(inicio, fin) {
    let suma = 0;
    if(!Number.isInteger(inicio) || !Number.isInteger(fin)){
        return Error;
    }
    else if( inicio < 0 || fin < 0){
        return Error;
    }
    else{
        for(let i = inicio; i <= fin; i++){
            suma += i;
        }
        return suma;
    }
  
  };
  sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
