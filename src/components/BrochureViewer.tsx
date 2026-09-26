import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, FileText } from 'lucide-react'
import { companyContact } from '../data'

interface BrochureViewerProps {
  brochure: string
  title: string
}

export default function BrochureViewer({ brochure, title }: BrochureViewerProps) {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false)
  const pdfUrl = new URL(`../assets/Project/${brochure}`, import.meta.url).href
  const isKasaIsles = title === 'Kasa Isles'

  const openBrochure = () => {
    setIsBrochureOpen(true)
  }

  const closeBrochure = () => {
    setIsBrochureOpen(false)
  }

  const download = () => {
    const a = document.createElement('a')
    a.href = pdfUrl
    a.download = brochure
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  return (
    <>
      <div className="brochure-viewer-actions">
        {isKasaIsles && (
          <div className="brochure-contact-block">
            <strong>For enquiries / Sales Contact</strong>
            <a href={companyContact.phoneLink}>{companyContact.phone}</a>
            <a href={companyContact.emailLink}>{companyContact.email}</a>
          </div>
        )}
        <button className="btn btn-primary" onClick={openBrochure} style={{ gap: 8 }}>
          <FileText size={17} /> View Brochure
        </button>
        <button className="btn btn-outline" onClick={download} style={{ gap: 8 }}>
          <Download size={17} /> Download Brochure
        </button>
      </div>

      {createPortal(
        <AnimatePresence>
          {isBrochureOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="brochure-modal-backdrop"
            style={{
              position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.78)',
              backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
            }}
            onClick={closeBrochure}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              className="brochure-modal"
              role="dialog"
              aria-modal="true"
              aria-label={`${title} brochure`}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#111111', border: '1px solid rgba(212,175,55,0.35)', borderRadius: 8, width: '100%', maxWidth: 900,
                height: '90vh', maxHeight: 900, display: 'flex', flexDirection: 'column', overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <div className="brochure-modal-header" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                padding: '14px 18px', borderBottom: '1px solid rgba(212,175,55,0.25)', background: '#111111',
              }}>
                <h3 style={{ fontSize: '1.05rem', margin: 0, color: '#fff' }}>{title} - Brochure</h3>
                {isKasaIsles && (
                  <div className="brochure-contact-block brochure-modal-contact">
                    <strong>For enquiries / Sales Contact</strong>
                    <a href={companyContact.phoneLink}>{companyContact.phone}</a>
                    <a href={companyContact.emailLink}>{companyContact.email}</a>
                  </div>
                )}
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
                  <button onClick={download} style={{ padding: '8px 12px', borderRadius: 6, background: '#D4AF37', color: '#111', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 6 }}><Download size={15} /> Download</button>
                  <button onClick={closeBrochure} style={{ padding: 8, borderRadius: 6, border: '1px solid rgba(212,175,55,0.4)', background: 'transparent', color: '#fff', display: 'grid', placeItems: 'center' }} aria-label="Close"><X size={18} /></button>
                </div>
              </div>
              <div style={{ overflow: 'hidden', padding: 0, background: '#050505', flex: 1 }}>
                <iframe src={pdfUrl} title={`${title} Brochure`} style={{ width: '100%', height: '100%', border: 'none' }} />
              </div>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
      <style>{`
        .brochure-viewer-actions { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
        .brochure-contact-block { display: flex; flex-direction: column; gap: 2px; color: #d0d0d0; font-size: .76rem; line-height: 1.35; }
        .brochure-contact-block strong { color: #D4AF37; font-size: .76rem; }
        .brochure-contact-block a { color: #fff; text-decoration: none; }
        @media (max-width: 640px) {
          .brochure-viewer-actions { align-items: stretch; }
          .brochure-modal-backdrop { padding: 8px !important; }
          .brochure-modal { height: 96dvh !important; max-height: none !important; border-radius: 6px !important; }
          .brochure-modal-header { flex-wrap: wrap; padding: 12px !important; }
          .brochure-modal-contact { order: 3; flex-basis: 100%; }
          .brochure-modal iframe { min-height: 0; }
        }
      `}</style>
    </>
  )
}

// PDF generation and preview removed: using actual PDF files in assets/Project
