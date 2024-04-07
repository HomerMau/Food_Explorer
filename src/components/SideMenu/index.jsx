import { Container, Header, Menu, Nav } from './styles'

import { ButtonText } from '../ButtonText'
import { Input } from '../Input'
import { Footer } from '../Footer'


import close from '../../assets/icons/Close.svg'
import search from "../../assets/icons/Search.svg"

export function SideMenu($isadmin, ...rest) {


  return (
    <Container {...rest}>
      <Header>
        <ButtonText icon={close} title="Menu" />
      </Header>
      <Menu>
        <main>
          <Input
            placeholder="Busque por pratos ou ingredientes"
            icon={search}
          />

          <Nav $isadmin={$isadmin}>


            
            {console.log($isadmin)}
            <a href="#">Sair</a>
            
          </Nav>
        </main>
      </Menu>

      <Footer />
    </Container>
  )
}