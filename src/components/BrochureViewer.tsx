import { type FormEvent, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, FileText, CheckCircle2, ZoomIn, ZoomOut } from 'lucide-react'
import {
  GlobalWorkerOptions,
  getDocument,
  type PDFDocumentProxy,
  type RenderTask,
} from 'pdfjs-dist'
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import { companyContact } from '../data'

GlobalWorkerOptions.workerSrc = pdfWorkerUrl

interface BrochureViewerProps {
  brochure: string
  title: string
  location: string
}

interface BrochureLead {
  name: string
  phone: string
  email: string
  property: string
  location: string
  action: 'view_brochure'
  submittedAt: string
}

const LEAD_STORAGE_KEY = 'destiny-brochure-leads'

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

const isValidIndianMobile = (value: string) => {
  const mobile = value.trim().replace(/[\s()-]/g, '')
  const nationalNumber = mobile.startsWith('+91')
    ? mobile.slice(3)
    : mobile.startsWith('91') && mobile.length === 12
      ? mobile.slice(2)
      : mobile

  return /^[6-9]\d{9}$/.test(nationalNumber)
}

function BrochurePdfViewer({ url, title, onClose }: { url: string; title: string; onClose: () => void }) {
  const [document, setDocument] = useState<PDFDocumentProxy | null>(null)
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const pageElements = useRef(new Map<number, HTMLDivElement>())
  const canvases = useRef(new Map<number, HTMLCanvasElement>())

  useEffect(() => {
    let cancelled = false
    const loadingTask = getDocument(url)

    loadingTask.promise.then((loadedDocument) => {
      if (cancelled) {
        void loadedDocument.destroy()
        return
      }
      setDocument(loadedDocument)
      setPageCount(loadedDocument.numPages)
      setLoading(false)
    }).catch((loadError: unknown) => {
      if (cancelled) return
      console.error('Unable to load brochure PDF', loadError)
      setError('The brochure could not be loaded. Please close this window and try again.')
      setLoading(false)
    })

    return () => {
      cancelled = true
      void loadingTask.destroy()
    }
  }, [url])

  useEffect(() => {
    if (!document) return

    let cancelled = false
    const renderTasks: RenderTask[] = []

    const renderPages = async () => {
      try {
        for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber += 1) {
          const page = await document.getPage(pageNumber)
          if (cancelled) return

          const canvas = canvases.current.get(pageNumber)
          const context = canvas?.getContext('2d')
          if (!canvas || !context) {
            throw new Error(`Canvas unavailable for brochure page ${pageNumber}`)
          }

          const viewport = page.getViewport({ scale: zoom })
          const outputScale = window.devicePixelRatio || 1
          canvas.width = Math.floor(viewport.width * outputScale)
          canvas.height = Math.floor(viewport.height * outputScale)
          canvas.style.width = `${viewport.width}px`
          canvas.style.height = `${viewport.height}px`
          canvas.setAttribute('aria-label', `Brochure page ${pageNumber}`)
          context.setTransform(outputScale, 0, 0, outputScale, 0, 0)

          const task = page.render({ canvasContext: context, viewport })
          renderTasks.push(task)
          await task.promise
          if (cancelled) return
        }
      } catch (renderError: unknown) {
        if (cancelled) return
        console.error('Unable to render brochure PDF', renderError)
        setError('A brochure page could not be displayed. Please close this window and try again.')
      }
    }

    void renderPages()
    return () => {
      cancelled = true
      renderTasks.forEach((task) => task.cancel())
    }
  }, [document, zoom])

  useEffect(() => {
    const preventPdfShortcuts = (event: KeyboardEvent) => {
      const modifier = event.ctrlKey || event.metaKey
      if (modifier && ['s', 'p', 'o', 'j'].includes(event.key.toLowerCase())) {
        event.preventDefault()
        event.stopPropagation()
      }
      if (modifier && event.shiftKey && event.key.toLowerCase() === 's') {
        event.preventDefault()
        event.stopPropagation()
      }
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', preventPdfShortcuts, true)
    return () => window.removeEventListener('keydown', preventPdfShortcuts, true)
  }, [onClose])

  const updateCurrentPage = () => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const containerTop = scrollContainer.getBoundingClientRect().top
    let nearestPage = 1
    let nearestDistance = Number.POSITIVE_INFINITY

    pageElements.current.forEach((element, pageNumber) => {
      const distance = Math.abs(element.getBoundingClientRect().top - containerTop - 20)
      if (distance < nearestDistance) {
        nearestPage = pageNumber
        nearestDistance = distance
      }
    })

    setCurrentPage(nearestPage)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="brochure-viewer-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} brochure viewer`}
      onContextMenu={(event) => event.preventDefault()}
      style={{
        position: 'fixed', inset: 0, zIndex: 2100, background: '#080808',
        display: 'flex', flexDirection: 'column', color: '#fff',
      }}
    >
      <header className="brochure-viewer-toolbar">
        <h2>{title} — Brochure</h2>
        <div className="brochure-viewer-controls">
          <span className="brochure-page-indicator" aria-live="polite">
            Page {pageCount ? currentPage : '—'} / {pageCount || '—'}
          </span>
          <button type="button" onClick={() => setZoom((current) => Math.max(0.6, Number((current - 0.2).toFixed(1))))} disabled={zoom <= 0.6} aria-label="Zoom out">
            <ZoomOut size={18} />
          </button>
          <span className="brochure-zoom-indicator">{Math.round(zoom * 100)}%</span>
          <button type="button" onClick={() => setZoom((current) => Math.min(2.4, Number((current + 0.2).toFixed(1))))} disabled={zoom >= 2.4} aria-label="Zoom in">
            <ZoomIn size={18} />
          </button>
          <button type="button" onClick={onClose} aria-label="Close brochure viewer" className="brochure-viewer-close">
            <X size={20} />
          </button>
        </div>
      </header>

      <div ref={scrollRef} className="brochure-viewer-scroll" onScroll={updateCurrentPage}>
        {loading && <p className="brochure-viewer-message">Loading brochure…</p>}
        {error && <p className="brochure-viewer-message brochure-viewer-error" role="alert">{error}</p>}
        {!loading && !error && (
          <div className="brochure-pages">
            {Array.from({ length: pageCount }, (_, index) => {
              const pageNumber = index + 1
              return (
                <div
                  className="brochure-page"
                  key={pageNumber}
                  ref={(element) => {
                    if (element) pageElements.current.set(pageNumber, element)
                    else pageElements.current.delete(pageNumber)
                  }}
                >
                  <canvas
                    ref={(element) => {
                      if (element) canvases.current.set(pageNumber, element)
                      else canvases.current.delete(pageNumber)
                    }}
                  />
                </div>
              )
            })}
          </div>
        )}
      </div>

      <style>{`
        .brochure-viewer-toolbar { min-height: 66px; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 10px 18px; border-bottom: 1px solid rgba(212,175,55,0.35); background: #101010; }
        .brochure-viewer-toolbar h2 { margin: 0; color: #fff; font-size: 1rem; font-family: var(--font-heading); }
        .brochure-viewer-controls { display: flex; align-items: center; gap: 8px; }
        .brochure-viewer-controls button { width: 38px; height: 38px; display: grid; place-items: center; border-radius: 8px; border: 1px solid rgba(212,175,55,0.42); background: #161616; color: #D4AF37; cursor: pointer; }
        .brochure-viewer-controls button:disabled { opacity: .4; cursor: not-allowed; }
        .brochure-viewer-controls .brochure-viewer-close { margin-left: 8px; color: #fff; }
        .brochure-page-indicator, .brochure-zoom-indicator { color: #e8e1ce; font-size: .82rem; white-space: nowrap; }
        .brochure-viewer-scroll { flex: 1; overflow: auto; overscroll-behavior: contain; padding: 24px 12px; }
        .brochure-pages { display: flex; flex-direction: column; align-items: center; gap: 20px; width: max-content; min-width: 100%; }
        .brochure-page { max-width: none; overflow: hidden; background: #fff; box-shadow: 0 8px 34px rgba(0,0,0,.55); line-height: 0; }
        .brochure-page canvas { display: block; }
        .brochure-viewer-message { margin: 48px auto; text-align: center; color: #e8e1ce; line-height: 1.6; }
        .brochure-viewer-error { color: #ffaaaa; }
        @media (max-width: 640px) {
          .brochure-viewer-toolbar { min-height: 58px; padding: 8px 10px; gap: 8px; }
          .brochure-viewer-toolbar h2 { max-width: 28vw; font-size: .85rem; }
          .brochure-viewer-controls { gap: 5px; }
          .brochure-viewer-controls button { width: 34px; height: 34px; }
          .brochure-viewer-controls .brochure-viewer-close { margin-left: 2px; }
          .brochure-page-indicator, .brochure-zoom-indicator { font-size: .72rem; }
          .brochure-viewer-scroll { padding: 12px 8px; }
        }
      `}</style>
    </motion.div>
  )
}

export default function BrochureViewer({ brochure, title, location }: BrochureViewerProps) {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false)
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '' })
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string; submit?: string }>({})
  const closePdfViewer = () => setIsPdfViewerOpen(false)

  if (!brochure) return null

  const pdfUrl = new URL(`../assets/Project/${brochure}`, import.meta.url).href
  const isKasaIsles = title === 'Kasa Isles'

  const closeLeadForm = () => {
    setIsLeadFormOpen(false)
    setErrors({})
    setForm({ name: '', phone: '', email: '' })
  }

  const saveLead = (): boolean => {
    const lead: BrochureLead = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      property: title,
      location,
      action: 'view_brochure',
      submittedAt: new Date().toISOString(),
    }

    try {
      const storedLeads: unknown = JSON.parse(localStorage.getItem(LEAD_STORAGE_KEY) ?? '[]')
      if (!Array.isArray(storedLeads)) {
        throw new Error('Stored brochure leads are not in the expected format')
      }
      localStorage.setItem(LEAD_STORAGE_KEY, JSON.stringify([...storedLeads, lead]))
      return true
    } catch (error) {
      console.error('Unable to save brochure lead', error)
      setErrors((current) => ({
        ...current,
        submit: 'We could not save your details. Please try again.',
      }))
      return false
    }
  }

  const validate = () => {
    const nextErrors: typeof errors = {}
    const name = form.name.trim()
    const phone = form.phone.trim()
    const email = form.email.trim()

    if (!name) {
      nextErrors.name = 'Please enter your name'
    } else if (name.length < 2) {
      nextErrors.name = 'Please enter at least 2 characters'
    }

    if (!phone) {
      nextErrors.phone = 'Please enter your mobile number'
    } else if (!isValidIndianMobile(phone)) {
      nextErrors.phone = 'Please enter a valid 10-digit mobile number'
    }

    if (email && !isValidEmail(email)) {
      nextErrors.email = 'Please enter a valid email address'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate() || !saveLead()) return

    closeLeadForm()
    setIsPdfViewerOpen(true)
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
        <button className="btn btn-primary" onClick={() => setIsLeadFormOpen(true)} style={{ gap: 8 }}>
          <FileText size={17} /> View Brochure
        </button>
      </div>

      {createPortal(
        <AnimatePresence>
          {isLeadFormOpen && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="brochure-modal-backdrop"
              style={{
                position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.78)',
                backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
              }}
              onClick={closeLeadForm}
            >
              <motion.div
                initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 20 }}
                transition={{ duration: 0.25 }}
                className="brochure-lead-modal"
                role="dialog"
                aria-modal="true"
                aria-label={`${title} brochure lead form`}
                onClick={(event) => event.stopPropagation()}
                style={{
                  width: '100%', maxWidth: 520, borderRadius: 18, background: '#0d0d0d',
                  border: '1px solid rgba(212,175,55,0.55)', boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
                  overflow: 'hidden',
                }}
              >
                <div className="brochure-lead-header" style={{
                  borderBottom: '1px solid rgba(212,175,55,0.25)', background: 'linear-gradient(180deg, rgba(212,175,55,0.08), rgba(15,15,15,0.3))',
                  padding: '18px 22px 16px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                    <div>
                      <p style={{ margin: 0, color: '#d4af37', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700 }}>Access</p>
                      <h3 style={{ margin: '6px 0 0', color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2rem)', lineHeight: 1.2 }}>Get Brochure Access</h3>
                    </div>
                    <button onClick={closeLeadForm} aria-label="Close brochure form" style={{ width: 38, height: 38, borderRadius: 10, background: 'transparent', border: '1px solid rgba(212,175,55,0.35)', color: '#fff', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
                      <X size={18} />
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="brochure-lead-form" style={{ padding: '24px 22px 18px', display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <p style={{ margin: 0, color: '#d9d9d9', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    Enter your details to view the complete property brochure.
                  </p>

                  <div className="brochure-form-field">
                    <label htmlFor="brochure-name">Full Name *</label>
                    <input id="brochure-name" value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} placeholder="Full Name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'brochure-name-error' : undefined} />
                    {errors.name && <span id="brochure-name-error">{errors.name}</span>}
                  </div>

                  <div className="brochure-form-field">
                    <label htmlFor="brochure-phone">Mobile Number *</label>
                    <input id="brochure-phone" value={form.phone} onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))} placeholder="Mobile Number" inputMode="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'brochure-phone-error' : undefined} />
                    {errors.phone && <span id="brochure-phone-error">{errors.phone}</span>}
                  </div>

                  <div className="brochure-form-field">
                    <label htmlFor="brochure-email">Email Address</label>
                    <input id="brochure-email" type="email" value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} placeholder="Email Address" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'brochure-email-error' : undefined} />
                    {errors.email && <span id="brochure-email-error">{errors.email}</span>}
                  </div>

                  {errors.submit && <p role="alert" className="brochure-submit-error">{errors.submit}</p>}
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', gap: 8 }}>
                    <CheckCircle2 size={17} /> Get Brochure
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
          {isPdfViewerOpen && (
            <BrochurePdfViewer url={pdfUrl} title={title} onClose={closePdfViewer} />
          )}
        </AnimatePresence>,
        document.body,
      )}

      <style>{`
        .brochure-viewer-actions { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
        .brochure-contact-block { display: flex; flex-direction: column; gap: 2px; color: #d0d0d0; font-size: .76rem; line-height: 1.35; }
        .brochure-contact-block strong { color: #D4AF37; font-size: .76rem; }
        .brochure-contact-block a { color: #fff; text-decoration: none; }
        .brochure-form-field { display: flex; flex-direction: column; gap: 8px; }
        .brochure-form-field label { color: #f2f2f2; font-size: 0.84rem; font-weight: 600; }
        .brochure-form-field input { width: 100%; border: 1px solid rgba(212,175,55,0.35); background: rgba(255,255,255,0.02); color: #fff; border-radius: 12px; padding: 13px 14px; font-size: 0.96rem; outline: none; transition: border 0.2s ease, box-shadow 0.2s ease; }
        .brochure-form-field input::placeholder { color: rgba(255,255,255,0.45); }
        .brochure-form-field input:focus { border-color: rgba(212,175,55,0.9); box-shadow: 0 0 0 3px rgba(212,175,55,0.16); }
        .brochure-form-field span, .brochure-submit-error { color: #ff9d9d; font-size: 0.8rem; }
        .brochure-submit-error { margin: 0; }
        @media (max-width: 640px) {
          .brochure-viewer-actions { align-items: stretch; }
          .brochure-modal-backdrop { padding: 8px !important; }
          .brochure-lead-modal { max-height: 96dvh; overflow-y: auto !important; border-radius: 12px !important; }
          .brochure-lead-header { padding: 14px 16px 12px !important; }
          .brochure-lead-form { padding: 18px 16px 16px !important; }
        }
      `}</style>
    </>
  )
}
