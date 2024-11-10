// import { useState } from "react";

export const Button = ({ increaseValue, children }) => {
  return (
    <button onClick={increaseValue} type="button">
      {children}
    </button>
  );
};
