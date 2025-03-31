// Форматирование телефонного номера
// function injection(data) {
//   return `+7 (${data.slice(0, 3)}) ${data.slice(3, 6)}-${data.slice(6, 8)}-${data.slice(8)}`;
// };

const compare = (data1, data2) => {
    return data1 === data2;
};

function test() {
    const data1 = '9995551234';
    const data2 = '1234567890';
    const data3 = '8005553535';

    const result1 = injection(data1);
    const result2 = injection(data2);
    const result3 = injection(data3);

    const expected1 = '+7 (999) 555-12-34';
    const expected2 = '+7 (123) 456-78-90';
    const expected3 = '+7 (800) 555-35-35';

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
