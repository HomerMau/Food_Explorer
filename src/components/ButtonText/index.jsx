import { Container } from './styles';

import CaretLeft from "../../assets/icons/CaretLeft.svg"

export function ButtonText({ title, icon, ...rest }) {
  

  return (
    <Container {...rest}
      type="button">
      <img src={icon} alt={title} />
      <h2>{title}</h2>
    </Container>
  )
}