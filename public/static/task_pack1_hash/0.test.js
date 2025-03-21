function test(x) {
  return x.toLowerCase();
}

const data1 = 'AbCdEfGhIjKlM@TOY.it';
const data2 = 'OpQrStUvWxYzAb';
const data3 = 'CdEfGhIjKlMnOpQrStUvWxYzAbCdE';

const result1 = test(data1);
const result2 = test(data2);
const result3 = test(data3);

// expect(result1).toBe('abcdefghijklm@toy.it');
// expect(result2).toBe('opqrstuvwxyzab');
// expect(result3).toBe('cdefghijklmnopqrstuvwxyzabcde');
