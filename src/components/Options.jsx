import { Option } from "./Option";

export const Options = ({ increaseValue, resetValues, total }) => {
  return (
    <>
      <Option handleClick={() => increaseValue("good")}>Good</Option>
      <Option handleClick={() => increaseValue("neutral")}>Neutral</Option>
      <Option handleClick={() => increaseValue("bad")}>Bad</Option>
      {total > 0 ? <Option handleClick={resetValues}>Reset</Option> : null}
    </>
  );
};
