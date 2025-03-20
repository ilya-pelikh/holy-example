import injection from './injection';

const data = [
  { id: 1, name: "John", age: 25, active: true },
  { id: 2, name: "Jane", age: 30, active: false },
  { id: 3, name: "Bob", age: 22, active: true }
];

const result = injection(data);

// result === [{ id: 1, name: "John", age: 25, active: true }, { id: 3, name: "Bob", age: 22, active: true }]
