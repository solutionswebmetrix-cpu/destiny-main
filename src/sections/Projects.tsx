import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { projects, type Project } from '../data'

const categories: ('All' | Project['category'])[] = ['All', 'Under Construction', 'Ready to Move', 'Status not specified']

export default function Projects() {
  const [active, setActive] = useState<'All' | Project['category']>('All')
  const list = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="section">
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span className="eyebrow">Our Projects</span>
            <h2 className="section-title">Building Landmarks Across Noida, Greater Noida, South Delhi & Faridabad</h2>
            <div className="divider" />
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              Explore our ongoing, completed and upcoming developments - each a testament to our commitment
              to quality and timely delivery.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 44 }}>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                style={{
                  padding: '9px 22px', borderRadius: 999, fontSize: '0.85rem', fontWeight: 500,
                  background: active === c ? 'var(--color-primary)' : '#fff',
                  color: active === c ? '#fff' : 'var(--color-dark-text)',
                  border: '1px solid', borderColor: active === c ? 'var(--color-primary)' : 'var(--color-border)',
                  transition: 'all 0.3s ease',
                }}
              >{c === 'All' ? 'All Projects' : c}</button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="project-grid"
          >
            {list.map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={index * 0.07} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
