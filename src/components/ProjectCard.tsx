import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import type { Project } from '../data'

function getPriceSummary(project: Project) {
  const prices = Array.from(new Set((project.inventory ?? [])
    .map((item) => item.price.trim())
    .filter((price) => price && price !== 'Not specified' && price !== 'Price details available on request' && price !== 'Price on Request')))

  if (prices.length === 0) return 'Price on Request'
  if (prices.length === 1) return `Starting at ${prices[0]}`

  const parsedPrices = prices.map((label) => {
    const areaPrice = label.match(/^₹\s*([\d,.]+)\s*\/\s*(?:(?:sq\.?\s*)?ft|ft[²2])$/i)
    if (areaPrice) {
      const amount = Number(areaPrice[1].replace(/,/g, ''))
      return { family: 'area', low: amount, high: amount, label }
    }

    const totalPrice = label.match(/^₹\s*([\d,.]+)(?:\s*[–-]\s*([\d,.]+))?\s*(Cr|Crore|Crores|Lakh|Lakhs)\b/i)
    if (!totalPrice) return null

    const multiplier = /^(?:Cr|Crore|Crores)$/i.test(totalPrice[3]) ? 10000000 : 100000
    return {
      family: 'total',
      low: Number(totalPrice[1].replace(/,/g, '')) * multiplier,
      high: Number((totalPrice[2] || totalPrice[1]).replace(/,/g, '')) * multiplier,
      label,
    }
  })

  if (parsedPrices.every((price) => price !== null && price.family === parsedPrices[0]?.family)) {
    const comparablePrices = parsedPrices.filter((price) => price !== null)
    const lowest = comparablePrices.reduce((current, price) => price.low < current.low ? price : current)
    const highest = comparablePrices.reduce((current, price) => price.high > current.high ? price : current)
    return `Price range: ${lowest.label} – ${highest.label}`
  }

  return `Prices: ${prices.join(' · ')}`
}

interface ProjectCardProps {
  project: Project
  delay?: number
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const inventory = project.inventory ?? []
  const configurationSpec = project.specifications.find((item) => item.label.toLowerCase() === 'configuration')
  const configurations = Array.from(new Set(inventory
    .map((item) => item.configuration)
    .filter((configuration) => configuration && configuration !== 'Not specified')))
  const configurationSummary = configurationSpec?.value || configurations.join(', ') || 'Configurations not specified'
  const inventoryCount = inventory.length || configurations.length
  const inventorySummary = `${inventoryCount} inventory options`
  const description = project.short || project.description || 'Project details not provided.'

  return (
    <Reveal delay={delay} className="project-card-reveal">
      <motion.article whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="card project-card">
        <Link to={`/projects/${project.id}`} className="project-card-image" aria-label={`View ${project.name} details`}>
          <motion.img src={project.image} alt={project.name} whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }} loading="lazy" />
          <span className="project-card-badge">{project.category}</span>
        </Link>
        <div className="project-card-content">
          <h3 className="project-card-title">{project.name}</h3>
          <div className="project-card-location">
            <MapPin size={14} /> {project.location || 'Location not specified'}
          </div>
          <p className="project-card-description" title={description}>{description}</p>

          <div className="project-info-grid">
            <div className="project-info-box">
              <div className="project-info-label">Configurations</div>
              <div className="project-info-value" title={configurationSummary}>{configurationSummary}</div>
            </div>
            <div className="project-info-box">
              <div className="project-info-label">Inventory</div>
              <div className="project-info-value">{inventorySummary}</div>
            </div>
          </div>

          <div className="project-card-status"><Calendar size={15} /> {project.status}</div>
          <div className="project-card-price" title={getPriceSummary(project)}>{getPriceSummary(project)}</div>
          <Link to={`/projects/${project.id}`} className="btn btn-outline project-card-button">
            View Details <ArrowRight size={15} />
          </Link>
        </div>
      </motion.article>
    </Reveal>
  )
}