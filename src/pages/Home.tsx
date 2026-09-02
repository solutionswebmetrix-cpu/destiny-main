import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../sections/Hero'
<<<<<<< HEAD
import Founder from '../sections/Founder'
import OurPresence from '../sections/OurPresence'
import ResidentialProjects from '../sections/ResidentialProjects'
import CommercialProjects from '../sections/CommercialProjects'
import WhyChooseUs from '../sections/WhyChooseUs'
import Services from '../sections/Services'
import Testimonials from '../sections/Testimonials'
import Partners from '../sections/Partners'
=======
import Services from '../sections/Services'
import WhyChooseUs from '../sections/WhyChooseUs'
import Testimonials from '../sections/Testimonials'
import Faq from '../sections/Faq'
>>>>>>> 8a1f9eb9068189e8121be57b9b0b6f274e1ce980

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
<<<<<<< HEAD
      <Founder />
      <OurPresence />
      <ResidentialProjects />
      <CommercialProjects />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Partners />
=======
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Faq />
>>>>>>> 8a1f9eb9068189e8121be57b9b0b6f274e1ce980
    </>
  )
}
