import { Button } from "./Option";

export const Options = ({ increaseValue, resetValues, total }) => {
  const result =
    total > 0 ? (
      <div className="options">
        <Button increaseValue={() => increaseValue("good")}>Good</Button>
        <Button increaseValue={() => increaseValue("neutral")}>Neutral</Button>
        <Button increaseValue={() => increaseValue("bad")}>Bad</Button>

        <button onClick={resetValues} type="button">
          Reset
        </button>
      </div>
    ) : (
      <div className="options">
        <Button increaseValue={() => increaseValue("good")}>Good</Button>
        <Button increaseValue={() => increaseValue("neutral")}>Neutral</Button>
        <Button increaseValue={() => increaseValue("bad")}>Bad</Button>
      </div>
    );
  return result;
};
