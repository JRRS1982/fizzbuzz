describe('FizzBuzz', function() {
  var fizzBuzz;

  describe('knowns when a number is', function() {
    it('is divisible by three', function() {
      fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });
  });
});