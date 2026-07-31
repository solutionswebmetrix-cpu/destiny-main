import { PageHero } from './Properties'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, label: 'Visit Us', value: 'A-106, ATS Bouquet, Sector 132, Noida, Uttar Pradesh 201304' },
  { icon: Phone, label: 'Call Us', value: '+91 80 1234 5678', href: 'tel:+918012345678' },
  { icon: Mail, label: 'Email Us', value: 'hello@destinybuildwell.com', href: 'mailto:hello@destinybuildwell.com' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/918012345678' },
  { icon: Clock, label: 'Office Hours', value: 'Mon - Sat: 9:30 AM - 7:00 PM' },
]

export default function Contact() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="Book a consultation, schedule a site visit, or simply say hello - we'd love to hear from you." breadcrumb="Contact" />
      <section className="section">
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 40 }} className="contact-grid">
            <Reveal>
              <div>
                <span className="eyebrow">Reach Out</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', marginBottom: 16 }}>Let's Start a Conversation</h2>
                <p className="muted" style={{ marginBottom: 30, fontSize: '0.96rem' }}>
                  Whether you're looking for your dream home, an investment opportunity, or a commercial space,
                  our team is here to guide you every step of the way.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 30 }}>
                  {contactInfo.map((c) => (
                    <div key={c.label} className="card" style={{ padding: '18px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <div style={{ width: 48, height: 48, borderRadius: '50%', flexShrink: 0, background: 'linear-gradient(135deg, var(--color-primary), var(--color-light-blue))', display: 'grid', placeItems: 'center', color: '#fff' }}>
                        <c.icon size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: 4 }}>{c.label}</div>
                        {c.href ? (
                          <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ fontSize: '0.92rem', color: 'var(--color-dark-text)', fontWeight: 500 }}>{c.value}</a>
                        ) : (
                          <div style={{ fontSize: '0.92rem', color: 'var(--color-dark-text)', fontWeight: 500 }}>{c.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="card" style={{ padding: 0, overflow: 'hidden', height: 280 }}>
                  <iframe
                  title="Destiny Buildwell Location"
                  src="https://www.google.com/maps?q=A-106,+ATS+Bouquet,+Sector+132,+Noida,+Uttar+Pradesh+201304&output=embed&z=17"
                  style={{ width: '100%', height: '100%', border: 0, filter: 'grayscale(0.2) contrast(1.05)' }}
                  loading="lazy"
                />
                </motion.div>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="card" style={{ padding: 36 }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: 8 }}>Book a Consultation</h3>
                <p className="muted" style={{ fontSize: '0.88rem', marginBottom: 24 }}>Fill in your details and our team will reach out within 24 hours.</p>
                <ContactForm variant="tinted" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
