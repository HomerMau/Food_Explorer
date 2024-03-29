import styled from 'styled-components';

export const Container = styled.div`
  


  main {

    margin-top: 3.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  `;

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

      display: flex;
      gap: 1.6rem;

      h1 {
        font-family: Roboto;
      }
    }
  }
`

