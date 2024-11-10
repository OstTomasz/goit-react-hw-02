export const Feedback = ({ values, total, positve }) => {
  const result =
    total !== 0 ? (
      <div className="feedback">
        <div>
          <span>Good: </span>
          <span>{values.good}</span>
        </div>
        <div>
          <span>Neutral: </span>
          <span>{values.neutral}</span>
        </div>
        <div>
          <span>Bad: </span>
          <span>{values.bad}</span>
        </div>
        <div>
          <span>Total: </span>
          <span>{total}</span>
        </div>
        <div>
          <span>Positive: </span>
          <span>{positve.toFixed(0)}%</span>
        </div>
      </div>
    ) : (
      <p>No feedback yet</p>
    );

  return result;
};
