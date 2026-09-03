import { motion } from 'framer-motion'
import { Building2, CheckCircle2, Clock3, Eye, Handshake, ShieldCheck, Star } from 'lucide-react'
import Reveal from '../components/Reveal'

const journeyValues = [
  { label: 'TRUST', icon: ShieldCheck },
  { label: 'TRANSPARENCY', icon: Eye },
  { label: 'PROFESSIONAL GUIDANCE', icon: CheckCircle2 },
  { label: 'CUSTOMER RELATIONSHIPS', icon: Handshake },
]

const futureValues = [
  { label: 'TRUST', icon: ShieldCheck },
  { label: 'TRANSPARENCY', icon: Eye },
  { label: 'COMMITMENT', icon: Handshake },
  { label: 'EXCELLENCE', icon: Star },
]

const highlights = [
  { value: '12+ Years', label: 'of Experience', icon: Clock3 },
  { value: 'Trusted', label: 'Real Estate Services', icon: ShieldCheck },
  { value: 'Own Office', label: 'Our Commitment to You', icon: Building2 },
  { value: 'Professional', label: 'Guidance', icon: CheckCircle2 },
]

function ValueGrid({ values }: { values: typeof journeyValues }) {
  return (
    <div className="company-value-grid">
      {values.map(({ label, icon: Icon }) => (
        <div className="company-value" key={label}>
          <Icon size={20} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

export default function CompanyStory() {
  return (
    <>
      <section id="trust" className="section company-story-section">
        <div className="container-wide">
          <Reveal>
            <div className="company-section-heading">
              <span className="eyebrow">Our Foundation</span>
              <h2 className="section-title">12+ Years of Trust in Real Estate</h2>
              <div className="divider" />
              <p className="company-lead">Building Trust. Creating Value. Delivering Excellence.</p>
            </div>
          </Reveal>
          <div className="company-trust-layout">
            <Reveal>
              <p className="company-copy">
                For over 12 years, JP Expressway has been a trusted name in the real estate industry, helping customers find the right property opportunities with confidence and peace of mind.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="company-trust-note">
                <ShieldCheck size={28} />
                <div>
                  <strong>Company Experience</strong>
                  <span>Built on trust, clarity, and lasting value.</span>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="company-mini-stats">
            {['12+ Years', 'Trust', 'Real Estate', 'Professional Guidance'].map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="section company-journey-section">
        <div className="container-wide company-two-column">
          <Reveal>
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="section-title">Our Journey</h2>
              <div className="divider divider-left" />
              <p className="company-copy">
                Our journey has been built on trust, transparency, professional guidance, and strong customer relationships. With more than a decade of experience, we understand the importance of making the right real estate decision—whether it is for investment, business, or securing a property for the future.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ValueGrid values={journeyValues} />
          </Reveal>
        </div>
      </section>

      <section id="own-office" className="section own-office-section">
        <div className="container-wide">
          <Reveal>
            <div className="own-office-panel">
              <div className="own-office-icon"><Building2 size={30} /></div>
              <div>
                <span className="eyebrow">Our Presence</span>
                <h2>Our Own Office. Our Commitment to You.</h2>
                <p>
                  JP Expressway operates from its own office, providing our customers with a professional and dependable place to connect with us. Our physical presence reflects our commitment to transparency, accessibility, and long-term customer relationships.
                </p>
              </div>
              <strong>OWN OFFICE</strong>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="experience" className="section company-experience-section">
        <div className="container-wide company-two-column">
          <Reveal>
            <div>
              <span className="eyebrow">Our Commitment</span>
              <h2 className="section-title">Experience You Can Trust</h2>
              <div className="divider divider-left" />
              <p className="company-copy">
                Over the past 12+ years, we have continued to grow through the trust and confidence of our customers. We believe that real estate is not just about buying or selling property—it is about creating lasting value and building relationships that stand the test of time.
              </p>
              <p className="company-copy">
                Our experienced team is committed to providing clear information, professional assistance, and customer-focused real estate solutions.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="experience-list">
              {['12+ YEARS OF EXPERIENCE', 'TRUSTED REAL ESTATE SERVICES', 'PROFESSIONAL ASSISTANCE', 'CUSTOMER-FOCUSED SOLUTIONS'].map((item) => (
                <div key={item}><CheckCircle2 size={20} />{item}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="looking-ahead" className="section looking-ahead-section">
        <div className="container-wide">
          <Reveal>
            <div className="company-section-heading">
              <span className="eyebrow">The Road Ahead</span>
              <h2 className="section-title">Looking Ahead</h2>
              <div className="divider" />
              <p className="company-copy">
                With a strong foundation of 12+ years of experience, JP Expressway continues to move forward with the same values that have shaped our journey—Trust, Transparency, Commitment, and Excellence.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ValueGrid values={futureValues} />
          </Reveal>
        </div>
      </section>

      <section id="highlights" className="section company-highlights-section">
        <div className="container-wide">
          <Reveal>
            <div className="company-section-heading">
              <span className="eyebrow">At A Glance</span>
              <h2 className="section-title">Why Customers Choose Us</h2>
            </div>
          </Reveal>
          <div className="company-highlight-grid">
            {highlights.map(({ value, label, icon: Icon }, index) => (
              <Reveal key={value} delay={index * 0.06}>
                <motion.div whileHover={{ y: -6 }} className="company-highlight-card">
                  <Icon size={25} />
                  <strong>{value}</strong>
                  <span>{label}</span>
                </motion.div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="featured-project-banner">
              <div>
                <span className="eyebrow">Featured Project / Main Project</span>
                <h3>JP EXPRESSWAY</h3>
                <p>JP Expressway<br />Your Trusted Real Estate Partner — Yesterday, Today &amp; Tomorrow.</p>
              </div>
              <span className="featured-project-byline">A featured project by Destiny Buildwell</span>
            </div>
          </Reveal>
        </div>
      </section>
      <style>{styles}</style>
    </>
  )
}

const styles = `
  .company-story-section { background: #fff; }
  .company-journey-section, .company-experience-section { background: #f7f7f7; }
  .looking-ahead-section { background: #fff; }
  .company-highlights-section { background: #f7f7f7; }
  .company-section-heading { max-width: 760px; margin: 0 auto 36px; text-align: center; }
  .company-section-heading .section-title { margin-bottom: 14px; }
  .company-lead { color: var(--color-primary); font-family: var(--font-heading); font-size: 1.2rem; font-weight: 600; }
  .company-two-column, .company-trust-layout { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 56px; align-items: center; }
  .company-trust-layout { margin-bottom: 30px; }
  .company-copy { color: var(--text-muted); font-size: 1rem; line-height: 1.8; }
  .company-trust-note { display: flex; align-items: center; gap: 16px; padding: 24px; border-left: 4px solid var(--color-primary); background: rgba(31,93,134,0.05); }
  .company-trust-note svg { color: var(--color-primary); flex-shrink: 0; }
  .company-trust-note strong, .company-trust-note span { display: block; }
  .company-trust-note strong { color: var(--heading); margin-bottom: 5px; }
  .company-trust-note span { color: var(--text-muted); font-size: .9rem; }
  .company-mini-stats, .company-value-grid, .company-highlight-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
  .company-mini-stats div { padding: 18px; color: var(--color-primary); background: #fff; border: 1px solid var(--color-border); text-align: center; font-weight: 700; }
  .company-value-grid { gap: 14px; }
  .company-value { display: flex; align-items: center; gap: 10px; min-height: 68px; padding: 16px; background: #fff; border: 1px solid var(--color-border); color: var(--heading); font-size: .84rem; font-weight: 700; }
  .company-value svg { color: var(--color-primary); flex-shrink: 0; }
  .divider-left { margin-left: 0; }
  .own-office-section { background: var(--color-primary); color: #fff; }
  .own-office-panel { display: grid; grid-template-columns: auto 1fr auto; gap: 24px; align-items: center; padding: 38px; border: 1px solid rgba(255,255,255,.22); }
  .own-office-icon { display: grid; place-items: center; width: 64px; height: 64px; color: var(--color-primary); background: #fff; }
  .own-office-panel .eyebrow { color: rgba(255,255,255,.78); }
  .own-office-panel h2 { color: #fff; margin: 8px 0 12px; }
  .own-office-panel p { max-width: 760px; margin: 0; color: rgba(255,255,255,.84); line-height: 1.75; }
  .own-office-panel > strong { color: #fff; font-size: .9rem; letter-spacing: .12em; white-space: nowrap; }
  .experience-list { display: grid; gap: 14px; }
  .experience-list div { display: flex; align-items: center; gap: 12px; min-height: 58px; padding: 16px 18px; background: #fff; border: 1px solid var(--color-border); color: var(--heading); font-size: .84rem; font-weight: 700; }
  .experience-list svg { color: var(--color-primary); flex-shrink: 0; }
  .company-highlight-grid { gap: 22px; margin-bottom: 46px; }
  .company-highlight-card { display: flex; flex-direction: column; align-items: center; min-height: 170px; padding: 28px 18px; background: #fff; border: 1px solid var(--color-border); text-align: center; }
  .company-highlight-card svg { color: var(--color-primary); margin-bottom: 18px; }
  .company-highlight-card strong { color: var(--heading); font-family: var(--font-heading); font-size: 1.35rem; }
  .company-highlight-card span { color: var(--text-muted); margin-top: 7px; font-size: .86rem; }
  .featured-project-banner { display: flex; justify-content: space-between; gap: 24px; align-items: end; padding: 34px; color: #fff; background: var(--color-primary); }
  .featured-project-banner .eyebrow { color: rgba(255,255,255,.78); }
  .featured-project-banner h3 { color: #fff; margin: 8px 0 8px; font-size: 1.7rem; }
  .featured-project-banner p { margin: 0; line-height: 1.65; color: rgba(255,255,255,.88); }
  .featured-project-byline { color: rgba(255,255,255,.8); font-size: .85rem; text-align: right; }
  @media (max-width: 1024px) {
    .company-two-column, .company-trust-layout { gap: 36px; }
    .company-mini-stats, .company-value-grid, .company-highlight-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  @media (max-width: 768px) {
    .company-two-column, .company-trust-layout { grid-template-columns: 1fr; gap: 28px; }
    .company-mini-stats, .company-value-grid, .company-highlight-grid { grid-template-columns: 1fr; }
    .own-office-panel { grid-template-columns: 1fr; padding: 26px; }
    .own-office-panel > strong { white-space: normal; }
    .featured-project-banner { flex-direction: column; align-items: flex-start; padding: 26px; }
    .featured-project-byline { text-align: left; }
  }
`
