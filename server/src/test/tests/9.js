// Преобразование временной метки
// function injection(prop) {
//   const date = new Date(prop);
//   return {
//     year: date.getFullYear(),
//     month: date.getMonth() + 1,
//     day: date.getDate(),
//     hours: date.getHours(),
//     minutes: date.getMinutes(),
//     seconds: date.getSeconds()
//   };
// };

const compare = (data1, data2) => {
    if (typeof data1 !== 'object' || typeof data2 !== 'object') return false;

    const keys = ['year', 'month', 'day', 'hours', 'minutes', 'seconds'];

    return keys.every(key => data1[key] === data2[key]);
};

function test() {
    const data1 = 1634567890000; // 2021-10-18 13:44:50
    const data2 = 1609459200000; // 2021-01-01 00:00:00
    const data3 = 1577836800000; // 2020-01-01 00:00:00

    const result1 = injection(data1);
    const result2 = injection(data2);
    const result3 = injection(data3);

    const expected1 = { year: 2021, month: 10, day: 18, hours: 17, minutes: 38, seconds: 10 };
    const expected2 = { year: 2021, month: 1, day: 1, hours: 3, minutes: 0, seconds: 0 };
    const expected3 = { year: 2020, month: 1, day: 1, hours: 3, minutes: 0, seconds: 0 };

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
