import { Container, FoodDescription } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { Stepper } from "../../components/Stepper"

import ravanello from "../../assets/imgs/ravanello.png"
import { PiReceipt } from "react-icons/pi"


export function Dish() {
  let price = 25.59
  let localizedPrice = price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  })



  return (
    <Container>
      <Header quantityOfItens={0} />

      <main>
        <FoodDescription>
          <ButtonText />
          <img src={ravanello} alt="Salada Ravanello" className="prato" />
          <div className="description">
            <h1>Salada Ravanello</h1>
            <h3>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </h3>
            <div className="tags">
              <Tag title="Alface" />
              <Tag title="Alface" />
              <Tag title="Alface" />
              <Tag title="Alface" />
              <Tag title="Alface" />
              <Tag title="Alface" />
            </div>
            <div className="options">
              <Stepper quantityOfItems={2} />
              <Button icon={PiReceipt} title={`pedir ∙ R$ ${localizedPrice}`} />
            </div>
          </div>
        </FoodDescription>
      </main>
      <Footer />
    </Container>
  )
}
