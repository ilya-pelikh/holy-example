// Палиндромный фильтр
// function injection(data) {
//   return data.filter(word => word === word.split('').reverse().join(''));
// };

function test() {
    const data1 = ['level', 'hello', 'radar', 'world', 'madam'];
    const data2 = ['noon', 'test', 'deed', 'javascript'];
    const data3 = ['a', 'ab', 'aba', 'abba', 'abcba'];

    const result1 = injection(data1);
    const result2 = injection(data2);
    const result3 = injection(data3);

    const expected1 = ['level', 'radar', 'madam'];
    const expected2 = ['noon', 'deed'];
    const expected3 = ['a', 'aba', 'abba', 'abcba'];

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
