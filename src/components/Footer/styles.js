import styled from "styled-components"

export const Container = styled.div`
  padding: 2.4rem 0;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display: flex;

  align-items: center;

  justify-content: space-around;

`

export const Brand = styled.div`
  display: flex;
  gap: 0.8rem;

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE_700};
  }
`

export const Credits = styled.span`
  p {
    color: ${({ theme }) => theme.COLORS.WHITE_200};

    font-family: "DM Sans";
  }
`
