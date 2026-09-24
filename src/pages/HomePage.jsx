import usePageTitle from '../hooks/usePageTitle'
import HeroCarousel from '../components/sections/HeroCarousel'
import Facts from '../components/sections/Facts'
import About from '../components/sections/About'
import Products from '../components/sections/Products'
import Services from '../components/sections/Services'
import Features from '../components/sections/Features'
import Quote from '../components/sections/Quote'
import Team from '../components/sections/Team'

export default function HomePage() {
  usePageTitle()

  return (
    <>
      <HeroCarousel />
      <Facts />
      <About />
      <Products />
      <Services />
      <Features />
      <Quote />
      <Team />
    </>
  )
}
