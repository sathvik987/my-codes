
const nemo = ['tom', 'neo', 'jerry', 'nemo'];

function findNemo1(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
            break; // makes it efficient
        }
    }
}

findNemo1(nemo);