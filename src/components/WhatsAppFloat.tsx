import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/918012345678"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 900,
        width: 56, height: 56, borderRadius: '50%',
        background: 'var(--color-primary)', color: '#fff',
        display: 'grid', placeItems: 'center',
        boxShadow: '0 8px 24px rgba(31,93,134,0.35)',
      }}
    >
      <MessageCircle size={26} />
      <motion.span
        style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid var(--color-light-blue)' }}
        animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.a>
  )
}
