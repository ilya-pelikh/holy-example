import injection from './injection';

const data = ["apple", "banana", "kiwi", "strawberry", "fig", "orange", "grape", "mango", "pear", "pineapple"];

const result = injection(data);

// result === { 3: ["fig"], 4: ["kiwi", "pear"], 5: ["apple", "grape", "mango"], 6: ["banana", "orange"], 9: ["pineapple"], 10: ["strawberry"] }

