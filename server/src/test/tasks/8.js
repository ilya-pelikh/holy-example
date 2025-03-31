import injection from './injection';

const data = "hello world";

const result = injection(data);

// result === { h: 1, e: 1, l: 3, o: 2, " ": 1, w: 1, r: 1, d: 1 }
