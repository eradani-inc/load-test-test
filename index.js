const PORT = parseInt(process.argv[2]) || 3040;
const http = require('http');
const express = require('express');
const app = express();

let requestCount = 1;
app.use((req, res) => {
    const reqNum = requestCount;
    requestCount++;
    console.log(`Starting Request ${reqNum}`);
    setTimeout(() => {
        console.log(`Finished Request ${reqNum}`);
        res.status(200).json({ message: `Finished Request ${reqNum}` });
    }, 1000);
});

const server = http.createServer(app);
server.listen(PORT);
console.log(`Server listening on port ${PORT}`);
