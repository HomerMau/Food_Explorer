import { Container, Rectangle, Marketing, Cards, Scroll  } from './styles'
import { Header } from './../../components/Header/index';
import { Card } from './../../components/Card/index';


import coloredHamburgues from '../../assets/imgs/colored-Hamburgues.png'



export function Home({ $isadmin = false, ...rest }) {
  let price = 49.97
  let localizedPrice = price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  })
  return (
    <Container $isadmin={$isadmin} {...rest}>
      <Header quantityOfItens={0} $isadmin={$isadmin} />
      <main>
        <Marketing>
          <Rectangle>
            <img src={coloredHamburgues} alt="Comidas Deliciosas" />
            <div className="marketing">
              <h2>Sabores inigualáveis</h2>
              <h3>Sinta o cuidado do preparo com ingredientes selecionados.</h3>
            </div>
          </Rectangle>
        </Marketing>

        <Cards>
          <h2>Refeições</h2>

          <Scroll>
            <Card price={localizedPrice} quantityOfItems="1" title="incluir" />
            <Card price={localizedPrice} quantityOfItems="1" title="incluir" />
            <Card price={localizedPrice} quantityOfItems="1" title="incluir" />
          </Scroll>
        </Cards>

        <Cards>
          <h2>Pratos principais</h2>

          <Scroll>
            <Card price={localizedPrice} quantityOfItems="1" title="incluir" />
            <Card price={localizedPrice} quantityOfItems="1" title="incluir" />
            <Card price={localizedPrice} quantityOfItems="1" title="incluir" />
          </Scroll>
        </Cards>

        <Cards>
          <h2>Porções</h2>

          <Scroll>
            <Card price={localizedPrice} quantityOfItems="1" title="incluir" />
            <Card price={localizedPrice} quantityOfItems="1" title="incluir" />
            <Card price={localizedPrice} quantityOfItems="1" title="incluir" />
          </Scroll>
        </Cards>
      </main>
    </Container>
  )
}