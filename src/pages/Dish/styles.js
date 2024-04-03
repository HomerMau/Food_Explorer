import styled from "styled-components"

export const Container = styled.div`
  main {
    margin-top: 3.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const FoodDescription = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 31em;

  .prato {
    margin: 1.6rem;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1,
    h3 {
      font-family: Poppins;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.WHITE_300};
    }

    h1 {
      font-weight: 500;

      font-size: 2.7rem;
    }

    h3 {
      margin-top: 1.6rem;
      font-weight: 400;
      text-align: center;

      font-size: 1.6rem;
      max-width: 31rem;
    }

    .tags {
      padding: 2.4rem;

      display: flex;
      flex-wrap: wrap;

      gap: 2.4rem;
      justify-content: center;
    }

    .options {
      margin: 2rem 0 5.4rem;

      display: flex;
      gap: 2.6rem;

      button {
        padding: ${({ $isadmin }) =>
          $isadmin == true ? "1.2rem 11.2rem" : "0.8rem 4.06rem"};

        h1 {
          font-size: ${({ $isadmin }) =>
            $isadmin == true ? "1.4rem" : "0.9rem"};
        }
      }
    }
  }
`
