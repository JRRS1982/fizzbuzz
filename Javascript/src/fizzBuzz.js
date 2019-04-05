var FizzBuzz = function(){};

FizzBuzz.prototype.isDivisibleByThree = function(arg) {
  return (arg % 3 === 0);
};

FizzBuzz.prototype.isDivisibleByFive = function(arg) { 
  return (arg % 5 === 0);
};