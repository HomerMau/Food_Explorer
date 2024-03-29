/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Container, Credits, Brand } from "./styles"

import logo from "../../assets/logo_grey.svg"

export function Footer() {
  return (
    <Container >

      <Brand>
        <img src={logo} alt="Logo da Food Explorer" />

        <h1>food explorer</h1>
      </Brand>

      <Credits>
        <p>© 2024 - Todos os direitos reservados.</p>
      </Credits>
    </Container>
  )
}
