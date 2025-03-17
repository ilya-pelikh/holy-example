import injection from './injection';

// инициализация состояния хэшей

const data = {
  a: '67452301',
  b: 'EFCDAB89',
  c: 'BAECFE23',
  d: '10325476',
};

const result = injection(data);

// result === {
//      a: 0x67452301,
//      b: 0xEFCDAB89,
//      c: 0xBADCFE23,
//      d: 0x10325476
//      }
