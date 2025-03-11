function test(x) {
  const { a, b, c } = x;
  return a.toString(16) + b.toString(16) + c.toString(16);
}

const data1 = { a: 0xabcdef12, b: 0x12345678, c: 0x89abcdef };
const data2 = { a: 0xdeadbeef, b: 0xcafebabe, c: 0xfaceb00c };
const data3 = { a: 0x1a2b3c4d, b: 0x5e6f7a8b, c: 0x9c8d7e6f };

const result1 = test(data1);
const result2 = test(data2);
const result3 = test(data3);

//expect(result1).toBe('abcdef121234567889abcdef')
//expect(result2).toBe('deadbeefcafebabefaceb00c')
//expect(result3).toBe('1a2b3c4d5e6f7a8b9c8d7e6f')
