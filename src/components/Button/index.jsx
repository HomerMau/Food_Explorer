import { Container } from './styles';

// eslint-disable-next-line react/prop-types
export function Button({icon: Icon, title, ...rest}) {

  return (
    <Container {...rest}>
      <button type="button">
        {Icon && <Icon size={20} />}
        <h1>{title}</h1>
      </button>
    </Container>
  )
}