// https://adventofcode.com/2015/day/1
// 1 - What floor does santa end up
// 2 - When does santa enter basement
// ( - > go up 1 floor
// ) - > go down 1 floor

const fs = require('fs');

function q1() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('santa-floor');
        const directions = data.toString();
        const directionsArray = directions.split('');
        let acc = 0;
        directionsArray.map((current) => {
            if (current === '(') {
                acc += 1;
            } else if (current === ')') {
                acc -= 1;
            }

        });
        console.timeEnd('santa-floor');
        console.log('floor: ' + acc);
    })
}


function q2() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('santa-basement');
        const directions = data.toString();
        const directionsArray = directions.split('');
        let acc = 0;
        let counter = 0;
        directionsArray.some((current) => {
            if (current === '(') {
                acc += 1;
            } else if (current === ')') {
                acc -= 1;
            }
            counter++;
            return acc < 0;
        });
        console.timeEnd('santa-basement');
        console.log('basement: ' + counter);
    })
}

q1();
q2();
