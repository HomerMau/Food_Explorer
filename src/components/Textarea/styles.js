import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;
  
  font-size: 1.6rem;
  
  padding: 1.2rem 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};


  color: ${({ theme }) => theme.COLORS.WHITE_400};

  border: none;
  resize: none;

  border-radius: 1rem;
  padding: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.WHITE_500};
  }
`