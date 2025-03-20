// Подсчет слов в строке
// const solution = (data) => {
//   return data.split(/\s+/).filter(word => word.length > 0).length;
// };

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

  return compare(result1, expected1)
    && compare(result2, expected2)
    && compare(result3, expected3)
    && compare(result4, expected4)
    && compare(result5, expected5);
}

test();
