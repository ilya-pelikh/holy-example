// Группировка по длине
// function injection(data) {
//   return data.reduce((acc, word) => {
//     const length = word.length;
//     acc[length] = acc[length] || [];
//     acc[length].push(word);
//     return acc;
//   }, {});
// };

const compare = (data1, data2) => {
    if (typeof data1 !== 'object' || typeof data2 !== 'object') return false;

    const keys1 = Object.keys(data1).sort();
    const keys2 = Object.keys(data2).sort();

    if (keys1.length !== keys2.length) return false;

    return keys1.every(key => {
        if (!data2[key]) return false;
        if (!Array.isArray(data1[key]) || !Array.isArray(data2[key])) return false;
        if (data1[key].length !== data2[key].length) return false;

        const sorted1 = [...data1[key]].sort();
        const sorted2 = [...data2[key]].sort();

        return sorted1.every((item, index) => item === sorted2[index]);
    });
};

function test() {
    const data1 = ['apple', 'banana', 'kiwi', 'strawberry', 'fig'];
    const data2 = ['js', 'css', 'html', 'react', 'vue', 'angular'];
    const data3 = ['one', 'two', 'three', 'four', 'five'];

    const result1 = injection(data1);
    const result2 = injection(data2);
    const result3 = injection(data3);

    const expected1 = { 3: ['fig'], 4: ['kiwi'], 5: ['apple'], 6: ['banana'], 10: ['strawberry'] };
    const expected2 = { 2: ['js'], 3: ['css', 'vue'], 4: ['html'], 5: ['react'], 7: ['angular'] };
    const expected3 = { 3: ['one', 'two'], 4: ['four', 'five'], 5: ['three'] };

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
