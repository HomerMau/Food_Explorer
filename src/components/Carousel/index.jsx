import { Container } from './styles'

import { register } from "swiper/element/bundle"

import { Card } from "../Card"


export function Carousel({card,  ...rest }) {
  register()
  return (
    <Container {...rest}>
        <swiper-container
          slides-per-view="3"
          scrollbar-clickable="true"
          loop="true"
          centeredSlides="true"
        >
          <swiper-slide>{card}</swiper-slide>
          <swiper-slide>{card}</swiper-slide>
          <swiper-slide>{card}</swiper-slide>
          <swiper-slide>{card}</swiper-slide>
        </swiper-container>
    </Container>
  )
}