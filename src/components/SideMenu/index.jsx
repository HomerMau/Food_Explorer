import { Container, Menu, Nav } from './styles'

import { ButtonText } from '../ButtonText'
import { Footer } from '../Footer'

import close from '../../assets/icons/Close.svg'

export function SideMenu() {


  return (
    <Container>
      <Menu>
        <div className="header">
          <ButtonText icon={close} title="Menu" />
        </div>

        <Nav>
          <a href="#">Sair</a>
          <a href="#">Sair</a>
          <a href="#">Sair</a>
          <a href="#">Sair</a>
        </Nav>
      </Menu>

      <Footer />
    </Container>
  )
}