/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Container, Receipt, Brand, Admin } from "./styles"

import { CiMenuBurger } from "react-icons/ci"
import { PiReceipt } from "react-icons/pi"

import logo from "../../assets/logo.svg"

export function Header({ $isadmin, quantityOfItens, ...rest }) {
  return (
    <Container $isadmin={$isadmin} {...rest}>
      <div className="navBar">
        <CiMenuBurger />

        <Brand>
          <img src={logo} alt="Logo da Food Explorer" />
          <Admin>
            <h1>food explorer</h1>
            {$isadmin ? <h4>admin</h4> : ""}
          </Admin>
        </Brand>

        <Receipt $isadmin={$isadmin}>
          <PiReceipt />
          <div className="NumberOfItens" type="button">
            {quantityOfItens}
          </div>
        </Receipt>
      </div>
    </Container>
  )
}

