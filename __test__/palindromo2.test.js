
const palindromo = require('../utils/palindromo');

describe('palindromo', () => {
    test.each`
      firstValue | expectedResult    
      ${"AMOR"}  | ${"ROMA"}
      ${"ASTA"}      | ${"ATSA"}
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(palindromo(firstValue)).toBe(expectedResult);
    });
  });