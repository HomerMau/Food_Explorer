import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;

  max-width: 9.5rem;

  
border: none;
background: none;
color: ${({ theme }) => theme.COLORS.WHITE_100};


 > h2 {
    font-size: 2.4rem;

    font-weight: 400;

    
  }
`