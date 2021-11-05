import { useState } from 'react';
import Gameboard from './components/Gameboard';
import Menu from './components/Menu';
import './styles/App.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

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

  return (
    <div className="App">
      <Menu score={score} bestScore={bestScore}/>
      <Gameboard updateScore={updateScore}/>
    </div>
  );
}

export default App;
