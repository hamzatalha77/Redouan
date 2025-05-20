import { BouncyCardsFeatures } from './components/card'
import Footer from './components/Footer'
import Hero from './components/hero'
import Navbar from './components/navbar'
import News from './components/news'
import TextParallaxContentExample from './components/textParallaxContent'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TextParallaxContentExample />
      <News />
      <BouncyCardsFeatures />
      <Footer />
    </>
  )
}
