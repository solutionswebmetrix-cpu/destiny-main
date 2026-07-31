import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

interface ContactFormProps {
  variant?: 'light' | 'tinted'
  subject?: string
}

export default function ContactForm({ variant = 'light', subject }: ContactFormProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const fieldStyle: React.CSSProperties = {
    width: '100%', padding: '13px 16px', borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--color-border)', background: variant === 'tinted' ? '#fff' : 'var(--color-light-grey)',
    fontSize: '0.9rem', color: 'var(--color-dark-text)', outline: 'none', transition: 'border 0.2s ease',
    fontFamily: 'var(--font-body)',
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {subject && <input type="hidden" value={subject} />}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
        <input required placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={fieldStyle} onFocus={(e) => e.currentTarget.style.borderColor = 'var(--color-light-blue)'} onBlur={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'} />
        <input required type="email" placeholder="Email Address *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={fieldStyle} onFocus={(e) => e.currentTarget.style.borderColor = 'var(--color-light-blue)'} onBlur={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
        <input required placeholder="Phone Number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={fieldStyle} onFocus={(e) => e.currentTarget.style.borderColor = 'var(--color-light-blue)'} onBlur={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'} />
        <input placeholder="Interested In" value={subject || ''} readOnly={!!subject} onChange={() => {}} style={fieldStyle} onFocus={(e) => e.currentTarget.style.borderColor = 'var(--color-light-blue)'} onBlur={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'} />
      </div>
      <textarea required placeholder="Your Message *" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ ...fieldStyle, resize: 'vertical' }} onFocus={(e) => e.currentTarget.style.borderColor = 'var(--color-light-blue)'} onBlur={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'} />
      <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', gap: 8 }}>
        {sent ? <><CheckCircle2 size={17} /> Message Sent</> : <><Send size={17} /> Send Inquiry</>}
      </button>
      {sent && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', marginTop: 4 }}>
          Thank you! Our team will get back to you within 24 hours.
        </motion.p>
      )}
    </form>
  )
}
