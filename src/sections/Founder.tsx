import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { team } from '../data'

export default function Founder() {
  // Get founder image from team data
  const founder = team.find(m => m.role.includes('Founder')) || team[0]

  return (
    <section id="founder" className="section" style={{ background: '#fff', paddingTop: 72, paddingBottom: 72 }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          {/* Left: Founder Image */}
          <Reveal delay={0}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <img
                src={founder.image}
                alt={founder.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                }}
                loading="lazy"
              />
            </motion.div>
          </Reveal>

          {/* Right: Content */}
          <Reveal delay={0.1}>
            <div>
              <span className="eyebrow">Founder's Message</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: 20, color: 'var(--heading)' }}>
                {founder.name}
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 18, color: 'var(--text)' }}>
                At Destiny Buildwell, we believe that every home represents more than just a structure—it embodies dreams, aspirations, and the foundation of a family's future. Since our inception, we've been committed to building not just properties, but lasting legacies.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 18, color: 'var(--text)' }}>
                Our philosophy is simple: transparency, quality, and unwavering commitment to our clients. We understand that choosing a property or investing in a project is one of life's most significant decisions. That's why every project we undertake is executed with meticulous attention to detail, using premium materials, and guided by a team of experienced professionals.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 18, color: 'var(--text)' }}>
                We don't just complete construction timelines—we deliver peace of mind. From the moment you trust us with your investment, you become part of the Destiny Buildwell family. Your satisfaction, your trust, and your long-term success are the true measures of our achievement.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text)' }}>
                Together, let's build not just homes, but destinies.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          #founder > .container-wide {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
