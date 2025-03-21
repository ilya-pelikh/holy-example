// Палиндромный фильтр
// function injection(data) {
//   return data.filter(word => word === word.split('').reverse().join(''));
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
  if (Array.isArray(data1) && Array.isArray(data2)) {
    if (data1.length !== data2.length) return false;
    return data1.every((item, index) => item === data2[index]);
  }
  return data1 === data2;
};

function test() {
  const data1 = ["level", "hello", "radar", "world", "madam"];
  const data2 = ["noon", "test", "deed", "javascript"];
  const data3 = ["a", "ab", "aba", "abba", "abcba"];

  const result1 = injection(data1);
  const result2 = injection(data2);
  const result3 = injection(data3);

  const expected1 = ["level", "radar", "madam"];
  const expected2 = ["noon", "deed"];
  const expected3 = ["a", "aba", "abba", "abcba"];

  return testAll([
    { result: result1, expected: expected1 },
    { result: result2, expected: expected2 },
    { result: result3, expected: expected3 },
  ], compare);
}

test();
