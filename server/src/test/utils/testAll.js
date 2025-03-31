function testAll(compareArray, compareFn) {
  let wrongTestIndex = null;
  for (let i = 0; i < compareArray.length; i++) {
    if (!compareFn(compareArray[i].result, compareArray[i].expected)) {
      wrongTestIndex = i;
      break;
    }
  }
  const resultObject = {
      result: wrongTestIndex === null,
  };
  if (wrongTestIndex !== null) {
      resultObject.expected = compareArray[wrongTestIndex].expected;
      resultObject.received = compareArray[wrongTestIndex].result;
      resultObject.wrongTestNumber = wrongTestIndex + 1;
      resultObject.testsCount = compareArray.length;
  }
  return JSON.stringify(resultObject);
}

module.exports = testAll;
