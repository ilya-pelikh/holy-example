import injection from './injection';

// финализация состояние

const data1 = { a: 0x98badcfe, b: 0xefcdab89, c: 0x10325476 };

const result = injection(data); // '98badcfeefcdab8910325476'
