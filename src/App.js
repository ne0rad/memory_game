import { useState } from 'react';
import Gameboard from './components/Gameboard';
import Menu from './components/Menu';
import './styles/App.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(1);

  function updateScore(isAdd) {
    // true/false to add score or reset
    if(isAdd) {
      if(score >= bestScore) {
        setBestScore(score + 1);
      }
      setScore(score + 1);
    } else {
      setScore(0);
    }
  }

  function updateLevel(win) {
    if(win) {
      setLevel(level + 1);
    } else {
      setLevel(1);
    }
  }

  return (
    <div className="App">
      <Menu score={score} bestScore={bestScore} level={level}/>
      <Gameboard updateScore={updateScore} updateLevel={updateLevel}/>
    </div>
  );
}

export default App;
