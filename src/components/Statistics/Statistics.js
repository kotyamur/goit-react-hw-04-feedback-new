import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Text } from './Statistics.styled';

export const Statistics = ({ positivePercentage, total, options }) => {
  return (
    <Box p={2} display="flex" flexDirection="column">
      {Object.keys(options).map(option => (
        <Text key={option}>
          {option}: {options[option]}
        </Text>
      ))}
      <Text>Total: {total}</Text>
      <Text>Positive feedback: {positivePercentage}%</Text>
    </Box>
  );
};

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
