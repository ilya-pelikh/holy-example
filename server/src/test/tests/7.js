// Преобразование объекта в URL-параметры
// function injection(prop) {
//   return Object.entries(prop)
//     .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
//     .join('&');
// };

const compare = (data1, data2) => {
    return data1 === data2;
};

function test() {
    const data1 = { name: 'John', age: 30, city: 'New York' };
    const data2 = { product: 'Laptop', price: 999, inStock: true };
    const data3 = { q: 'javascript', lang: 'en', results: 100 };

    const result1 = injection(data1);
    const result2 = injection(data2);
    const result3 = injection(data3);

    const expected1 = 'name=John&age=30&city=New%20York';
    const expected2 = 'product=Laptop&price=999&inStock=true';
    const expected3 = 'q=javascript&lang=en&results=100';

    return testAll(
        [
            { result: result1, expected: expected1 },
            { result: result2, expected: expected2 },
            { result: result3, expected: expected3 },
        ],
        compare
    );
}

test();
