import { Container } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "./../../components/ButtonText"
import { Button } from "./../../components/Button/index"

import CaretLeft from "../../assets/icons/CaretLeft.svg"
import { Upload} from "../../assets/icons/Upload.jsx"
import { Input } from "../../components/Input"
import { Textarea } from "./../../components/Textarea"
import { Footer } from "./../../components/Footer/index"

export function NewDishes($isadmin = true) {
  return (
    <Container>
      <Header $isadmin={$isadmin} />
      <main>
        <ButtonText title="Voltar" icon={CaretLeft} />

        <h1>Novo prato</h1>

        <div className="dishImage">
          <span>Imagem do prato</span>
          <Button icon={Upload} title="Selecionar Imagem" />
        </div>

        <div className="name">
          <span>Nome</span>
          <Input type="text" placeholder="Ex.: Salada Ceasar" />
        </div>

        <div className="category">
          <span>Categoria</span>
          <select name="category" id="foodCategory">
            <option value="">Selecione a categoria do prato</option>
            <option value="Refeição">Refeições</option>
            <option value="PratosPrincipais">Pratos principais</option>
            <option value="Sobremesas">Sobremesas</option>
          </select>
        </div>

        <div className="ingredients">
          <span>Ingredientes</span>
          <Input type="text" placeholder="R$ 00,00" />
        </div>

        <div className="ingredients">
          <span>Descrição</span>
          <Textarea
            type="text"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          />
        </div>

        <Button title="Salvar alterações" />
      </main>
      <Footer />
    </Container>
  )
}
