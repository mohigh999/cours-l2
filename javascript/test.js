const { anagrammes, Stack, spirale, puissance4, fizzBuzz } = require('./exercices.js');


describe('La fonction anagramme', () => {
  test('doit exister', () => {
    expect(anagrammes).toBeDefined();
    expect(typeof anagrammes).toEqual('function');
  });
});

