const Button = ({ children, idName }) => {
  return <button type="button">{children}</button>;
};

export const Options = () => {
  return (
    <div className="options">
      <Button>Good</Button>
      <Button>Neutral</Button>
      <Button>Bad</Button>
      <Button>Reset</Button>
    </div>
  );
};
