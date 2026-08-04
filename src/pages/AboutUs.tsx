import AboutSection from '../sections/About'
import { PageHero } from './Properties'
import adityaImage from '../assets/id card/Director.jpeg'
import nikhilImage from '../assets/id card/nikhil.jpeg'
import amanImage from '../assets/id card/Aman.jpeg'
import varunImage from '../assets/id card/Varun.jpeg'
import vinayImage from '../assets/id card/Vinay.jpeg'
import ankitImage from '../assets/id card/Ankit.jpeg'
import digvijayImage from '../assets/id card/DigVijay.jpeg'

const bijayImage = ''
const sumitImage = ''

const leadershipTeam = [
  { name: 'Aditya Bhardwaj', role: 'Founder & CEO', image: adityaImage },
  { name: 'Bijay Agarwal', role: 'Legal Associate & Legal Partner', image: bijayImage },
  { name: 'Nikhil Thakrani', role: 'Sales Head & Manager', image: nikhilImage },
]

const salesExecutives = [
  { name: 'Aman Panday', role: 'Sales Executive', image: amanImage },
  { name: 'Varun Panday', role: 'Sales Executive', image: varunImage },
  { name: 'Sumit Yadav', role: 'Sales Executive', image: sumitImage },
  { name: 'Vinay Yadav', role: 'Sales Executive', image: vinayImage },
  { name: 'Ankit Singh', role: 'Sales Executive', image: ankitImage },
  { name: 'Digvijay Singh', role: 'Sales Executive', image: digvijayImage },
]

function TeamGrid({ title, members }: { title: string; members: Array<{ name: string; role: string; image: string }> }) {
  return (
    <div className="card" style={{ padding: 36, marginBottom: 24 }}>
      <h3 style={{ fontSize: '1.3rem', marginBottom: 24 }}>{title}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
        {members.map((member) => (
          <div key={member.name} style={{ textAlign: 'center' }}>
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 'var(--radius-lg)', marginBottom: 14, boxShadow: 'var(--shadow-md)' }}
                loading="lazy"
              />
            ) : (
              <div style={{ width: '100%', height: 240, borderRadius: 'var(--radius-lg)', marginBottom: 14, boxShadow: 'var(--shadow-md)', background: 'var(--color-light-grey)', display: 'grid', placeItems: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Image unavailable
              </div>
            )}
            <h4 style={{ fontSize: '1.05rem', marginBottom: 6 }}>{member.name}</h4>
            <p className="muted" style={{ fontSize: '0.9rem' }}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AboutUs() {
  return (
    <>
      <PageHero title="About Us" subtitle="Discover the people, values, and leadership behind Destiny Buildwell." breadcrumb="About Us" />
      <AboutSection />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <div className="card" style={{ padding: 36, marginBottom: 24 }}>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', marginBottom: 8 }}>Our Team</h2>
            <p className="muted" style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              A dedicated team of professionals combining experience, integrity, and client-first service.
            </p>
          </div>
          <TeamGrid title="Leadership Team" members={leadershipTeam} />
          <TeamGrid title="Sales Executives" members={salesExecutives} />
        </div>
      </section>
    </>
  )
}
