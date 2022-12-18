// Buttons component
function Buttons(props) {
  return (
    <div className="Buttons">
      <button  onClick={props.Roll}>Roll</button>
      <button onClick={props.Save}>Save</button>
      <button onClick={props.NewGame}>New Game</button>
      <h4>
        Score: {props.score} | Total: {props.totalScore} | Round: {props.round}
      </h4>
    </div>
  );
}
export default Buttons;
