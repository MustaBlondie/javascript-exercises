const reverseString = function(greeting) {
    let core = greeting.split('');
    core.reverse();
    let coreString = "";
  
    for(let i = 0; i < core.length; i++){
      coreString += core[i];
    }
    
    return coreString;
  };
  
reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
