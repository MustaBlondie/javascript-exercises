const leapYears = function(year) {
    if(year % 4 === 0 && year % 100 != 0){
      console.log("is a leap year");
      return true;
    }
    else if( year % 4 === 0 && year % 400 === 0){
        console.log("is a leap year");
        return true;
    }
    else if(year % 100 === 0 ){
        console.log("Is not leap year");
        return false;
    }
  };

  leapYears(1800);

// Do not edit below this line
module.exports = leapYears;
