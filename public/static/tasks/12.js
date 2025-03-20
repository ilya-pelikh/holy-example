import injection from './injection';
const data = { r: 255, g: 0, b: 0 };

const result = injection(data);

// result === "#FF0000"
