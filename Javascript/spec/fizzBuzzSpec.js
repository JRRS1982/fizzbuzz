describe('FizzBuzz', function() {
  var fizzBuzz;
  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('knowns when a number is', function() {
    it('is divisible by three', function() {
      expect(fizzBuzz._isDivisibleBy(3, 3)).toBe(true);
    });
    it('is divisible by five', function() {
      expect(fizzBuzz._isDivisibleBy(5, 5)).toBe(true);
    });
    it('is divisible by three and five', function() {
      expect(fizzBuzz._isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knowns when a number is not', function() {
    it('is not divisible by three', function() {
      expect(fizzBuzz._isDivisibleBy(2, 3)).toBe(false);
    });
    it('is not divisible by five', function() {
      expect(fizzBuzz._isDivisibleBy(2, 5)).toBe(false);
    });
    it('is not divisible by three and five', function() {
      expect(fizzBuzz._isDivisibleByFifteen(2)).toBe(false);
    });
  });

  describe('when playing says fizz buzz', function() {
    it('says fizz instead of 3', function() {
      expect(fizzBuzz.says(3)).toEqual('Fizz')
    });
  });
});