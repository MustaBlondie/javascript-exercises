const removeFromArray = function(cadena) {
  let nuevoArray = [];
  for(let i = 0; i < cadena.length; i++){
      if(cadena[i] != 3){
        nuevoArray.push(cadena[i]);
      }
  }
  return nuevoArray;
  };

removeFromArray([1, 2, 3, 4], 3)
    

// Do not edit below this line
module.exports = removeFromArray;
