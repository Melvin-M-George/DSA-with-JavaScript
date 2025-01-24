class TrieNode{
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}


class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    insert(word){
        let curr = this.root;
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char] = new TrieNode();
            }
            curr = curr.children[char];
        }
        curr.isEndOfWord = true;
    }

    search(word){
        let curr = this.root;
        for(let char of word){
            if(!curr.children[char]){
                return false;
            }
            curr = curr.children[char];
        }
        return curr.isEndOfWord;
    }

    searchPrefix(prefix){
        let curr = this.root;
        for(let char of prefix){
            if(!curr.children[char]){
                return false;
            }
            curr = curr.children[char];
        }
        return true;
    }

    /**
     * Finds the longest common prefix in the Trie
     */
    longestPrefix() {
        let curr = this.root;
        let prefix = "";

        while (curr) {
            const keys = Object.keys(curr.children);
            if (keys.length !== 1 || curr.isEndOfWord){
                break;
            };

            let char = keys[0];
            prefix += char;
            curr = curr.children[char];
        }

        return prefix;
    }

    /**
     * Helper function to collect all words in the Trie that start with a given prefix
     */
    collectAllWords(prefix, words, curr) {
        if (curr.isEndOfWord) {
            words.push(prefix);
        }
        for (let key in curr.children) {
            this.collectAllWords(prefix + key, words, curr.children[key]);
        }
    }

    /**
     * Returns all words in the Trie that start with a given prefix
     */
    autoComplete(prefix) {
        let curr = this.root;
        let words = [];

        for (let char of prefix) {
            if (!curr.children[char]) {
                return words; // No autocomplete suggestions if prefix doesn't exist
            }
            curr = curr.children[char];
        }

        this.collectAllWords(prefix, words, curr);
        return words;
    }




}


const trie = new Trie();

trie.insert("apple");
trie.insert("app");


console.log(trie.search("apple")); // true
console.log(trie.search("app"));   // true
console.log(trie.search("ap"));    // false
console.log(trie.searchPrefix("ap")); // true
trie.insert("apricot");
console.log(trie.searchPrefix("apr")); // true
