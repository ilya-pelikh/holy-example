// Преобразование RGB в HEX
// const solution = (data) => {
//   const toHex = (value) => {
//     const hex = value.toString(16).toUpperCase();
//     return hex.length === 1 ? '0' + hex : hex;
//   };
//
//   return `#${toHex(data.r)}${toHex(data.g)}${toHex(data.b)}`;
// };

const compare = (data1, data2) => {
  return data1 === data2;
};

function test() {
  const data1 = { r: 255, g: 0, b: 0 };
  const data2 = { r: 0, g: 255, b: 0 };
  const data3 = { r: 0, g: 0, b: 255 };
  const data4 = { r: 255, g: 255, b: 255 };
  const data5 = { r: 0, g: 0, b: 0 };

  const result1 = injection(data1);
  const result2 = injection(data2);
  const result3 = injection(data3);
  const result4 = injection(data4);
  const result5 = injection(data5);

  const expected1 = "#FF0000";
  const expected2 = "#00FF00";
  const expected3 = "#0000FF";
  const expected4 = "#FFFFFF";
  const expected5 = "#000000";

  return compare(result1, expected1)
    && compare(result2, expected2)
    && compare(result3, expected3)
    && compare(result4, expected4)
    && compare(result5, expected5);
}

test();
