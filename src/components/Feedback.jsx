export const options = { good: 1, neutral: 0, bad: 0 };
export const total = Array.from(Object.values(options)).reduce((acc, curr) => {
  return acc + curr;
});
const posiitve = ((options.good + options.neutral) / total).toFixed(2) * 100;

console.log(posiitve);

export const Feedback = () => {
  const result =
    total !== 0 ? (
      <div className="feedback">
        <div>
          <span>Good: </span>
          <span>{options.good}</span>
        </div>
        <div>
          <span>Neutral: </span>
          <span>{options.neutral}</span>
        </div>
        <div>
          <span>Bad: </span>
          <span>{options.bad}</span>
        </div>
        <div>
          <span>Total: </span>
          <span>{total}</span>
        </div>
        <div>
          <span>Positive: </span>
          <span>{posiitve}%</span>
        </div>
      </div>
    ) : (
      <p>No feedback yet</p>
    );

  return result;
};
