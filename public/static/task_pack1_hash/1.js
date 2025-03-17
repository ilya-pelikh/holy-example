import injection from './injection';

// разделение на блоки

const data1 = 'efgh-ijkl-mnop-qr@o-ldy.-ru';
const data2 = 'abcd-efgh-ijkl-m@to-y.it';

const result1 = injection(data); // result === ['efgh', 'ijkl', 'mnop', 'qr@o', 'ldy.', 'ru']
const result2 = injection(data); // result === ['abcd', 'efgh', 'ijkl', 'm@to', 'y.it']
