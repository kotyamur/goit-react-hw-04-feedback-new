export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option, i) => (
        <button type="button" key={i} onClick={() => onLeaveFeedback(option)}>
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
