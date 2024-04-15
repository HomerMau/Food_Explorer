import styled from "styled-components";

export const Container = styled.div`
  button {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background-color: ${({ theme }) => theme.COLORS.RED_100};

    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    font-size: 0.9rem;

    border-radius: 0.5rem;

    padding: 1.2rem 4.2rem;

    transition: 0.2s;
  }

  button:hover {
    background-color: ${({ theme }) => theme.COLORS.RED_400};
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-size: 1.4rem;
    font-weight: 500;
  }
`