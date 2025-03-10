const solution = (data) => {
  return String.fromCharCode(...data);
};

const data1 = [74, 97, 118, 97, 83, 99, 114, 105, 112, 116];
const data2 = [106, 97, 118, 97, 83, 99, 114, 105, 112, 116];
const data3 = [1057, 1073, 1077, 1088, 32, 1085, 1072, 32, 72, 111, 108, 121, 74, 83];
const data4 = [1057, 1090, 1088, 1086, 1082, 1072, 32, 95, 32, 1089, 32, 1089, 1080, 1084, 1074, 1086, 1083, 64, 1084, 124, 47, 124, 44, 32, 1074, 32, 33, 32, 62, 62, 55357, 56835];

const result1 = solution(data1);
const result2 = solution(data2);
const result3 = solution(data3);
const result4 = solution(data4);

// expect(result1).toBe('JavaScript');
// expect(result2).toBe('javascript');
// expect(result3).toBe('Сбер на HolyJS');
// expect(result4).toBe('Строка _ с символ@м|/|, в ! >>😃');
