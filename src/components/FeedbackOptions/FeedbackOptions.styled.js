import styled from 'styled-components';

export const FeedbackButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  padding: 12px 20px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};
  border-radius: ${p => p.theme.radii.sm};
  :not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
  :hover {
    background-color: ${p => p.theme.colors.green};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    scale: 1.1;
  }
`;
