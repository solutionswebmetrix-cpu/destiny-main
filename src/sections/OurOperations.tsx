import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { services } from '../data'

const operationServices = services.slice(0, 4)

export default function OurOperations() {
  return (
    <section id="operations" className="section operations-section">
      <div className="container-wide">
        <Reveal>
          <div className="operations-heading">
            <span className="eyebrow">Our Operations</span>
            <h2 className="section-title">Our Operations</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Focused real estate services designed to support confident decisions, quality spaces, and long-term value.
            </p>
          </div>
        </Reveal>

        <div className="operations-grid">
          {operationServices.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.07}>
              <motion.article whileHover={{ y: -7 }} className="operation-card">
                <div className="operation-icon"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .operations-section { background: #151515; color: #f5f3ed; }
        .operations-heading { text-align: center; margin-bottom: 48px; }
        .operations-section .section-title { color: #f5f3ed; }
        .operations-section .section-subtitle { color: rgba(245,243,237,.78); }
        .operations-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
        .operation-card { height: 100%; padding: 28px 24px; background: #0b0b0b; border: 1px solid rgba(212,175,55,.3); }
        .operation-icon { display: grid; place-items: center; width: 52px; height: 52px; margin-bottom: 22px; color: #d4af37; border: 1px solid rgba(212,175,55,.5); }
        .operation-card h3 { margin-bottom: 12px; color: #f5f3ed; font-size: 1.1rem; }
        .operation-card p { color: rgba(245,243,237,.76); font-size: .88rem; line-height: 1.7; }
        @media (max-width: 1024px) { .operations-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 560px) { .operations-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
