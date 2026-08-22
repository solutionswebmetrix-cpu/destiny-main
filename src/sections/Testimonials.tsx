import { Quote } from 'lucide-react'
import Reveal from '../components/Reveal'
import { testimonials } from '../data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container-wide">
        <Reveal>
          <div className="testimonials-heading">
            <span className="eyebrow">Client Testimonials</span>
            <h2 className="section-title">What Our Families Say</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Real stories from real homeowners and investors who trusted Destiny Buildwell with their dreams.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-item" key={testimonial.name}>
                <Quote className="testimonial-quote" size={52} />
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-name">{testimonial.name}</div>
                <div className="testimonial-location">{testimonial.role} | {testimonial.location}</div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
