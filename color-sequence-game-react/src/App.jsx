import { useState } from 'react'
import Scoreboard from"./components/Scoreboard";
import Controls from"./components/Controls";
import GameBoard from"./components/GameBoard";
import './App.css'

const COLORS = ["red","green","blue","purple"];

function App() {
  const [sequence, setSequence] =useState([]);
  const [userInput, setUserInput] =useState([]);
  const [score, setScore] =useState(0);

  return (
    <div className="app-main">
      <h1>Color Sequence Memory Game (React)</h1>
    </div>
      
  );
}

export default App
