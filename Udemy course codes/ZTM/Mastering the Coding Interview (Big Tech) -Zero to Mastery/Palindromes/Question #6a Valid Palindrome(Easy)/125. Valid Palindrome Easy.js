/* Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:

Input: "race a car"
Output: false



Constraints:

    s consists only of printable ASCII characters.

 */

// T- O(n)
// S - O(1)

const str = "A man, a plan, a canal: Panama"

var isPalindrome = function (s) {

    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

    let Left = 0, Right = s.length - 1
    while (Left < Right) {
        if (s[Left] !== s[Right]) {
            return false
        }

        Left++
        Right--
    }


    return true

};


console.log(isPalindrome(str))



/*
const isValidPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let rev = "";

    // generate a reverse string using a reverse for loop.
    for(let i = s.length - 1; i >= 0; i--) {
        rev += s[i];
    }

    return rev === s;
};

console.log(isValidPalindrome(string));




rom const string = "A man, a plan, a canal: Panama"

const isValidPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // initialize left/right pointers to point at the middle index of the string. Remember, indexes start at 0 meaning that we have to floor() the value from dividing length by 2 in order to get the index of the center.
    let left = Math.floor(s.length / 2), right = left;

    // if the string is even, move left pointer back by 1 so left/right are pointing at the 2 middle values respectively.
    if(s.length % 2 === 0) {
        left--;
    }

    // loop through the string while expanding pointers outwards comparing the characters.
    while(left >= 0 && right < s.length) {
        if(s[left] !== s[right]) {
            return false
        }

        left--;
        right++;
    }

    return true;
};

console.log(isValidPalindrome(string));
 */