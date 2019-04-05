var FizzBuzz = function(){};

// FizzBuzz.prototype.isDivisibleByThree = function(arg) {
//   return (arg % 3 === 0);
// };

// FizzBuzz.prototype.isDivisibleByFive = function(arg) { 
//   return (arg % 5 === 0);
// };

// FizzBuzz.prototype.isDivisibleByThreeAndFive = function(arg) {
//   return (arg % 3 === 0 && arg % 5 === 0);
// };

FizzBuzz.prototype._isDivisibleBy = function(number, divider) {
  return (number % divider === 0)
};

FizzBuzz.prototype._isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

FizzBuzz.prototype.says = function (number) {
  if (this._isDivisibleBy(number, 3)) {
    return "Fizz";
  };
};