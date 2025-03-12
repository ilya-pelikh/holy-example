const solution = (data) => {
  return Buffer.from(data, 'base64').toString('utf-8');
  // return btoa(data); // для проверки в браузере
};

const data1 = "YWRtaW46YWRtaW4=";
const data2 = "cmVhbGx5IHNlY3JldCBsZXR0ZXI=";

const result1 = solution(data1);
const result2 = solution(data2);

// expect(result1).toBe('admin:admin');
// expect(result2).toBe('really secret letter');
