import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'
import { PageHero } from './Properties'

const statusFilters = ['All', 'New Launch', 'Under Construction', 'Possession Soon', 'Ready to Move', 'Pre Launch', 'Status not specified'] as const
const typeFilters = ['All Types', 'Residential', 'Commercial'] as const
const locationFilters = ['All Locations', 'Noida', 'Greater Noida', 'South Delhi', 'Faridabad'] as const

type StatusFilter = (typeof statusFilters)[number]

function normalizeFilter(value: string) {
  return value.toLowerCase().replace(/[^a-z]/g, '')
}

function getStatusFilter(value: string | null): StatusFilter {
  if (!value) return 'All'
  return statusFilters.find((status) => normalizeFilter(status) === normalizeFilter(value)) ?? 'All'
}

function projectLocation(project: Project) {
  const location = project.location.toLowerCase()
  if (location.includes('greater noida')) return 'Greater Noida'
  if (location.includes('noida')) return 'Noida'
  if (location.includes('south delhi')) return 'South Delhi'
  if (location.includes('faridabad')) return 'Faridabad'
  return ''
}

function matchesProjectStatus(project: Project, selectedStatus: StatusFilter) {
  if (selectedStatus === 'All') return true
  const expectedStatus = normalizeFilter(selectedStatus)
  return [project.category, project.status].some((status) => normalizeFilter(status).includes(expectedStatus))
}

export default function Projects() {
  const [params, setParams] = useSearchParams()
  const [activeStatus, setActiveStatus] = useState<StatusFilter>(() => getStatusFilter(params.get('category')))
  const [activeType, setActiveType] = useState<(typeof typeFilters)[number]>('All Types')
  const [activeLocation, setActiveLocation] = useState<(typeof locationFilters)[number]>('All Locations')

  useEffect(() => {
    setActiveStatus(getStatusFilter(params.get('category')))
  }, [params])

  const list = useMemo(() => projects.filter((project) => {
    const matchesType = activeType === 'All Types' || project.type === activeType
    const matchesLocation = activeLocation === 'All Locations' || projectLocation(project) === activeLocation
    return matchesType && matchesLocation && matchesProjectStatus(project, activeStatus)
  }), [activeLocation, activeStatus, activeType])

  const setStatusFilter = (status: StatusFilter) => {
    setActiveStatus(status)
    if (status === 'All') setParams({})
    else setParams({ category: status })
  }

  return (
    <>
      <PageHero title="Our Projects" subtitle="Explore available project inventory across our portfolio." breadcrumb="Projects" />
      <section className="section">
        <div className="container-wide">
          <Reveal>
            <div className="project-filters">
              <label className="project-filter-field">
                <span>Project type</span>
                <select value={activeType} onChange={(event) => setActiveType(event.target.value as (typeof typeFilters)[number])}>
                  {typeFilters.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
              </label>
              <label className="project-filter-field">
                <span>Construction status</span>
                <select value={activeStatus} onChange={(event) => setStatusFilter(event.target.value as StatusFilter)}>
                  {statusFilters.map((status) => <option key={status} value={status}>{status === 'All' ? 'All Statuses' : status}</option>)}
                </select>
              </label>
              <label className="project-filter-field">
                <span>Location</span>
                <select value={activeLocation} onChange={(event) => setActiveLocation(event.target.value as (typeof locationFilters)[number])}>
                  {locationFilters.map((location) => <option key={location} value={location}>{location}</option>)}
                </select>
              </label>
            </div>
          </Reveal>

          {list.length > 0 ? (
            <div className="project-grid">
              {list.map((project, index) => (
                <ProjectCard key={project.id} project={project} delay={index * 0.07} />
              ))}
            </div>
          ) : <div className="project-empty-state">No projects match these filters.</div>}
        </div>
      </section>
    </>
  )
}
