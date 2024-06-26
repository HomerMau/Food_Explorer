/* eslint-disable react/prop-types */
import { Container, FoodDescription } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { Stepper } from "../../components/Stepper"
import { SideBar } from "../../components/SideBar"

import ravanello from "../../assets/imgs/ravanello.png"
import CaretLeft from "../../assets/icons/CaretLeft.svg"

import { PiReceipt } from "react-icons/pi"


export function Dish({ $isadmin = false, ...rest }) {
  // Teste de preço
  let price = 25.59
  let localizedPrice = price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  })

  return (
    <Container $isadmin={$isadmin} {...rest}>
      <SideBar $isadmin={$isadmin}>
        <Header quantityOfItens={0} $isadmin={$isadmin} />

        <main>
          <FoodDescription $isadmin={$isadmin}>
            <ButtonText title="Voltar" icon={CaretLeft} />
            <img src={ravanello} alt="Salada Ravanello" className="prato" />
            <div className="description">
              <h1>Salada Ravanello</h1>
              <h3>
                Rabanetes, folhas verdes e molho agridoce salpicados com
                gergelim.
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
                {$isadmin ? "" : <Stepper quantityOfItems={2} />}

                <Button
                  icon={$isadmin ? "" : PiReceipt}
                  title={
                    $isadmin ? "Editar prato" : `pedir ∙ R$ ${localizedPrice}`
                  }
                />
              </div>
            </div>
          </FoodDescription>
        </main>
        <Footer />
      </SideBar>
    </Container>
  )
}
