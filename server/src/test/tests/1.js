const compare = (data1, data2) => {
    const hasEqualLength = data1.length === data2.length;
    const hasEqualData = data1.join() === data2.join();
    return hasEqualLength && hasEqualData;
};
function test() {
    const one = injection([1, 2]);
    const two = injection([2, 3]);
    const three = injection([3, 4]);

    return compare(one, [2, 3]) & compare(two, [3, 4]) & compare(three, [4, 5]);
}

test();
