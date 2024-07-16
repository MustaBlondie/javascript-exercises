const repeatString = function(greeting, num) {
    let cadena = '';
    for(let i = 0; i < num; i++){
        cadena += greeting;
    }
    return cadena;
};

repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
