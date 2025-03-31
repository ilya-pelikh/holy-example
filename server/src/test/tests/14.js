// Генерация инициалов
// function injection(data) {
//   return data
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase())
//     .join('');
// };

const compare = (data1, data2) => {
    return data1 === data2;
};

function test() {
    const data1 = 'John Doe';
    const data2 = 'jane smith';
    const data3 = 'Robert John Williams';
    const data4 = 'mary ann JONES';

    const result1 = injection(data1);
    const result2 = injection(data2);
    const result3 = injection(data3);
    const result4 = injection(data4);

    const expected1 = 'JD';
    const expected2 = 'JS';
    const expected3 = 'RJW';
    const expected4 = 'MAJ';

    return testAll(
        [
            { result: result1, expected: expected1 },
            { result: result2, expected: expected2 },
            { result: result3, expected: expected3 },
            { result: result4, expected: expected4 },
        ],
        compare
    );
}

test();
