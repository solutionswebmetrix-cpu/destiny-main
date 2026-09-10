import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { team } from '../data'

export default function Founder() {
  const founder = team.find((m) => m.role.includes('Founder')) || team[0]

  return (
    <section id="founder" className="section" style={{ background: '#080808', paddingTop: 64, paddingBottom: 64 }}>
      <div className="container-wide">
        <div className="founder-mobile-heading">
          <span className="eyebrow">A MESSAGE FROM THE FOUNDER</span>
          <h2>A Message from the Founder</h2>
        </div>
        <div className="founder-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <Reveal delay={0}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="founder-image"
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

          <Reveal delay={0.1}>
            <div className="founder-copy">
              <div className="founder-heading">
                <span className="eyebrow">A MESSAGE FROM THE FOUNDER</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: 20, color: 'var(--heading)' }}>
                A Message from the Founder
                </h2>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 18, color: '#F5F5F5' }}>
                At Destiny Buildwell, we believe that finding your dream home should not mean compromising on your budget, expectations, or peace of mind.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 18, color: '#F5F5F5' }}>
                When I founded Destiny Buildwell in 2014, my vision was simple — to offer the best homes and real-estate investment solutions across different budgets, while always keeping our customers’ needs and interests first. Whether you are looking for your family home or a smart investment, we strive to help you make the right choice.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 18, color: '#F5F5F5' }}>
                For us, real estate is about more than just building properties. It is about understanding our customers, offering genuine value, and creating a trusted experience.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 18, color: '#F5F5F5' }}>
                Our commitment is to deliver best-in-class quality, services and transparency, while putting our customers first at every step.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 18, color: '#8a6a12', fontWeight: 700 }}>
                Your budget matters. Your needs matter. Your future matters.
              </p>

              <div className="founder-signature" style={{ marginTop: 24, paddingTop: 18, borderTop: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--heading)', marginBottom: 4 }}>— Aditya Bhardwaj</div>
                <div style={{ fontSize: '0.9rem', color: '#EAEAEA', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Founder &amp; Managing Director</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .founder-mobile-heading {
          display: none;
        }

        @media (max-width: 767px) {
          #founder > .container-wide {
            padding-left: 20px;
            padding-right: 20px;
            overflow-x: hidden;
          }

          .founder-mobile-heading {
            display: block;
            margin-bottom: 28px;
            text-align: center;
          }

          .founder-mobile-heading .eyebrow {
            font-size: clamp(1.125rem, 5vw, 1.375rem);
            color: #D4AF37;
          }

          .founder-mobile-heading h2 {
            max-width: 100%;
            margin-top: 10px;
            color: #D4AF37;
            font-size: clamp(1.75rem, 8vw, 2.25rem);
            line-height: 1.15;
            overflow-wrap: anywhere;
          }

          .founder-layout {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            align-items: stretch !important;
          }

          .founder-image {
            width: 100%;
            max-width: 320px;
            margin: 0 auto;
          }

          .founder-copy {
            width: 100%;
            min-width: 0;
            display: flex;
            flex-direction: column;
          }

          .founder-copy .founder-heading {
            display: none;
          }

          .founder-copy > p {
            order: 2;
            width: 100%;
          }

          .founder-copy .founder-signature {
            order: 1;
            margin-top: 0 !important;
            margin-bottom: 2px;
          }
        }
      `}</style>
    </section>
  )
}
