import { Container, Rectangle, Banner, Cards  } from './styles'
import { Header } from './../../components/Header';
import { Card } from './../../components/Card';
import { Carousel } from '../../components/Carousel';


import coloredHamburgues from '../../assets/imgs/colored-Hamburgues.png'
import { Footer } from '../../components/Footer';



export function Home({ $isadmin = false, ...rest }) {
  let price = 49.97
  let localizedPrice = price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  })
  return (
    <Container $isadmin={$isadmin} {...rest}>
      <Header quantityOfItens={0} $isadmin={$isadmin} />
      <main>
        <Banner>
          <Rectangle>
            <img src={coloredHamburgues} alt="Comidas Deliciosas" />
            <div className="marketing">
              <h2>Sabores inigualáveis</h2>
              <h3>Sinta o cuidado do preparo com ingredientes selecionados.</h3>
            </div>
          </Rectangle>
        </Banner>

        <Cards>
          <h2>Refeições</h2>

          <Carousel
            card={
              <Card
                $isadmin={$isadmin}
                price={localizedPrice}
                quantityOfItems="1"
                title="incluir"
              />
            }
          />
        </Cards>

        <Cards>
          <h2>Pratos principais</h2>

          <Carousel
            card={
              <Card
                $isadmin={$isadmin}
                price={localizedPrice}
                quantityOfItems="1"
                title="incluir"
              />
            }
          />
        </Cards>

        <Cards>
          <h2>Porções</h2>

          <Carousel
            card={
              <Card
                $isadmin={$isadmin}
                price={localizedPrice}
                quantityOfItems="1"
                title="incluir"
              />
            }
          />
        </Cards>
      </main>
      <Footer />
    </Container>
  )
}