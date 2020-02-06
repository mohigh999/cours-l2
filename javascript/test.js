const { anagrammes, Stack, spirale, puissance4, fizzBuzz } = require('./exercices.js');


describe('La fonction anagramme', () => {
  test('doit exister', () => {
    expect(anagrammes).toBeDefined();
    expect(typeof anagrammes).toEqual('function');
  });

  test('doit valider deux phrases anagrammes.', () => {
    expect(anagrams('hello', 'llohe')).toBeTruthy();
    expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
    expect(anagrams('RAIL! SAFETY!', 'fairy tales')).toBeTruthy();
  });

  test('doit refuser deux phrass qui ne sont pas des anagrammes.', () => {
    expect(anagrams('One One', 'Two two two')).toBeFalsy();
    expect(anagrams('One one', 'One one c')).toBeFalsy();
    expect(anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')).toBeFalsy();
  });
});

