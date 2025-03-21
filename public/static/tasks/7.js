import injection from './injection';

const data = { name: "John", age: 30, city: "New York" };

const result = injection(data);

// result === "name=John&age=30&city=New%20York"
