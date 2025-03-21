function test(x) {
  return x.split('-');
}

const data1 = 'defg-hijk-lmno-pq@r-stu.-co.uk';
const data2 = 'wxyz-abcd-efgh-ij@k-lmn.-net';
const data3 = 'qrst-uvwx-yzab-cd@e-fgh.-org';

const result1 = test(data1);
const result2 = test(data2);
const result3 = test(data3);

// expect(result1).toBe(['defg', 'hijk', 'lmno', 'pq@r', 'stu.', 'co.uk']);
// expect(result2).toBe(['wxyz', 'abcd', 'efgh', 'ij@k', 'lmn.', 'net']);
// expect(result3).toBe(['qrst', 'uvwx', 'yzab', 'cd@e', 'fgh.', 'org']);
