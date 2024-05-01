import styled from "styled-components";

export const Container = styled.div`
  width: 210px;
  height: 292px;

  margin: 2.4rem 0 2.4rem 0;

  display: flex;
  flex-direction: column;

  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_300};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

  .favorites {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    > img {
      width: 2.4rem;
      height: 2.2rem;

    }
    
    button {
      margin: 1.4rem 1.4rem 0 0;
      padding: 0.2rem 0.2rem 0 0;
      border: none;
      background: none;
    }
  }

  main {
    align-items: center;
    gap: 1.2rem;
    

    img.food {
      margin-top: ${({ $isadmin }) => ($isadmin ? "2.4rem" : "-1.5rem")};

      width: 8.8rem;
      height: 8.8rem;
    }

    > h2 {
      text-align: center;

      font-size: 1.4rem;
    }

    span {


      color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};

      font-size: 1.6rem;
      font-style: normal;
    }

    .buttons {
      display: ${({ $isadmin }) => ($isadmin ? "none" : "flex")};
      flex-direction: column;
      gap: 1.6rem;
    }

    button {
      width: 16.2rem;
      height: 3.2rem;
    }
  }
`