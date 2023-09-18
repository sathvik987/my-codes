const app = require('http').createServer((req, res) => res.end('Hello'));

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});

//$env:PORT=4500; node demo.js