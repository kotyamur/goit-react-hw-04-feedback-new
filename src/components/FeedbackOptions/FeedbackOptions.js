import { Box } from '../Box';
import { FeedbackButton } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box display="flex" p={3}>
      {options.map((option, i) => (
        <FeedbackButton
          type="button"
          key={i}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.toUpperCase()}
        </FeedbackButton>
      ))}
    </Box>
  );
};
