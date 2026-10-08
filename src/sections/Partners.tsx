import Reveal from '../components/Reveal'
import bhutaniLogo from '../assets/logo/Bhutani Infra Gold Skyline Logo.png'
import mahagunLogo from '../assets/logo/Mahagun Architectural Logo on White.png'
import godrejLogo from '../assets/logo/Multicolour Godrej Cursive Logo.png'
import omaxeLogo from '../assets/logo/OMAXE Turning Dreams into Reality Logo.png'
import tataValueHomesLogo from '../assets/logo/Tata Value Homes Logo.png'
import parasLogo from '../assets/logo/Paras Luxury Real Estate Logo.png'
import dlfLogo from '../assets/logo/DLF Architectural Skyline Logo.png'
import abaCorpLogo from '../assets/logo/ABA Corp_ Building a Better Tomorrow.png'
import eldecoLogo from '../assets/logo/ELDECO Live Green Logo.png'
import prateekLogo from '../assets/logo/Prateek Group Corporate Logo.png'
import m3mLogo from '../assets/logo/M3M Our Expertise, Your Joy.png'

const partners = [
  { name: 'Bhutani', logo: bhutaniLogo },
  { name: 'Mahagun', logo: mahagunLogo },
  { name: 'Godrej', logo: godrejLogo },
  { name: 'Omaxe', logo: omaxeLogo },
  { name: 'Tata Value Homes', logo: tataValueHomesLogo },
  { name: 'Paras', logo: parasLogo },
  { name: 'DLF Building', logo: dlfLogo },
  { name: 'ABA Corp', logo: abaCorpLogo },
  { name: 'Eldeco Live Green', logo: eldecoLogo },
  { name: 'Prateek Group', logo: prateekLogo },
  { name: 'M3M', logo: m3mLogo },
]

function PartnerCards({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="partners-marquee-group" aria-hidden={duplicate}>
      {partners.map((partner) => (
        <article className="partners-card" key={partner.name}>
          <div className="partners-logo-wrapper">
            <img src={partner.logo} alt={duplicate ? '' : `${partner.name} logo`} loading="lazy" />
          </div>
        </article>
      ))}
    </div>
  )
}

export default function Partners() {
  return (
    <section id="partners" className="section" style={{ background: '#080808' }}>
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="eyebrow">Trusted Partners</span>
            <h2 className="section-title">Our Partners</h2>
            <div className="divider" />
            <p className="section-subtitle">
              We collaborate with India's leading builders and developers to deliver exceptional real estate projects.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="partners-marquee" aria-label="Our partners">
            <div className="partners-marquee-track">
              <PartnerCards />
              <PartnerCards duplicate />
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .partners-marquee {
          --partner-gap: 20px;
          overflow: hidden;
          margin-bottom: 32px;
        }

        .partners-marquee-track {
          display: flex;
          width: max-content;
          animation: partners-marquee-scroll 44s linear infinite;
        }

        .partners-marquee-group {
          display: flex;
          flex: 0 0 auto;
          gap: var(--partner-gap);
          padding-right: var(--partner-gap);
        }

        .partners-card {
          box-sizing: border-box;
          display: flex;
          flex: 0 0 220px;
          height: 190px;
          align-items: center;
          justify-content: center;
          padding: 16px;
          border: 1px solid rgba(212, 175, 55, .28);
          border-radius: 12px;
          background: #151515;
          text-align: center;
          transition: border-color .3s ease, box-shadow .3s ease;
        }

        .partners-card:hover {
          border-color: #D4AF37;
          box-shadow: 0 8px 16px rgba(212, 175, 55, .16);
        }

        .partners-logo-wrapper {
          box-sizing: border-box;
          display: flex;
          width: 100%;
          height: 100%;
          min-height: 0;
          align-items: center;
          justify-content: center;
          padding: 14px 16px;
          border-radius: 8px;
          background: #fff;
        }

        .partners-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        @keyframes partners-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (hover: hover) {
          .partners-marquee:hover .partners-marquee-track {
            animation-play-state: paused;
          }
        }

        @media (max-width: 768px) {
          .partners-card {
            flex-basis: 205px;
          }
        }

        @media (max-width: 560px) {
          #partners {
            padding: 48px 16px !important;
          }

          #partners .section-title {
            font-size: 28px !important;
          }

          #partners .section-subtitle {
            font-size: 14px !important;
          }

          .partners-card {
            flex-basis: 190px;
            height: 180px;
          }

          .partners-marquee-track {
            animation-duration: 36s;
          }
        }
      `}</style>
    </section>
  )
}
