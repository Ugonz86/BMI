var divide = function(weight, heightSqr) {
  return (weight / heightSqr) * 703;
};

var weight = parseInt(prompt("Enter your weight in pounds:"));
var heightSqr = parseInt(prompt("Enter  your height in inches squared:"));
var result = divide(weight, heightSqr);
alert(("Your BMI is: ") + result + " !");
