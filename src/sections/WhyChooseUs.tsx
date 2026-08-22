import Reveal from '../components/Reveal'
import { whyChooseUs } from '../data'

export default function WhyChooseUs() {
  return (
    <section id="why" className="section why-section">
      <div className="container-wide">
        <Reveal>
          <h2 className="section-title why-title">Why Choose Us</h2>
        </Reveal>

        <div className="why-grid">
          {whyChooseUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.07}>
              <div className="why-item">
                <div className="why-icon"><w.icon size={22} /></div>
                <h3>{w.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
