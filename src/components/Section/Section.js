import { Box } from '../Box';
import { Title } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <Box display="flex" flexDirection="column" p={4} as="section">
      <Title>{title}</Title>
      {children}
    </Box>
  );
};
