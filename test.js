const axios = require('axios');
const count = parseInt(process.argv[2]) || 10;
const address = process.argv[3] || 'http://eradani-connect-test.eradani.com:3040';

const startTime = +new Date();
const promises = [];
for (let i = 0; i < count; i++) {
    promises.push(axios.get(address));
}

Promise.all(promises).then(() => {
    console.log(`===== Tested ${count} Calls in ${+new Date() - startTime}ms =====`);
});

