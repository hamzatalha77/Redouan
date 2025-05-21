import { BouncyCardsFeatures } from './components/card'

import Hero from './components/hero'
import News from './components/news'
import TextParallaxContentExample from './components/textParallaxContent'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TextParallaxContentExample />
      <News />
      <BouncyCardsFeatures />
    </>
  )
}
