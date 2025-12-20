
import React, { useState, useEffect, useCallback } from "react"
import './App.css'

const COLORS = ["red", "green", "blue", "yellow", "pink", "purple"]

const App = () => {
  const [sequence, setSequence] = useState([])
  const [playerSequence, setPlayerSequence] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPlayerTurn, setIsPlayerTurn] = useState(false)
  const [activeLight, setActiveLight] = useState(null)
  const [level, setLevel] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  // Load high score from localStorage on mount
  useEffect(() => {
    const savedHighScore = localStorage.getItem("memoryGameHighScore")
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore, 10))
    }
  }, [])

 
  const playSequence = useCallback(async seq => {
    setIsPlayerTurn(false)

    for (let i = 0; i < seq.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 500))
      setActiveLight(seq[i])
      await new Promise(resolve => setTimeout(resolve, 600))
      setActiveLight(null)
    }

    setIsPlayerTurn(true)
  }, [])

 
  const startGame = () => {
    const newColor = COLORS[Math.floor(Math.random() * COLORS.length)]
    const newSequence = [newColor]

    setSequence(newSequence)
    setPlayerSequence([])
    setLevel(1)
    setGameOver(false)
    setIsPlaying(true)

    playSequence(newSequence)
  }

 
  const nextLevel = () => {
    const newColor = COLORS[Math.floor(Math.random() * COLORS.length)]
    const newSequence = [...sequence, newColor]

    setSequence(newSequence)
    setPlayerSequence([])
    setLevel(prev => prev + 1)

    playSequence(newSequence)
  }

 
  const handleColorClick = color => {
    if (!isPlayerTurn || gameOver) return

    const newPlayerSequence = [...playerSequence, color]
    setPlayerSequence(newPlayerSequence)

    // Flash the clicked light
    setActiveLight(color)
    setTimeout(() => setActiveLight(null), 300)

    // Check if the click is correct
    const currentIndex = newPlayerSequence.length - 1

    if (newPlayerSequence[currentIndex] !== sequence[currentIndex]) {
      // Wrong click - game over
      setGameOver(true)
      setIsPlayerTurn(false)
      setIsPlaying(false)

      // Update high score
      if (level > highScore) {
        setHighScore(level)
        localStorage.setItem("memoryGameHighScore", level.toString())
      }
      return
    }

    // Check if player completed the sequence
    if (newPlayerSequence.length === sequence.length) {
      setIsPlayerTurn(false)
      setTimeout(() => {
        nextLevel()
      }, 1000)
    }
  }

  return (
    <div className="memory-game">
      <div className="game-header">
        <h1>Memory Light Game</h1>
        <div className="score-board">
          <div className="score-item">
            <span className="score-label">Level:</span>
            <span className="score-value">{level}</span>
          </div>
          <div className="score-item">
            <span className="score-label">High Score:</span>
            <span className="score-value">{highScore}</span>
          </div>
        </div>
      </div>

      <div className="game-container">
        <div className="lights-grid">
          {COLORS.map(color => (
            <button
              key={color}
              className={`light ${color} ${
                activeLight === color ? "active" : ""
              } ${!isPlayerTurn || gameOver ? "disabled" : ""}`}
              onClick={() => handleColorClick(color)}
              disabled={!isPlayerTurn || gameOver}
              aria-label={`${color} light`}
            />
          ))}
        </div>

        <div className="game-controls">
          {!isPlaying && !gameOver && (
            <button className="start-button" onClick={startGame}>
              Start Game
            </button>
          )}

          {gameOver && (
            <div className="game-over">
              <h2>Game Over!</h2>
              <p>You reached level {level}</p>
              {level === highScore && level > 0 && (
                <p className="new-high-score">🎉 New High Score! 🎉</p>
              )}
              <button className="start-button" onClick={startGame}>
                Play Again
              </button>
            </div>
          )}

          {isPlaying && !gameOver && (
            <div className="game-status">
              {isPlayerTurn ? (
                <p className="status-text">
                  Your turn! ({playerSequence.length}/{sequence.length})
                </p>
              ) : (
                <p className="status-text">Watch the sequence...</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
