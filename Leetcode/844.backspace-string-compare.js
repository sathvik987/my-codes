/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let p1 = s.length - 1;
    let p2 = t.length - 1;
    while (p1 >= 0 || p2 >= 0) {
        if (s[p1] != '#' && t[p2] != '#') {
            if (s[p1] != t[p2]) {
                return false
            } else {
                p1--
                p2--
            }
        } else {
            if (s[p1] == '#') {
                let counter = 2;
                while (counter > 0) {
                    p1--;
                    counter--;
                    if (s[p1] == '#') {
                        counter = counter + 2
                    }
                }
            }

            if (t[p2] == '#') {
                let counter = 2;
                while (counter > 0) {
                    p2--;
                    counter--;
                    if (t[p2] == '#') {
                        counter = counter + 2
                    }
                }
            }

        }
    }
    return true
}