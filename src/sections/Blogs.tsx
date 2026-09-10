import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, User } from 'lucide-react'
import Reveal from '../components/Reveal'
import { blogPosts } from '../data'
import reraGuide from '../assets/latest-blog/rera-guide.jpg'
import villaVsApartment from '../assets/latest-blog/villa-vs-apartment.jpg'
import constructionQuality from '../assets/latest-blog/construction-quality.jpg'
import interiorDesignTrends from '../assets/latest-blog/interior-design-trends.jpg'

const blogImageMap: Record<string, string> = {
  'rera-buying-guide': reraGuide,
  'villa-vs-apartment': villaVsApartment,
  'construction-quality': constructionQuality,
  'interior-trends-2025': interiorDesignTrends,
}

export default function Blogs() {
  return (
    <section id="blogs" className="section section-alt">
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="eyebrow">Latest Blogs</span>
            <h2 className="section-title">Insights & Resources</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Guides, trends and expert advice to help you make informed real estate decisions.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 28 }}>
          {blogPosts.map((b, i) => (
            <Reveal key={b.id} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="card"
                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <Link to={`/#blogs`} style={{ display: 'block', overflow: 'hidden', position: 'relative' }}>
                  <motion.img
                    src={blogImageMap[b.id] ?? b.image}
                    alt={b.title}
                    style={{ width: '100%', height: 250, objectFit: 'cover', display: 'block', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                  />
                  <div style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(255,255,255,0.95)', color: 'var(--color-primary)', padding: '5px 14px', borderRadius: 999, fontSize: '0.72rem', fontWeight: 600 }}>
                    {b.category}
                  </div>
                </Link>
                <div style={{ padding: '22px 22px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', gap: 16, fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 12 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><CalendarDays size={14} /> {b.date}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><User size={14} /> {b.author}</span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: 10, lineHeight: 1.3 }}>{b.title}</h3>
                  <p className="muted" style={{ fontSize: '0.86rem', marginBottom: 18, flex: 1, lineHeight: 1.7 }}>{b.excerpt}</p>
                  <Link to={`/#blogs`} className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '9px 18px', fontSize: '0.84rem', gap: 6 }}>
                    Read More <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
