const esmayuscula = require('../utils/esmayusculas');

describe('mayus', () => {
    test.each`
      firstValue | expectedResult    
      ${"CASA"}  | ${true}
      ${"cAsA"}  | ${false}
    `('Comprueba que $firstValue se devuelve en mayus. Si es así, da true en $expectedResult', ({firstValue, expectedResult}) => {
      expect(esmayuscula(firstValue)).toBe(expectedResult);
    });
  });