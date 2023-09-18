const fs = require('fs');

fs.readFile('./file.txt', (err, data) => {
    if (err) {
        console.log('errorrrr')
    }
    console.log('Async ' + data.toString('utf-8'));
})

const file = fs.readFileSync('./file.txt');
console.log('Sync ' + file.toString());

/* fs.appendFile('./file.txt', 'Appending text', (err) => {
    if (err) {
        console.log('error')
    }
}) */

/* fs.writeFile('file2.txt', 'This is file2', (err) => {
    if (err) {
        console.log(err)
    }
}) */

/* fs.unlink('./file2.txt', err => {
    if (err) {
        console.log(err)
    }
    console.log('done');
}) */