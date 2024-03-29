import styled from "styled-components";

export const Container = styled.span`

  font-size: 1.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};

`;