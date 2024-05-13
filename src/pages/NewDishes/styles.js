import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    display: flex;
    flex-direction: column;

    gap: 2.4rem;

    > h1 {
      color: ${({ theme }) => theme.COLORS.WHITE_300};

      font-family: Poppins;
      font-size: 3.2rem;
      font-style: normal;
      font-weight: 500;
    }
  }
`