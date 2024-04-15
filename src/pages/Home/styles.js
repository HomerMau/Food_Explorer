import styled from "styled-components"

export const Container = styled.div`
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
`

export const Marketing = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 4.8rem;
`

export const Rectangle = styled.div`
  margin: 4.4rem 4.4rem 0 4.4rem;

  padding-right: 0.8rem;

  display: flex;

  height: 11.4rem;

  border-radius: 0.3rem;

  background: ${({ theme }) => theme.COLORS.GRADIENTS_200};

  img {
    transform: scaleX(-1);

    margin-top: -3rem;
    margin-left: -3rem;

    width: 19.1rem;

    opacity: 0.8;

    position: absolute;
    
  }

  .marketing {
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    color: ${({ theme }) => theme.COLORS.WHITE_300};

    width: 20.1rem;
    gap: 0.3rem;
    margin-left: 15rem;
    font-family: Poppins;

    h2 {
      font-size: 1.8rem;
      font-weight: 600;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 400;

      line-height: 140%;
    }
  }
`
 export const Cards = styled.div`

   h2 {
     color: ${({ theme }) => theme.COLORS.WHITE_300};

     font-size: 1.8rem;
     font-weight: 500;

   }

   h3 {
     font-size: 1.2rem;
     font-weight: 400;

     line-height: 140%;
   }
 `
 export const Scroll = styled.div`
 display: flex;
 gap: 1.6rem;
 `;