import React from 'react'
import { BouncyCardsFeatures } from './components/card'
import Hero from './components/hero'
import News from './components/news'
import TextParallaxContentExample from './components/textParallaxContent'
import { VelocityText } from './components/velocityText'

export default function HomePage() {
  return (
    <React.Fragment>
      <Hero />
      <TextParallaxContentExample />
      <VelocityText />
      <News />
      <BouncyCardsFeatures />
    </React.Fragment>
  )
}
