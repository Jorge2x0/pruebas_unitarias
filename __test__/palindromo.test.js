const palindromo = require('../utils/palindromo');

test ('comprobar que funciona el palindromo', ()=>{
    expect(palindromo("AMOR")).toBe("ROMA");
})