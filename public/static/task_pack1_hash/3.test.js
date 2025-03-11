function test(x) {
  const hash = 0xefcdab89;
  return x.includes(hash);
}

const data1 = [0x12345678, 0xabcdef12, 0xefcdab89, 0x89abcdef]; // Содержит hash (число)
const data2 = [0x12345678, '0xEFCDAB89', 0xabcdef12, '0x89ABCDEF']; // Содержит hash (строка)
const data3 = [0x12345678, 0xabcdef12, 0x89abcdef]; // Не содержит hash
const data4 = [true, 0x12345678, false, false, 0x12345678]; // Не содержит hash
const data5 = [0x12345678, '0xEFCDAB89', false, 0xefcdab89, '0x89ABCDEF']; // Содержит hash (число и строка)

const result1 = test(data1);
const result2 = test(data2);
const result3 = test(data3);
const result4 = test(data4);
const result5 = test(data5);

// expect(result1).toBe(true);
// expect(result2).toBe(false);
// expect(result3).toBe(false);
// expect(result4).toBe(false);
// expect(result5).toBe(true);
