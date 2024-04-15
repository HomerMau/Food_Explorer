import styled from "styled-components";

export const Container = styled.div`
  width: 210px;
  height: 292px;

  margin: 2.4rem 0 2.4rem 0;

  display: flex;
  flex-direction: column;

  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_300};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

  .favorites {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    > img {
      width: 2.4rem;
      height: 2.2rem;

      margin: 1.6rem 1.6rem 0 0;
    }
  }

  main {
    align-items: center;
    gap: 1.2rem;

    img.food {
      margin-top: -1.5rem;

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

    button {
      width: 16.2rem;
      height: 3.2rem;
    }
  }
`