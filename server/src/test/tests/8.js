// Подсчет частоты символов
// function injection(prop) {
//   return prop.split('').reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
//   }, {});
// };

const compare = (data1, data2) => {
    if (typeof data1 !== 'object' || typeof data2 !== 'object') return false;

    const keys1 = Object.keys(data1).sort();
    const keys2 = Object.keys(data2).sort();

    if (keys1.length !== keys2.length) return false;

    return keys1.every((key, index) => {
        return key === keys2[index] && data1[key] === data2[key];
    });
};

function test() {
    const data1 = 'hello world';
    const data2 = 'javascript';
    const data3 = 'aaa bbb ccc';

    const result1 = injection(data1);
    const result2 = injection(data2);
    const result3 = injection(data3);

    const expected1 = { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 };
    const expected2 = { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 };
    const expected3 = { a: 3, ' ': 2, b: 3, c: 3 };

    return testAll(
        [
            { result: result1, expected: expected1 },
            { result: result2, expected: expected2 },
            { result: result3, expected: expected3 },
        ],
        compare
    );
}

test();
