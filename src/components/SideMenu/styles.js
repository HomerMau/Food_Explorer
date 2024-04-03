import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

  position: absolute;
  z-index: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
`
  

export const Menu = styled.div`
  height: 100vh;
  
  .header {
    padding: 5.6rem 0 2.4rem 2.8rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    display: flex;


    align-items: center;
  }

`

export const Nav = styled.nav`

`;
