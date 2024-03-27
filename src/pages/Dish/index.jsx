import { Container } from "./styles"

import { Header } from "../../components/Header"

export function Dish() {
  return (
    <Container>
      <Header  quantityOfItens={0} />
      <h1>Tudo posso</h1>
    </Container>
  )
}
