import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import WhyChooseUs from '../sections/WhyChooseUs'
import Testimonials from '../sections/Testimonials'
import Faq from '../sections/Faq'

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
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Faq />
    </>
  )
}
