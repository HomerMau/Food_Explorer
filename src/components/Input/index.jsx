/* eslint-disable react/prop-types */
import { Container } from './styles'

export function Input({ icon, ...rest }) {


  return (
    <Container>

      <img src={icon} alt="Ícone de Pesquisa"></img>
        <input {...rest} />

    </Container>
  )
}