import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import imgResidential from '../assets/Residential Construction.jpg'
import imgCommercial from '../assets/Commercial Projects.jpg'
import imgInterior from '../assets/Interior Design.jpg'

const cards = [
  {
    title: 'Residential Projects',
    description: 'We specialize in designing and constructing truly exceptional residential properties. Our focus is on creating inspiring living spaces that reflect modern lifestyles while prioritizing quality and sustainability in every aspect of the project.',
    image: imgResidential,
  },
  {
    title: 'Commercial Projects',
    description: 'In our commercial projects, we bring innovation and excellence to the forefront. From office buildings to retail spaces, we deliver dynamic, functional, and future-ready solutions that cater to the diverse and evolving needs of businesses and communities.',
    image: imgCommercial,
  },
  {
    title: 'Construction Projects',
    description: 'Our meticulous construction management ensures that every project is executed with precision and care. From overseeing timelines to quality control, we handle the entire process to guarantee the successful completion of each development.',
    image: imgInterior,
  },
]

export default function OurServices() {
  return (
    <section id="services" className="section" style={{ paddingTop: 64 }}>
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="eyebrow">Our Services</span>
            <h2 className="section-title">Comprehensive Construction & Design</h2>
            <div className="divider" />
            <p className="section-subtitle">
              From foundation to finishing, we offer end-to-end construction and design services under one roof,
              ensuring consistency, quality and accountability at every stage.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 26 }}>
          {cards.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="card"
                style={{ padding: 34, height: '100%' }}
              >
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: 64, height: 64, borderRadius: 'var(--radius-md)',
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent-gold))',
                    display: 'grid', placeItems: 'center', color: '#fff', marginBottom: 22, overflow: 'hidden',
                  }}
                >
                  <img src={s.image} alt={s.title} style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 8 }} loading="lazy" />
                </motion.div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: 10 }}>{s.title}</h3>
                <p className="muted" style={{ fontSize: '0.88rem', lineHeight: 1.7 }}>{s.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
