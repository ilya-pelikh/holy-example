// const solution = (data) => {
//   return Buffer.from(data, 'base64').toString('utf-8');
//   // return btoa(data); // для проверки в браузере
// };


const compare = (data1, data2) => {
  return data1 === data2;
};

function test() {
  const data1 = "YWRtaW46YWRtaW4=";
  const data2 = "cmVhbGx5IHNlY3JldCBsZXR0ZXI=";
  const data3 = "MTIzNDU2Nzg5MA==";

  const result1 = injection(data1);
  const result2 = injection(data2);
  const result3 = injection(data3);

  const expected1 = 'admin:admin';
  const expected2 = 'really secret letter';
  const expected3 = '1234567890';

  return compare(result1, expected1)
    && compare(result2, expected2)
    && compare(result3, expected3);
}

test();

