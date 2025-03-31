const compare = (data1 = [], data2 = []) => {
    const hasEqualLength = data1.length === data2.length;
    const hasEqualData = data1.join() === data2.join();
    return hasEqualLength && hasEqualData;
};
function test() {
    const one = injection([1, 2]);
    const two = injection([2, 3]);
    const three = injection([3, 4]);
    const four = injection([4, 5]);
    return testAll(
        [
            { result: one, expected: [2, 3] },
            { result: two, expected: [3, 4] },
            { result: three, expected: [4, 5] },
            { result: four, expected: [5, 6] },
        ],
        compare
    );
}

test();
