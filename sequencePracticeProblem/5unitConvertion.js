console.log('a.')
console.log('1 feet = 12 inches')
console.log('1 inche = 1/12 feet')
console.log('42 inches are: ' + 42/12)

console.log('b.')
let plotLengthINFeet = 60;
let plotWidthINFeet = 40;

let areaInSquareFeet = 60*40
let areaInFeet = Math.sqrt(areaInSquareFeet);

let areaInMeter = areaInFeet / 3.281

console.log('Rectangular Plot of 60 feet x 40 feet in meters is:', areaInMeter)

console.log('c.')
//divide are in square feet by 43560
let areaOF25Plot = areaInSquareFeet * 25
console.log('Area of 25 such plots in acres is:', areaOF25Plot/43560)