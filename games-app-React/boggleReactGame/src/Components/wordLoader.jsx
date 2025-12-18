import React, { useEffect, useState } from 'react';
import Trie from './Trie.js'; // Adjust path if necessary

const WordLoader = () => {
  const [Trie, setTrie] = useState(new Trie());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadWordsIntoTrie = async () => {
      try {
        // Fetch the local .txt file from the public folder
        const response = await fetch(`${import.meta.env.BASE_URL}/wordsList.txt`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const text = await response.text(); // Get the response body as text

        // Split the text into individual words (e.g., by newline or comma)
        // Assuming words are separated by newlines in the .txt file
        const words = text.split('\n').map(word => word.trim()).filter(word => word.length > 0);

        // Create a new Trie and insert words
        const newTrie = new Trie();
        words.forEach(word => newTrie.insert(word));
        
        setTrie(newTrie);
        setLoading(false);
        console.log(`Trie populated with ${words.length} words.`);
        console.log(newTrie);

      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };

    loadWordsIntoTrie();

  }, []); // The empty dependency array ensures this runs once when the component mounts

  if (loading) {
    return <div>Loading words...</div>;
  }

  if (error) {
    return <div>Error loading file: {error}</div>;
  }

  return (
    <div>
      <h1>Word Loader</h1>
      <p>Trie has been successfully populated.</p>
      {/* You can now use the 'trie' state for autocomplete or word checks */}
    </div>
  );
};

export default WordLoader;
