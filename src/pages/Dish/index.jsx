import { Container, FoodDescription } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"

import ravanello from "../../assets/imgs/ravanello.png"

export function Dish() {
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
            <Button title="Editar prato" />
          </div>
        </FoodDescription>
      </main>
      <Footer />
    </Container>
  )
}
