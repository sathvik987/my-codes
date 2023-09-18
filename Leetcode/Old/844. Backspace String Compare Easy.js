/* Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".

Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".

Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".

Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".

Note:

    1 <= S.length <= 200
    1 <= T.length <= 200
    S and T only contain lowercase letters and '#' characters.

Follow up:

    Can you solve it in O(N) time and O(1) space?

 */
// T - O(a+b)
// S - O(a+b)
const s1 = "ab#c", t1 = "ad#c";

const buildString = function (string) {
    const builtString = [];
    for (let p = 0; p < string.length; p++) {
        if (string[p] !== '#') {
            builtString.push(string[p]);
        } else {
            builtString.pop();
        }
    }

    return builtString;
}
var backspaceCompare2 = function (S, T) {

    const finalS = buildString(S);
    const finalT = buildString(T);

    if (finalS.length !== finalT.length) {
        return false
    } else {
        for (let p = 0; p < finalS.length; p++) {
            if (finalS[p] !== finalT[p]) {
                return false
            }
        }
    }

    return true;

};

console.log(backspaceCompare2(s1, t1))


// Question is asking to only return T or F. So may be we can avoide scalling Ds.
// T - O(a+b)
// S - O(1)
const s = "ab#c", t = "ad#c";
const ss = "a#c", tt = "b"
var backspaceCompare = function (S, T) {


    let p1 = S.length - 1, p2 = T.length - 1;

    while (p1 >= 0 || p2 >= 0) {
        if (S[p1] === "#" || T[p2] === "#") {
            if (S[p1] === "#") {
                let backCount = 2;

                while (backCount > 0) {
                    p1--;
                    backCount--;


                    if (S[p1] === "#") {
                        backCount += 2;
                    }
                }
            }

            if (T[p2] === "#") {
                let backCount = 2;

                while (backCount > 0) {
                    p2--;
                    backCount--;

                    if (T[p2] === "#") {
                        backCount += 2;
                    }
                }
            }
        } else {
            if (S[p1] !== T[p2]) {
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }

    return true;

};
console.log(backspaceCompare(s, t))
console.log(backspaceCompare(ss, tt))

/*
//my_sol
const s = "ab#c", t = "ad#c";

var backspaceCompare = function (S, T) {

    let arr1 = []
    let arr2 = []

    for (let i = 0; i < S.length; i++) {
        if (S[i] !== '#') {
            arr1.push(S[i])

        } else {
            arr1.pop()
        }

    }


    for (let i = 0; i < T.length; i++) {
        if (T[i] !== '#') {
            arr2.push(T[i])

        } else {
            arr2.pop()
        }

    }

    return (JSON.stringify(arr1) == JSON.stringify(arr2))

};

console.log(backspaceCompare(s, t)) */