import { Description } from "./components/Description";
import { Feedback } from "./components/Feedback";
import { Options } from "./components/Options";
import { useState } from "react";

const initialValues = { good: 0, neutral: 0, bad: 0 };

export const App = () => {
  const [values, setValues] = useState(initialValues);

  const total = Array.from(Object.values(values)).reduce((acc, curr) => {
    return acc + curr;
  });

  const positve = ((values.good + values.neutral) / total).toFixed(2) * 100;

  const increaseValue = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const resetValues = () => {
    setValues({
      good: (values.good = 0),
      neutral: (values.neutral = 0),
      bad: (values.bad = 0),
    });
  };

  return (
    <>
      <Description />
      <Options
        increaseValue={increaseValue}
        resetValues={resetValues}
        total={total}
      />
      <Feedback values={values} total={total} positve={positve} />
    </>
  );
};
