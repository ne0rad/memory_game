import { useState } from 'react';
import Gameboard from './components/Gameboard';
import Menu from './components/Menu';
import './styles/App.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(1);

  function updateScore(win) {
    // true/false to add score or reset
    if (win) {
      cardGlow(true, 'score');
      if (score >= bestScore) {
        cardGlow(true, 'hiscore');
        setBestScore(score + 1);
      }
      setScore(score + 1);
    } else {
      cardGlow(false, 'score');
      setScore(0);
    }
  }

  function updateLevel(win) {
    if (win) {
      cardGlow(true, 'level');
      setLevel(level + 1);
    } else {
      cardGlow(false, 'level');
      setLevel(1);
    }
  }

  function cardGlow(win, element) {
    // Add glow to the card depending if right or wrong
    let item = document.getElementById(element);

    if (!win) {
      item.classList.add('red-glow');

      setTimeout(() => {
        item.classList.remove('red-glow');
      }, 500);
    } else {
      item.classList.add('green-glow');

      setTimeout(() => {
        item.classList.remove('green-glow');
      }, 500);
    }
  }

  return (
    <div className="App">
      <Menu score={score} bestScore={bestScore} level={level} />
      <Gameboard updateScore={updateScore} updateLevel={updateLevel} />
    </div>
  );
}

export default App;
