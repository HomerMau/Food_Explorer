import { Container } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from './../../components/ButtonText';
import CaretLeft from "../../assets/icons/CaretLeft.svg"


export function NewDishes($isadmin = true) {


  return (
    <Container>
      <Header $isadmin={$isadmin}/>
      <main>

      <ButtonText title="Voltar" icon={CaretLeft} />

      
      </main>
    </Container>
  )
}