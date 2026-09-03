import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../sections/Hero'
import Founder from '../sections/Founder'
import CompanyStory from '../sections/CompanyStory'
import OurPresence from '../sections/OurPresence'
import ResidentialProjects from '../sections/ResidentialProjects'
import CommercialProjects from '../sections/CommercialProjects'
import WhyChooseUs from '../sections/WhyChooseUs'
import Services from '../sections/Services'
import Testimonials from '../sections/Testimonials'
import Partners from '../sections/Partners'

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
      <Founder />
      <CompanyStory />
      <OurPresence />
      <ResidentialProjects />
      <CommercialProjects />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Partners />
    </>
  )
}
