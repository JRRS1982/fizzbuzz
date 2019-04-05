describe('FizzBuzz', function() {
  var fizzBuzz;

  describe('knowns when a number is', function() {
    it('is divisible by three', function() {
      fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });
  });

  describe('knowns when a number is not', function () {
    it('is not divisible by three', function () {
      fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByThree(2)).toBe(false);
    });
  });
});