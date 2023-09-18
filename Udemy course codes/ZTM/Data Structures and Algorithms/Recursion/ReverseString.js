let reversedArray = [];
function reverse(word) {
    let len = word.length
    if (len === 0) {
        return
    }
    //console.log(word[len - 1])
    reversedArray.push(word[len - 1])
    reverse(word.slice(0, len - 1))
}


reverse('hello')
reversedArray = reversedArray.join('');

console.log(reversedArray)