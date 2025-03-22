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

    return (
        compare(result1, expected1) &&
        compare(result2, expected2) &&
        compare(result3, expected3) &&
        compare(result4, expected4) &&
        compare(result5, expected5)
    );
}

test();
