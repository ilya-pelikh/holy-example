// Подсчет слов в строке
// function injection(data) {
//   return data.split(/\s+/).filter(word => word.length > 0).length;
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
  return data1 === data2;
};

function test() {
  const data1 = "Hello world, how are you doing today?";
  const data2 = "JavaScript is awesome";
  const data3 = "   Multiple   spaces   between   words   ";
  const data4 = "One";
  const data5 = "";

  const result1 = injection(data1);
  const result2 = injection(data2);
  const result3 = injection(data3);
  const result4 = injection(data4);
  const result5 = injection(data5);

  const expected1 = 7;
  const expected2 = 3;
  const expected3 = 4;
  const expected4 = 1;
  const expected5 = 0;

  return testAll([
    { result: result1, expected: expected1 },
    { result: result2, expected: expected2 },
    { result: result3, expected: expected3 },
    { result: result4, expected: expected4 },
    { result: result5, expected: expected5 },
  ], compare);
}

test();
