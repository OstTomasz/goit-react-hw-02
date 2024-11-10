export const Option = ({ handleClick, children }) => {
  return (
    <button onClick={handleClick} type="button">
      {children}
    </button>
  );
};
