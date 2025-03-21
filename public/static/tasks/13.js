import injection from './injection';

const data = [
  { name: "John", score: 85 },
  { name: "Jane", score: 92 },
  { name: "Bob", score: 78 }
];

const result = injection(data);

// result === [
//   { name: "Jane", score: 92 },
//   { name: "John", score: 85 },
//   { name: "Bob", score: 78 }
// ]
