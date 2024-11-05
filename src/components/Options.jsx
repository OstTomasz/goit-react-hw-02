import { useState } from "react";
import { options, total } from "./Feedback";

const Button = ({ option, children }) => {
  let [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
  };

  return (
    <button onClick={handleClick} type="button">
      {children}
    </button>
  );
};

const Reset = ({ children }) => {
  if (total > 0) {
    return <Button>Reset</Button>;
  }
};

export const Options = () => {
  return (
    <div className="options">
      <Button option="good">Good</Button>
      <Button>Neutral</Button>
      <Button>Bad</Button>
      <Reset />
    </div>
  );
};
