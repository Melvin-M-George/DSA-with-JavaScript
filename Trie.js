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