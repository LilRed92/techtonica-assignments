import {loadWordsIntoTrie, checkDictionary} from "./index.js"

class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  export class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    search(word) {

      function dfs(currentCharIdx, currentNode) {
        // Base case: If we have reached the end of the word string
        if (currentCharIdx === word.length) {
            // Return true only if the final node is marked as the end of a valid word
            return currentNode.isEndOfWord;
        }
        const char = word[currentCharIdx];
        // If the current character is not a child of the current node, the word doesn't exist
        if (!currentNode.children.has(char)) {
            return false;
        }
        // Move to the next node and continue the DFS
        return dfs(currentCharIdx + 1, currentNode.children.get(char));
    }
        // Start the DFS from the first character of the word and the root of the trie
        return dfs(0, this.root);

      // let node = this.root;
  
      // for (let i = 0; i < word.length; i++) {
      //   let char = word[i];
  
      //   if (!node.children[char]) {
      //     return false;
      //   }
      //   node = node.children[char];
      // }
      // return node.isEndOfWord;
    }
  
    startsWith(prefix) {
      let node = this.root;
      for (let i = 0; i < prefix.length; i++) {
        let char = prefix[i];
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return true;
    }
  };
  

export {TrieNode}
  