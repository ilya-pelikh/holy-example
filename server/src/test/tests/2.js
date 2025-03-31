/**
  const data = '1 + 2';
  // result === '1 + 2 + 3';
  Данный пример прибавляет к строке " + 3
 */

const compare = (data1, data2) => {
    return data1 === data2;
};
function test() {
    const data1 = '1 + 2';
    const data2 = '2 + 3';
    const data3 = '3 + 4';
    const data4 = 'hello world!';
    const data5 = '';

    const result1 = injection(data1);
    const result2 = injection(data2);
    const result3 = injection(data3);
    const result4 = injection(data4);
    const result5 = injection(data5);

    const expected1 = '1 + 2 + 3';
    const expected2 = '2 + 3 + 3';
    const expected3 = '3 + 4 + 3';
    const expected4 = 'hello world! + 3';
    const expected5 = ' + 3';

    return testAll(
        [
            { result: result1, expected: expected1 },
            { result: result2, expected: expected2 },
            { result: result3, expected: expected3 },
            { result: result4, expected: expected4 },
            { result: result5, expected: expected5 },
        ],
        compare
    );
}

test();
