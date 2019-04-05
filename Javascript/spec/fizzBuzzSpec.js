describe('FizzBuzz', function() {
  var fizzBuzz;
  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('knowns when a number is', function() {
    it('is divisible by three', function() {
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });
    it('is divisible by five', function() {
      expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
    });
    it('is divisible by three and five', function() {
      expect(fizzBuzz.isDivisibleByThreeAndFive(15)).toBe(true);
    });
  });

  describe('knowns when a number is not', function() {
    it('is not divisible by three', function() {
      expect(fizzBuzz.isDivisibleByThree(2)).toBe(false);
    });
    it('is not divisible by five', function() {
      expect(fizzBuzz.isDivisibleByFive(2)).toBe(false);
    });
    it('is not divisible by three and five', function() {
      expect(fizzBuzz.isDivisibleByThreeAndFive(2)).toBe(false);
    });
  });
});