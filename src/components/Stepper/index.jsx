import { Container } from './styles';

import minus from '../../assets/icons/Minus.svg';
import plus from '../../assets/icons/Plus.svg';

export function Stepper({quantityOfItems, ...rest}) {

  return (
    <Container {...rest}>
      <img src={minus} alt="Botão de menos" className="minusButton" />
      <h1>0{quantityOfItems}</h1>
      <img src={plus} alt="Botão de menos" className="plusButton" />
    </Container>
  )
}