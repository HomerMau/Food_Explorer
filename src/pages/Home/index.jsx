import { Container, Rectangle, Marketing  } from './styles'
import { Header } from './../../components/Header/index';


import coloredHamburgues from '../../assets/imgs/colored-Hamburgues.png'

export function Home({ $isadmin = false, ...rest }) {
  return (
    <Container $isadmin={$isadmin} {...rest}>
      <Header quantityOfItens={0} $isadmin={$isadmin} />
<main>
<Marketing >

      <Rectangle>
        <img src={coloredHamburgues} alt="Comidas Deliciosas" />
        <div className="marketing">

        <h2>Sabores inigualáveis</h2>
        <h3>Sinta o cuidado do preparo com ingredientes selecionados.</h3>
        </div>
      </Rectangle>
</Marketing>
</main>
    </Container>
  )
}