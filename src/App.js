// Import Section
import { useState, useEffect } from "react";
import Buttons from "./Buttons";
import Image from "./Image";
// Main App
function App() {
  // All the states
  const [imgNum, setImgNum] = useState(0);
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [Totalscore, setTotalScore] = useState(0);
  // All the useEffects
  useEffect(() => {
    if (imgNum !== 1) {
      setScore(score + imgNum);
    } else {
      setRound(round + 1);
      setScore(0);
    }
  }, [imgNum]);
  useEffect(() => {
    if (round >= 10) {
      alert("loose");
      NewGame();
    }
  }, [round]);
  useEffect(() => {
    if (score + Totalscore >= 100) {
      alert("win");
      NewGame();
    }
  }, [score]);
  /************************
   *     My functions     *
   ************************/

  //Roll the dice
  function Roll() {
    setImgNum(Math.ceil(Math.random() * 6));
  }
  //New Game
  function NewGame() {
    setImgNum(0);
    setRound(1);
    setScore(0);
    setTotalScore(0);
  }
  //Save the score
  function Save() {
    setTotalScore(score + Totalscore);
    setScore(0);
  }
  //Return the game
  return (
    <div className="App">
      <center className="Todo">
        <h1>Game to Play</h1>
        <center className="mySpace">
          {/* Component Image */}
          <Image img={imgNum} />
        </center>
        <center>
          {/* Component Buttons */}
          <Buttons
            Roll={Roll}
            Save={Save}
            NewGame={NewGame}
            round={round}
            score={score}
            totalScore={Totalscore}
          />
        </center>
      </center>
    </div>
  );
}
export default App;
