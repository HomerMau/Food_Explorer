import styled from "styled-components"

export const Container = styled.div`
  padding: 5.6rem 0 2.4rem 0;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  .navBar {
    display: flex;

    align-items: center;

    justify-content: center;
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;

    color: ${({ theme }) => theme.COLORS.WHITE_100};

    background: none;
    border: none;
  }
`

export const Brand = styled.div`
  display: flex;
  gap: 0.8rem;
  font-size: 1.1rem;

  padding: 0 6.2rem;

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`

export const Admin = styled.div`

  // admin mobile
  display: flex;
  align-items: center;

  
  
  gap: 0.8rem;
  
  text-align: end;
  color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};

  h4 {

    font-weight: 400;
  }
  `


export const Receipt = styled.button`
  background: none;
  border: none;

  //if para transição entre admin ou não
  display: ${({ $isadmin }) => ($isadmin ? "none" : "flex")};

  svg {
    position: relative;
  }

  .NumberOfItens {
    position: absolute;

    width: 1.75rem;
    border-radius: 50%;
    border: none;
    margin: -0.5rem 0 0 1.35rem;

    // Alinha o numero dentro do Button
    display: flex;
    align-items: center;
    justify-content: center;

    // Tamanho do número
    font-size: 1.2rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background-color: ${({ theme }) => theme.COLORS.RED_200};
  }
`