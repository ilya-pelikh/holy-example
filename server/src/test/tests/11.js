// Фильтрация объектов по свойству
// function injection(data) {
//   return data.filter(item => item.active);
// };

const compare = (data1, data2) => {
    if (!Array.isArray(data1) || !Array.isArray(data2)) return false;
    if (data1.length !== data2.length) return false;

    return data1.every((item, index) => {
        const obj1 = item;
        const obj2 = data2[index];

        return obj1.id === obj2.id && obj1.name === obj2.name && obj1.age === obj2.age && obj1.active === obj2.active;
    });
};

function test() {
    const data1 = [
        { id: 1, name: 'John', age: 25, active: true },
        { id: 2, name: 'Jane', age: 30, active: false },
        { id: 3, name: 'Bob', age: 22, active: true },
    ];

    const data2 = [
        { id: 1, name: 'Alice', age: 28, active: false },
        { id: 2, name: 'Mike', age: 32, active: true },
        { id: 3, name: 'Sarah', age: 24, active: false },
    ];

    const data3 = [
        { id: 1, name: 'Tom', age: 35, active: true },
        { id: 2, name: 'Jerry', age: 40, active: true },
        { id: 3, name: 'Kate', age: 27, active: true },
    ];

    const result1 = injection(data1);
    const result2 = injection(data2);
    const result3 = injection(data3);

    const expected1 = [
        { id: 1, name: 'John', age: 25, active: true },
        { id: 3, name: 'Bob', age: 22, active: true },
    ];

    const expected2 = [{ id: 2, name: 'Mike', age: 32, active: true }];

    const expected3 = [
        { id: 1, name: 'Tom', age: 35, active: true },
        { id: 2, name: 'Jerry', age: 40, active: true },
        { id: 3, name: 'Kate', age: 27, active: true },
    ];

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
