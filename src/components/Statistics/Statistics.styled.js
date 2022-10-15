import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.primaryText};
  margin-bottom: ${p => p.theme.space[4]}px;
`;
