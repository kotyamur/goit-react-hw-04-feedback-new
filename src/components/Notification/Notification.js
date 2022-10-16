import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Message } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <Box p={2}>
      <Message>{message}</Message>
    </Box>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};
