/* eslint-disable react/prop-types */
import { Container } from "./styles"

import ravanello from "../../assets/imgs/ravanello.png"
import Heart from "../../assets/icons/Heart.svg"
import Pencil from "../../assets/icons/Pencil.svg"
import { Stepper } from "../Stepper"
import { Button } from "./../Button/index"

export function Card({ $isadmin, price, quantityOfItems, title, ...rest }) {
  console.log(price)

  return (
    <Container $isadmin={$isadmin} {...rest}>
      <div className="favorites">
        {$isadmin ? (
          <button>
          <img src={Pencil} alt="Editar o prato" />
          </button>
        ) : (
          <button>
          <img src={Heart} alt="Favoritos" />
          </button>
        )}
      </div>
      <main>
        <img src={ravanello} alt={ravanello} className="food" />
        <h2>Salada Ravanello &gt;</h2>
        <span>R$ {price}</span>

        <div className="buttons">
          <Stepper quantityOfItems={quantityOfItems} />

          <Button title={title} />
        </div>
      </main>
    </Container>
  )
}
