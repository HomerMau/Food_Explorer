import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border-radius: 0.5rem;

  > input {
    height: 4.8rem;
    width: 100%;

    font-family: Roboto;
    font-weight: 400;
    font-size: 1.6rem;

    padding: 1.2rem 1.4rem;

    color: ${({ theme }) => theme.COLORS.WHITE_400};
    background: transparent;
    border: none;


    &::placeholder {
      color: ${({ theme }) => theme.COLORS.WHITE_500};
    }
  }

  > img {
    margin-left: 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    cursor: pointer;
  }
`
