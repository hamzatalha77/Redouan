import { BouncyCardsFeatures } from './components/card'
import { DragCards } from './components/drag'
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
      <DragCards />
    </>
  )
}
