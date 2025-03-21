import injection from './injection';

const data = ["level", "hello", "radar", "world", "madam"];

const result = injection(data);

// result === ["level", "radar", "madam"];
