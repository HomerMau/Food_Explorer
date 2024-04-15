import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  h1 {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE_300};
  }

  img {
    cursor: pointer;
    transition: 200ms;
  }

  img:hover {
    opacity: 0.8;
  }
`