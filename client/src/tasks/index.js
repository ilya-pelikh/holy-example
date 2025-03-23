const task1 = `export default exampleText;\n
import injection from './injection';\n
const data = [1, 2];\n
const result = injection(data);\n
// result === [2, 3];
`

const task2 = `import injection from './injection';\n
const data = '1 + 2';\n
const result = injection(data);\n
// result === '1 + 2 + 3';
`

const task3 = `import injection from './injection';\n
const data = [74, 97, 118, 97, 83, 99, 114, 105, 112, 116];\n
const result = injection(data);\n
// result === 'JavaScript';
`

const task4 = `import injection from './injection';\n
const data = "YWRtaW46YWRtaW4=";\n
const result = injection(data);\n
// result === 'admin:admin';
`

const task5 = `import injection from './injection';\n
const data = ["level", "hello", "radar", "world", "madam"];\n
const result = injection(data);\n
// result === ["level", "radar", "madam"];
`

const task6 = `import injection from './injection';\n
const data = [
    "apple", 
    "banana", 
    "kiwi", 
    "strawberry", 
    "fig", 
    "orange", 
    "grape", 
    "mango", 
    "pear", 
    "pineapple"
];\n
const result = injection(data);\n
// result === {
//    3: ["fig"],
//    4: ["kiwi", "pear"],
//    5: ["apple", "grape", "mango"],
//    6: ["banana", "orange"],
//    9: ["pineapple"],
//    10: ["strawberry"]
// }
`

const task7 = `import injection from './injection';\n
const data = { name: "John", age: 30, city: "New York" };\n
const result = injection(data);\n
// result === "name=John&age=30&city=New%20York"
`

const task8 = `import injection from './injection';\n
const data = "hello world";\n
const result = injection(data);\n
// result === { h: 1, e: 1, l: 3, o: 2, " ": 1, w: 1, r: 1, d: 1 }
`

const task9 = `import injection from './injection';\n
const data = 1634567890000; // миллисекунды с начала эпохи Unix\n
const result = injection(data);\n
// result === {
//      year: 2021,
//      month: 10,
//      day: 18,
//      hours: 13,
//      minutes: 44,
//      seconds: 50
// }
`

const task10 = `import injection from './injection';\n
const data = "9995551234";\n
const result = injection(data);\n
// result === "+7 (999) 555-12-34"
`

const task11 = `import injection from './injection';\n
const data = [
  { id: 1, name: "John", age: 25, active: true },
  { id: 2, name: "Jane", age: 30, active: false },
  { id: 3, name: "Bob", age: 22, active: true }
];\n
const result = injection(data);\n
// result === [
//      { id: 1, name: "John", age: 25, active: true },
//      { id: 3, name: "Bob", age: 22, active: true }
// ]
`

const task12 = `import injection from './injection';\n
const data = { r: 255, g: 0, b: 0 };\n
const result = injection(data);\n
// result === "#FF0000"
`

const task13 = `import injection from './injection';\n
const data = [
  { name: "John", score: 85 },
  { name: "Jane", score: 92 },
  { name: "Bob", score: 78 }
];\n
const result = injection(data);\n
// result === [
//   { name: "Jane", score: 92 },
//   { name: "John", score: 85 },
//   { name: "Bob", score: 78 }
// ]
`

const task14 = `import injection from './injection';\n
const data = "John Doe";\n
const result = injection(data);\n
// result === "JD"
`

const task15 = `import injection from './injection';\n
const data = "Hello world, how are you doing today?";\n
const result = injection(data);\n
// result === 7
`

export const tasks = [
    task1,
    task2,
    task3,
    task4,
    task5,
    task6,
    task7,
    task8,
    task9,
    task10,
    task11,
    task12,
    task13,
    task14,
    task15,
]