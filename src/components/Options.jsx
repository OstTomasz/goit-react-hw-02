import { Button } from "./Option";

export const Options = ({ increaseValue, resetValues, total }) => {
  const options = (
    <>
      <Button increaseValue={() => increaseValue("good")}>Good</Button>
      <Button increaseValue={() => increaseValue("neutral")}>Neutral</Button>
      <Button increaseValue={() => increaseValue("bad")}>Bad</Button>
    </>
  );

  const reset =
    total > 0 ? (
      <button onClick={resetValues} type="button">
        Reset
      </button>
    ) : null;

  return (
    <div className="options">
      {options} {reset}
    </div>
  );
};
