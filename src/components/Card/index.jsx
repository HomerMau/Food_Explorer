/* eslint-disable react/prop-types */
import { Container } from './styles';

import ravanello from '../../assets/imgs/ravanello.png'
import Heart from "../../assets/icons/Heart.svg"
import { Stepper } from '../Stepper';
import { Button } from './../Button/index';

 
export function Card({price, quantityOfItems, title, ...rest}) {

  console.log(price)

  return (
    <Container {...rest}>
      <div className="favorites">
        <img src={Heart} alt="Favoritos" />
      </div>
      <main>
        <img src={ravanello} alt={ravanello} className="food" />
          <h2>Salada Ravanello &gt;</h2>
        <span>R$ {price}</span>

        <Stepper quantityOfItems={quantityOfItems} />

        <Button title={title} />
      </main>
    </Container>
  )
}