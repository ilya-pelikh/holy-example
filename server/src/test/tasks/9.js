import injection from './injection';

const data = 1634567890000; // миллисекунды с начала эпохи Unix

const result = injection(data);

// result === { year: 2021, month: 10, day: 18, hours: 13, minutes: 44, seconds: 50 }
