import injection from './injection';

// валидация блоков

const hash = 0xefcdab89;
const data1 = [0xabcdef12, 0x12345678, 0xefcdab89, 0x89abcdef];
const data2 = [0xefcdab89, '0xABCDEF12', 0x12345678, '0x89ABCDEF'];
const data3 = [true, 0x12345678, false, false, 0x12345678];

const result1 = injection(data1); // true
const result2 = injection(data2); // true
const result3 = injection(data3); // false
