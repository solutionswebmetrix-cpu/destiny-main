import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../sections/Hero'
import About from '../sections/About'
import FeaturedProperties from '../sections/FeaturedProperties'
import Services from '../sections/Services'
import WhyChooseUs from '../sections/WhyChooseUs'
import Projects from '../sections/Projects'
import Amenities from '../sections/Amenities'
import Leadership from '../sections/Leadership'
import Gallery from '../sections/Gallery'
import Testimonials from '../sections/Testimonials'
import Blogs from '../sections/Blogs'
import Faq from '../sections/Faq'
import Contact from '../sections/Contact'

export default function Home() {
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''))
      setTimeout(() => el?.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [hash])
  return (
    <>
      <Hero />
      <About />
      <FeaturedProperties />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Amenities />
      <Leadership />
      <Gallery />
      <Testimonials />
      <Blogs />
      <Faq />
      <Contact />
    </>
  )
}
