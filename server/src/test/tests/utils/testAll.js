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

module.exports = testAll;
