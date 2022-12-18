//Image Component
function Image(props) {
  return (
    <div>
      <img src={"images/dice-" + props.img + ".png"} alt="dice" />
    </div>
  );
}
export default Image;