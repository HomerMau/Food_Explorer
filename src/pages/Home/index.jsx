import { Container } from './styles'
import { Header } from './../../components/Header/index';

export function Home({ $isadmin = false, ...rest }) {
  return (
 <Container $isadmin={$isadmin} {...rest}>
  
        <Header quantityOfItens={0} $isadmin={$isadmin} />

        
 </Container>
  )
}