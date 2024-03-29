import { Container } from './styles';

import CaretLeft from "../../assets/icons/CaretLeft.svg"

export function ButtonText() {
  

  return (
    <Container
      type="button">
      <img src={CaretLeft} alt="Botão de voltar" />
      <h2>voltar</h2>
    </Container>
  )
}