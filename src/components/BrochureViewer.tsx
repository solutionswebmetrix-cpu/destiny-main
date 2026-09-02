import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, FileText } from 'lucide-react'

interface BrochureViewerProps {
  brochure: string
  title: string
}

export default function BrochureViewer({ brochure, title }: BrochureViewerProps) {
  const [open, setOpen] = useState(false)

  // Use actual PDF file from src/assets/Project
  const pdfUrl = new URL(`../assets/Project/${brochure}`, import.meta.url).href

  const download = () => {
    const a = document.createElement('a')
    a.href = pdfUrl
    a.download = brochure
    a.target = '_blank'
    a.click()
  }

  return (
    <>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button className="btn btn-primary" onClick={() => setOpen(true)} style={{ gap: 8 }}>
          <FileText size={17} /> View Brochure
        </button>
        <button className="btn btn-outline" onClick={download} style={{ gap: 8 }}>
          <Download size={17} /> Download Brochure
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(31,93,134,0.4)',
              backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
            }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#fff', borderRadius: 'var(--radius-lg)', width: '100%', maxWidth: 820,
                maxHeight: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '16px 22px', borderBottom: '1px solid var(--color-border)', background: 'var(--color-light-grey)',
              }}>
                <h3 style={{ fontSize: '1.05rem', margin: 0 }}>{title} - Brochure</h3>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <button onClick={download} style={{ padding: '8px 14px', borderRadius: 8, background: 'var(--color-primary)', color: '#fff', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 6 }}><Download size={15} /> Download</button>
                  <button onClick={() => setOpen(false)} style={{ padding: 8, borderRadius: 8, border: '1px solid var(--color-border)', display: 'grid', placeItems: 'center' }} aria-label="Close"><X size={18} /></button>
                </div>
              </div>
              <div style={{ overflow: 'auto', padding: 0, background: 'var(--color-light-grey)', flex: 1 }}>
                <iframe src={pdfUrl} title={`${title} Brochure`} style={{ width: '100%', height: '75vh', border: 'none' }} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// PDF generation and preview removed: using actual PDF files in assets/Project
