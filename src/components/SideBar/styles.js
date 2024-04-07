import styled from "styled-components"

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

  position: absolute;
  z-index: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  
`

export const Header = styled.div`
  padding: 5.6rem 0 2.4rem 2.8rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display: flex;

  align-items: center;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;

  main {
    padding: 0 2.8rem;

    display: flex;
    align-items: flex-start;

    input {
      width: 100%;
    }
  }
`

export const Nav = styled.nav`
  margin-top: 3.6rem;

  display: flex;
  flex-direction: column;

  width: 100%;

  a {
    color: ${({ theme }) => theme.COLORS.WHITE_300};
    font-family: Poppins;

    padding: 1rem;

    font-size: 2.4rem;
    font-weight: 300;
    line-height: 3.36rem;
    
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  }
`
