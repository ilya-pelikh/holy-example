// function injection(data) {
//   return Buffer.from(data, 'base64').toString('utf-8');
//   // return atob(data); // для проверки в браузере
// };

function btoa(str) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let output = '';
    let i = 0;

    while (i < str.length) {
        const chr1 = str.charCodeAt(i++);
        const chr2 = i < str.length ? str.charCodeAt(i++) : 0;
        const chr3 = i < str.length ? str.charCodeAt(i++) : 0;

        const enc1 = chr1 >> 2;
        const enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        const enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        const enc4 = chr3 & 63;

        output +=
            chars.charAt(enc1) +
            chars.charAt(enc2) +
            (i > str.length - 2 ? '=' : chars.charAt(enc3)) +
            (i > str.length - 3 ? '=' : chars.charAt(enc4));
    }

    return output;
}

// Полифилл для atob (декодирование из Base64 в строку)
function atob(str) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    str = str.replace(/=+$/, '');
    let output = '';

    if (str.length % 4 === 1) {
        throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }

    for (let bc = 0, bs = 0, buffer, i = 0; (buffer = str.charAt(i++)); ) {
        const idx = chars.indexOf(buffer);
        if (idx === -1) continue;

        bs = bc % 4 ? bs * 64 + idx : idx;
        if (bc++ % 4) {
            output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6)));
        }
    }

    return output;
}

const compare = (data1, data2) => {
    return data1 === data2;
};

function test() {
    const data1 = 'YWRtaW46YWRtaW4=';
    const data2 = 'cmVhbGx5IHNlY3JldCBsZXR0ZXI=';
    const data3 = 'MTIzNDU2Nzg5MA==';

    const result1 = injection(data1);
    const result2 = injection(data2);
    const result3 = injection(data3);

    const expected1 = 'admin:admin';
    const expected2 = 'really secret letter';
    const expected3 = '1234567890';

    return testAll(
        [
            { result: result1, expected: expected1 },
            { result: result2, expected: expected2 },
            { result: result3, expected: expected3 },
        ],
        compare
    );
}

test();
