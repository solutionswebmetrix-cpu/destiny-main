import CompanyStory from '../sections/CompanyStory'
import Founder from '../sections/Founder'
import { ExperienceSection } from '../sections/CompanyStory'
import { PageHero } from './Properties'

export default function AboutUs() {
  return (
    <>
      <PageHero title="About Destiny Buildwell" subtitle="16+ Years of Trust in Real Estate. Trusted guidance, transparency, and customer-focused service across the NCR." breadcrumb="About Us" />
      <Founder />
      <CompanyStory />
      <ExperienceSection />
    </>
  )
}
