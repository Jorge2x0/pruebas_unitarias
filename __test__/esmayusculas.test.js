const esmayusculas = require('../utils/esmayusculas')

test('es mayuscula', () => {
    expect(esmayusculas("CASA")).toBe(true);
})
