import { Container } from './styles';

export function Button({icon: Icon, title, ...rest}) {

  return(
    <Container {...rest}>
     <button>
      {Icon && <Icon size={20} />}

      {title}     
     </button>
    </Container>
  )
}