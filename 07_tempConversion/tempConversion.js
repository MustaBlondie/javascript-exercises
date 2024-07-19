const convertToCelsius = function(f) {
  let accurateMeasure = (f - 32) * 5/9;
  let celsius = parseFloat(accurateMeasure.toFixed(1));
  return celsius;
};

const convertToFahrenheit = function(c) {
  let lessAcurateMeasure = (c * 9/5) + 32;
  let fahrenheit = parseFloat(lessAcurateMeasure.toFixed(1));
  return fahrenheit;
};

convertToCelsius(32);
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
