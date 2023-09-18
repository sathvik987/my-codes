/* Implement a trie with insert, search, and startsWith methods.

    Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app");     // returns true

Note:

You may assume that all inputs are consist of lowercase letters a - z.
All inputs are guaranteed to be non - empty strings.

 */

// 

// T - O(L) //L - length of word
// S - O(L)

class TrieNode {
    constructor() {
        this.end = false;
        this.keys = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word, node = this.root) {
        if (word.length === 0) {
            node.end = true;
            return;
        } else if (!node.keys[word[0]]) {
            node.keys[word[0]] = new TrieNode();
            this.insert(word.substring(1), node.keys[word[0]]);
        } else {
            this.insert(word.substring(1), node.keys[word[0]]);
        }
    }

    search(word, node = this.root) {
        if (word.length === 0 && node.end) {
            return true;
        } else if (word.length === 0) {
            return false;
        } else if (!node.keys[word[0]]) {
            return false;
        } else {
            return this.search(word.substring(1), node.keys[word[0]]);
        }
    }

    startsWith(prefix, node = this.root) {
        if (prefix.length === 0) {
            return true;
        } else if (!node.keys.hasOwnProperty(prefix[0])) {
            return false
        } else {
            return this.startsWith(prefix.substring(1), node.keys[prefix[0]]);
        }
    }
};

const trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple"));   // returns true
console.log(trie.search("app"));     // returns false
console.log(trie.startsWith("app")); // returns true
trie.insert("dog")
trie.insert("app");
console.log(trie.search("app"));     // returns true