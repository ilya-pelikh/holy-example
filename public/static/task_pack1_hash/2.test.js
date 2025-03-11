function test(x) {
  for (let key in x) {
    x[key] = '0x' + x[key];
  }
  return x;
}

const data = {
  a: 'A1B2C3D4',
  b: 'E5F6A7B8',
  c: 'C9D0E1F2',
  d: 'F3E4D5C6',
};

const result = test(data);

// expect(result).toBe({a: '0xA1B2C3D4', b: '0xE5F6A7B8', c: '0xC9D0E1F2', d: '0xF3E4D5C6'});
