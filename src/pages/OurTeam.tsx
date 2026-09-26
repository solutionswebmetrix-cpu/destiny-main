import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { team } from '../data'

export default function OurTeam() {
  const leaders = team.slice(0, 2)
  const members = team.slice(2)

  return (
    <>
      <section className="team-page-hero">
        <div className="container-wide">
          <Reveal>
            <span className="eyebrow">Our Team</span>
            <h1>Meet the People Behind Destiny Buildwell</h1>
            <p>A dedicated team committed to creating exceptional spaces, delivering trusted guidance, and turning every client's vision into reality.</p>
          </Reveal>
        </div>
      </section>

      <section className="section team-page-section">
        <div className="container-wide">
          <Reveal>
            <div className="team-page-heading">
              <span className="eyebrow">Leadership</span>
              <h2 className="section-title">Leadership</h2>
              <div className="divider" />
            </div>
          </Reveal>

          <Reveal>
            <div className="team-leadership-grid">
              {leaders.map((member) => (
                <article className="team-leader-card" key={member.name}>
                  <img src={member.image} alt={member.name} />
                  <div>
                    <span className="eyebrow">{member.role}</span>
                    <h3>{member.name}</h3>
                    <p className="muted">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="team-page-heading team-members-heading">
              <h2 className="section-title">Our Team</h2>
              <div className="divider" />
            </div>
          </Reveal>

          <div className="team-members-grid">
            {members.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.05}>
                <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="team-member-card">
                  <img src={member.image} alt={member.name} loading="lazy" />
                  <h3>{member.name}</h3>
                  <p className="muted">{member.role}</p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
