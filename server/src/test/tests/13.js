// Сортировка массива объектов
// function injection(data) {
//   return [...data].sort((a, b) => b.score - a.score);
// };

function testAll(compareArray, compareFn) {
    let wrongTestIndex = null;
    compareArray.forEach((test, index) => {
        if (!compareFn(test.result, test.expected)) {
            wrongTestIndex = index;
        }
    });
    const resultObject = {
        result: wrongTestIndex === null,
    };
    if (wrongTestIndex !== null) {
        resultObject.expected = compareArray[wrongTestIndex].expected;
        resultObject.received = compareArray[wrongTestIndex].result;
    }
    return JSON.stringify(resultObject);
}

const compare = (data1, data2) => {
    if (!Array.isArray(data1) || !Array.isArray(data2)) return false;
    if (data1.length !== data2.length) return false;

    return data1.every((item, index) => {
        return item.name === data2[index].name && item.score === data2[index].score;
    });
};

function test() {
    const data1 = [
        { name: 'John', score: 85 },
        { name: 'Jane', score: 92 },
        { name: 'Bob', score: 78 },
    ];

    const data2 = [
        { name: 'Alice', score: 65 },
        { name: 'Mike', score: 90 },
        { name: 'Sarah', score: 82 },
        { name: 'Tom', score: 88 },
    ];

    const data3 = [
        { name: 'Kate', score: 75 },
        { name: 'David', score: 75 },
        { name: 'Alex', score: 75 },
    ];

    const result1 = injection(data1);
    const result2 = injection(data2);
    const result3 = injection(data3);

    const expected1 = [
        { name: 'Jane', score: 92 },
        { name: 'John', score: 85 },
        { name: 'Bob', score: 78 },
    ];

    const expected2 = [
        { name: 'Mike', score: 90 },
        { name: 'Tom', score: 88 },
        { name: 'Sarah', score: 82 },
        { name: 'Alice', score: 65 },
    ];

    const expected3 = [
        { name: 'Kate', score: 75 },
        { name: 'David', score: 75 },
        { name: 'Alex', score: 75 },
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
