import type { LucideIcon } from 'lucide-react'
import {
  Home, Building2, Sofa, Compass, Hammer, Castle,
  ShieldCheck, Users, Award, BadgeDollarSign, Clock, Smile,
  Waves, Dumbbell, Building, Baby, Car, Lock, Trees, PersonStanding,
} from 'lucide-react'

// Image and PDF assets (use only files already present in src/assets)
import heroBanner from './assets/Welcome to Destiny Buildwell.jpg'
import heroResidential from './assets/Residential Construction.jpg'
import heroCommercial from './assets/Commercial Projects.jpg'
import aboutImage from './assets/Architecture.jpg'
import projectOne from './assets/Project/one.jpeg'

import teamDirector from './assets/id card/Director.jpeg'
import teamAman from './assets/id card/Aman.jpeg'
import teamAnkit from './assets/id card/Ankit.jpeg'
import teamDigvijay from './assets/id card/DigVijay.jpeg'
import teamNikhil from './assets/id card/nikhil.jpeg'
import teamVarun from './assets/id card/Varun.jpeg'
import teamVinay from './assets/id card/Vinay.jpeg'

import galleryAerialView from './assets/gallery/Aerial View.png'
import galleryAzureHeights from './assets/gallery/Azure Heights.png'
import galleryFoundationWork from './assets/gallery/Foundation Work.png'
import galleryLakesideAerial from './assets/gallery/Lakeside Aerial.png'
import galleryLivingRoom from './assets/gallery/Living Room.png'
import galleryMasterBedroom from './assets/gallery/Master Bedroom.png'
import galleryMasterplanView from './assets/gallery/Masterplan View.png'
import galleryMeridianSite from './assets/gallery/Meridian Site.png'
import galleryModularKitchen from './assets/gallery/Modular Kitchen.png'
import galleryPalmGrove from './assets/gallery/Palm Grove.png'
import gallerySereneVillas from './assets/gallery/Serene Villas.png'
import gallerySkylineTower from './assets/gallery/Skyline Tower.png'

// Available brochure PDFs from src/assets/Project
const brochureFiles = [
  'imperial court.pdf',
  'kasa isles project.pdf',
  'Kensington boulevard apartment sector 128.pdf',
  'Kensington park apartments.pdf',
  'klassic duplex project details.pdf',
  'klassic heights.pdf',
  'klassic shoorya kng.pdf',
  'knight court.pdf',
  'kosmos project details.pdf',
  'krescent home project details.pdf',
  'pavilion court.pdf',
  'pavilion heights.pdf',
]

export type PropertyType = 'Villa' | 'Apartment' | 'Commercial' | 'Plot'

export interface Property {
  id: string
  title: string
  type: PropertyType
  location: string
  area: string
  price: string
  beds?: number
  baths?: number
  image: string
  tag?: string
  description: string
  overview: string
  amenities: string[]
  specifications: { label: string; value: string }[]
  brochure: string
  gallery: string[]
  status: 'Ready to Move' | 'Under Construction' | 'New Launch'
}

export interface Project {
  id: string
  name: string
  category: 'Ongoing' | 'Completed' | 'Upcoming'
  location: string
  image: string
  short: string
  description: string
  overview: string
  amenities: string[]
  specifications: { label: string; value: string }[]
  status: string
  brochure: string
  gallery: string[]
}

export interface Service {
  title: string
  description: string
  icon: LucideIcon
}

export interface WhyChoose {
  title: string
  description: string
  icon: LucideIcon
}

export interface Amenity {
  title: string
  icon: LucideIcon
}

export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
}

export interface Testimonial {
  name: string
  role: string
  location: string
  rating: number
  text: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  image: string
}

export interface FaqItem {
  question: string
  answer: string
}

/* ---- Visual asset helpers (CSS-generated, no external images) ---- */
const gradient = (a: string, b: string) =>
  `linear-gradient(135deg, ${a} 0%, ${b} 100%)`

export const heroVisual =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='1000'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0' stop-color='#1F5D86'/>
          <stop offset='1' stop-color='#4F8FBC'/>
        </linearGradient>
        <pattern id='p' width='40' height='40' patternUnits='userSpaceOnUse'>
          <path d='M0 40 L40 0' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        </pattern>
      </defs>
      <rect width='1600' height='1000' fill='url(#g)'/>
      <rect width='1600' height='1000' fill='url(#p)'/>
      <g fill='rgba(255,255,255,0.95)'>
        <rect x='120' y='520' width='180' height='360' rx='4'/>
        <rect x='340' y='440' width='220' height='440' rx='4'/>
        <rect x='600' y='560' width='160' height='320' rx='4'/>
        <rect x='800' y='480' width='200' height='400' rx='4'/>
        <rect x='1040' y='420' width='240' height='460' rx='4'/>
        <rect x='1320' y='540' width='170' height='340' rx='4'/>
      </g>
      <g fill='rgba(31,93,134,0.35)'>
        <rect x='140' y='560' width='40' height='40'/>
        <rect x='200' y='560' width='40' height='40'/>
        <rect x='140' y='620' width='40' height='40'/>
        <rect x='200' y='620' width='40' height='40'/>
        <rect x='360' y='480' width='50' height='50'/>
        <rect x='430' y='480' width='50' height='50'/>
        <rect x='360' y='550' width='50' height='50'/>
        <rect x='430' y='550' width='50' height='50'/>
        <rect x='820' y='520' width='45' height='45'/>
        <rect x='880' y='520' width='45' height='45'/>
        <rect x='820' y='580' width='45' height='45'/>
        <rect x='880' y='580' width='45' height='45'/>
        <rect x='1060' y='460' width='55' height='55'/>
        <rect x='1130' y='460' width='55' height='55'/>
        <rect x='1060' y='535' width='55' height='55'/>
        <rect x='1130' y='535' width='55' height='55'/>
      </g>
    </svg>`
  )

export const aboutVisual =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='900'>
      <defs><linearGradient id='ag' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#2D6F98'/><stop offset='1' stop-color='#1F5D86'/>
      </linearGradient></defs>
      <rect width='800' height='900' fill='url(#ag)'/>
      <g fill='rgba(255,255,255,0.92)'>
        <rect x='80' y='420' width='200' height='420' rx='6'/>
        <rect x='320' y='340' width='240' height='500' rx='6'/>
        <rect x='600' y='480' width='160' height='360' rx='6'/>
      </g>
      <g fill='rgba(31,93,134,0.3)'>
        <rect x='100' y='460' width='45' height='45'/><rect x='165' y='460' width='45' height='45'/>
        <rect x='230' y='460' width='45' height='45'/><rect x='100' y='520' width='45' height='45'/>
        <rect x='165' y='520' width='45' height='45'/><rect x='230' y='520' width='45' height='45'/>
        <rect x='340' y='380' width='55' height='55'/><rect x='415' y='380' width='55' height='55'/>
        <rect x='490' y='380' width='55' height='55'/><rect x='340' y='450' width='55' height='55'/>
        <rect x='415' y='450' width='55' height='55'/><rect x='490' y='450' width='55' height='55'/>
      </g>
    </svg>`
  )

const propertySvg = (label: string, tone: 'light' | 'dark' = 'light') =>
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>
      <defs><linearGradient id='pg' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='${tone === 'dark' ? '#1F5D86' : '#4F8FBC'}'/>
        <stop offset='1' stop-color='${tone === 'dark' ? '#2D6F98' : '#1F5D86'}'/>
      </linearGradient></defs>
      <rect width='800' height='600' fill='url(#pg)'/>
      <g fill='rgba(255,255,255,0.9)'>
        <rect x='120' y='300' width='180' height='260' rx='4'/>
        <rect x='340' y='240' width='220' height='320' rx='4'/>
        <rect x='600' y='320' width='160' height='240' rx='4'/>
      </g>
      <g fill='rgba(31,93,134,0.28)'>
        <rect x='140' y='330' width='40' height='40'/><rect x='200' y='330' width='40' height='40'/>
        <rect x='140' y='390' width='40' height='40'/><rect x='200' y='390' width='40' height='40'/>
        <rect x='360' y='270' width='50' height='50'/><rect x='430' y='270' width='50' height='50'/>
        <rect x='500' y='270' width='50' height='50'/><rect x='360' y='340' width='50' height='50'/>
        <rect x='430' y='340' width='50' height='50'/><rect x='500' y='340' width='50' height='50'/>
        <rect x='620' y='350' width='45' height='45'/><rect x='685' y='350' width='45' height='45'/>
      </g>
      <text x='400' y='90' font-family='Playfair Display, serif' font-size='44' fill='rgba(255,255,255,0.95)' text-anchor='middle' font-weight='600'>${label}</text>
    </svg>`
  )

const gallerySvg = (label: string) =>
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>
      <defs><linearGradient id='gg' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#2D6F98'/><stop offset='1' stop-color='#1F5D86'/>
      </linearGradient></defs>
      <rect width='800' height='600' fill='url(#gg)'/>
      <g fill='rgba(255,255,255,0.85)'>
        <rect x='100' y='320' width='200' height='240' rx='4'/>
        <rect x='340' y='260' width='240' height='300' rx='4'/>
        <rect x='620' y='340' width='160' height='220' rx='4'/>
      </g>
      <text x='400' y='160' font-family='Poppins, sans-serif' font-size='30' fill='rgba(255,255,255,0.92)' text-anchor='middle' font-weight='500' letter-spacing='2'>${label.toUpperCase()}</text>
    </svg>`
  )

const teamSvg = (initials: string) =>
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'>
      <defs><linearGradient id='tg' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#4F8FBC'/><stop offset='1' stop-color='#1F5D86'/>
      </linearGradient></defs>
      <rect width='400' height='400' fill='url(#tg)'/>
      <circle cx='200' cy='160' r='62' fill='rgba(255,255,255,0.92)'/>
      <path d='M90 360 Q200 240 310 360 Z' fill='rgba(255,255,255,0.92)'/>
      <text x='200' y='175' font-family='Playfair Display, serif' font-size='44' fill='#1F5D86' text-anchor='middle' font-weight='700'>${initials}</text>
    </svg>`
  )

const blogSvg = (label: string) =>
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'>
      <defs><linearGradient id='bg' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#4F8FBC'/><stop offset='1' stop-color='#2D6F98'/>
      </linearGradient></defs>
      <rect width='800' height='500' fill='url(#bg)'/>
      <g fill='rgba(255,255,255,0.88)'>
        <rect x='120' y='250' width='180' height='210' rx='4'/>
        <rect x='340' y='200' width='220' height='260' rx='4'/>
        <rect x='600' y='270' width='160' height='190' rx='4'/>
      </g>
      <text x='400' y='120' font-family='Playfair Display, serif' font-size='34' fill='rgba(255,255,255,0.95)' text-anchor='middle' font-weight='600'>${label}</text>
    </svg>`
  )

export const heroSlides = [
  { image: heroBanner, title: 'Building Future, Shaping Destinies', subtitle: '' },
  { image: heroResidential, title: 'Luxury Villas & Residences', subtitle: 'Where architecture meets elegance and every detail is intentional.' },
  { image: heroCommercial, title: 'Commercial Landmarks', subtitle: 'Future-ready workspaces designed for ambitious businesses.' },
]

export const properties: Property[] = [
  {
    id: 'serene-villas',
    title: 'Serene Luxury Villas',
    type: 'Villa',
    location: 'Whitefield, Bengaluru',
    area: '3,200 - 4,500 sq.ft',
    price: '₹2.4 Cr onwards',
    beds: 4, baths: 5,
    image: projectOne,
    tag: 'Best Seller',
    description: 'Gated villa community with private gardens and clubhouse access.',
    overview: 'Serene Luxury Villas is an exclusive gated community of 48 premium villas set amidst landscaped gardens. Each home features double-height living spaces, private terraces and smart-home integration, designed for families who value space, privacy and timeless architecture.',
    amenities: ['Private Garden', 'Clubhouse', 'Swimming Pool', 'Smart Home', 'Home Theatre', 'Modular Kitchen'],
    specifications: [
      { label: 'Configuration', value: '4 & 5 BHK Villas' },
      { label: 'Land Area', value: '3,200 - 4,500 sq.ft' },
      { label: 'Units', value: '48 Villas' },
      { label: 'Possession', value: 'Ready to Move' },
      { label: 'RERA', value: 'PRM/KA/RERA/1251/446/PR-DB-001' },
    ],
    brochure: brochureFiles[0],
    gallery: [propertySvg('Serene - Exterior'), propertySvg('Serene - Interior'), propertySvg('Serene - Living'), gallerySvg('Serene Living')],
    status: 'Ready to Move',
  },
  {
    id: 'skyline-residences',
    title: 'Skyline Park Residences',
    type: 'Apartment',
    location: 'Hebbal, Bengaluru',
    area: '1,450 - 2,300 sq.ft',
    price: '₹95 L onwards',
    beds: 3, baths: 3,
    image: heroResidential,
    tag: 'New Launch',
    description: 'High-rise apartments with panoramic city and lake views.',
    overview: 'Skyline Park Residences offers 2 & 3 BHK sky homes across two soaring towers of 32 floors each. With a central podium of amenities, sky lounges and curated landscaping, it redefines high-rise living in North Bengaluru.',
    amenities: ['Sky Lounge', 'Infinity Pool', 'Gym', 'Co-Working', 'Multipurpose Hall', 'EV Charging'],
    specifications: [
      { label: 'Configuration', value: '2 & 3 BHK Apartments' },
      { label: 'Built-up Area', value: '1,450 - 2,300 sq.ft' },
      { label: 'Towers', value: '2 Towers, G+32' },
      { label: 'Possession', value: 'Dec 2026' },
      { label: 'RERA', value: 'PRM/KA/RERA/1251/446/PR-DB-002' },
    ],
    brochure: brochureFiles[1],
    gallery: [propertySvg('Skyline - Tower'), propertySvg('Skyline - Living'), propertySvg('Skyline - View'), gallerySvg('Skyline View')],
    status: 'Under Construction',
  },
  {
    id: 'meridian-plaza',
    title: 'Meridian Business Plaza',
    type: 'Commercial',
    location: 'ORR, Marathahalli',
    area: '600 - 12,000 sq.ft',
    price: '₹1.1 Cr onwards',
    image: heroCommercial,
    tag: 'Investment',
    description: 'Grade-A office spaces with retail frontage on the Outer Ring Road.',
    overview: 'Meridian Business Plaza is a LEED-certified commercial development with grade-A office floors, ground-floor retail and a dedicated business lounge. Designed for growth-stage companies, it offers flexible floor plates and premium building management systems.',
    amenities: ['Grade-A Offices', 'Retail Frontage', 'Business Lounge', 'Central AC', 'Parking 1:1000', 'Food Court'],
    specifications: [
      { label: 'Typical Floor', value: '18,000 sq.ft' },
      { label: 'Unit Sizes', value: '600 - 12,000 sq.ft' },
      { label: 'Floors', value: 'G+14' },
      { label: 'Possession', value: 'Mar 2026' },
      { label: 'RERA', value: 'PRM/KA/RERA/1251/446/PR-DB-003' },
    ],
    brochure: brochureFiles[2],
    gallery: [propertySvg('Meridian - Tower'), propertySvg('Meridian - Lobby'), propertySvg('Meridian - Office'), gallerySvg('Meridian Office')],
    status: 'Under Construction',
  },
  {
    id: 'greenfield-plots',
    title: 'Greenfield Villa Plots',
    type: 'Plot',
    location: 'Sarjapur Road',
    area: '1,200 - 2,400 sq.ft',
    price: '₹48 L onwards',
    image: aboutImage,
    description: 'DTCP-approved residential plots in a planned township.',
    overview: 'Greenfield Villa Plots is a 28-acre plotted development with wide internal roads, underground utilities and a central park. Build your dream villa your way, with ready infrastructure and clear titles.',
    amenities: ['Central Park', 'Wide Roads', 'Underground Utilities', 'Gated Security', 'Street Lighting', 'Avenue Plantation'],
    specifications: [
      { label: 'Plot Sizes', value: '1,200 - 2,400 sq.ft' },
      { label: 'Total Plots', value: '210' },
      { label: 'Project Area', value: '28 Acres' },
      { label: 'Approvals', value: 'DTCP & RERA Approved' },
      { label: 'Possession', value: 'Ready to Register' },
    ],
    brochure: brochureFiles[3],
    gallery: [propertySvg('Greenfield - Layout'), propertySvg('Greenfield - Park'), gallerySvg('Greenfield')],
    status: 'Ready to Move',
  },
  {
    id: 'azure-heights',
    title: 'Azure Heights',
    type: 'Apartment',
    location: 'Yelahanka, Bengaluru',
    area: '1,650 - 2,800 sq.ft',
    price: '₹1.3 Cr onwards',
    beds: 3, baths: 4,
    image: heroResidential,
    tag: 'Premium',
    description: 'Spacious 3 & 4 BHK homes around a central courtyard.',
    overview: 'Azure Heights is a low-density apartment community of just 120 homes spread across 4 acres. With a central courtyard design, cross-ventilated homes and no common walls, it offers villa-like privacy in apartment convenience.',
    amenities: ['Central Courtyard', 'Clubhouse', 'Pool', 'Sports Court', 'Reading Lounge', 'Creche'],
    specifications: [
      { label: 'Configuration', value: '3 & 4 BHK' },
      { label: 'Built-up Area', value: '1,650 - 2,800 sq.ft' },
      { label: 'Units', value: '120' },
      { label: 'Possession', value: 'Jun 2027' },
      { label: 'RERA', value: 'PRM/KA/RERA/1251/446/PR-DB-005' },
    ],
    brochure: brochureFiles[4],
    gallery: [propertySvg('Azure - Tower'), propertySvg('Azure - Courtyard'), gallerySvg('Azure Courtyard')],
    status: 'New Launch',
  },
  {
    id: 'palm-grove-villas',
    title: 'Palm Grove Villas',
    type: 'Villa',
    location: 'Devanahalli',
    area: '2,800 - 3,600 sq.ft',
    price: '₹2.1 Cr onwards',
    beds: 4, baths: 5,
    image: projectOne,
    description: 'Resort-style villas near the international airport.',
    overview: 'Palm Grove Villas brings resort living home. Each villa opens onto a private palm-lined garden, with a clubhouse, spa and infinity pool shared by a close-knit community of 36 families.',
    amenities: ['Private Garden', 'Spa', 'Infinity Pool', 'Clubhouse', 'Tennis Court', 'Concierge'],
    specifications: [
      { label: 'Configuration', value: '4 BHK Villas' },
      { label: 'Land Area', value: '2,800 - 3,600 sq.ft' },
      { label: 'Units', value: '36' },
      { label: 'Possession', value: 'Ready to Move' },
      { label: 'RERA', value: 'PRM/KA/RERA/1251/446/PR-DB-006' },
    ],
    brochure: brochureFiles[5],
    gallery: [propertySvg('Palm Grove - Exterior'), propertySvg('Palm Grove - Pool'), gallerySvg('Palm Grove')],
    status: 'Ready to Move',
  },
]

export const services: Service[] = [
  { title: 'Investment Advisory', description: 'We provide research-driven real estate investment advisory, helping clients identify high-growth opportunities with complete transparency and confidence.', icon: Home },
  { title: 'Residential & Commercial Solutions', description: 'From premium residential spaces to high-potential commercial investments, we deliver future-ready real estate solutions tailored to every investor\'s goals.', icon: Building2 },
  { title: 'Real Estate Development', description: 'We develop sustainable and value-driven real estate projects with a strong focus on quality, innovation, timely execution, and long-term wealth creation.', icon: Sofa },
  { title: 'Architecture', description: 'Innovative architectural design rooted in context and sustainability.', icon: Compass },
  { title: 'Renovation', description: 'Breathe new life into existing spaces with expert renovation services.', icon: Hammer },
  { title: 'Luxury Villas', description: 'Bespoke luxury villas crafted for discerning families and lifestyles.', icon: Castle },
]

export const whyChooseUs: WhyChoose[] = [
  {
    title: 'Quality Assurance',
    description: 'We maintain the highest standards of quality in every project through strict inspections, premium materials, and expert supervision, ensuring long-lasting value and customer satisfaction.',
    icon: ShieldCheck,
  },
  {
    title: 'Sustainable Practices',
    description: 'We integrate environmentally responsible practices and energy-efficient solutions into every development, creating sustainable spaces for future generations.',
    icon: Users,
  },
  {
    title: 'Innovative Designs',
    description: 'Our projects feature modern architecture, smart planning, and functional layouts that combine aesthetics with practical living and business requirements.',
    icon: Award,
  },
  {
    title: 'Client Commitment',
    description: 'We prioritize transparency, personalized service, and continuous support, ensuring every client enjoys a smooth and trustworthy real estate experience.',
    icon: BadgeDollarSign,
  },
]

export const amenities: Amenity[] = [
  { title: 'Swimming Pool', icon: Waves },
  { title: 'Gym', icon: Dumbbell },
  { title: 'Club House', icon: Building },
  { title: 'Kids Play Area', icon: Baby },
  { title: 'Parking', icon: Car },
  { title: 'Security', icon: Lock },
  { title: 'Landscape Garden', icon: Trees },
  { title: 'Jogging Track', icon: PersonStanding },
]

export const projects: Project[] = [
  {
    id: 'skyline-park',
    name: 'Skyline Park Residences',
    category: 'Ongoing',
    location: 'Hebbal, Bengaluru',
    image: heroResidential,
    short: '2 & 3 BHK sky homes across two 32-storey towers.',
    description: 'A landmark high-rise community with sky lounges and a central podium of amenities.',
    overview: 'Skyline Park Residences is currently under construction with two towers rising to 32 floors. The project is 55% complete with possession scheduled for December 2026. Live construction updates are shared monthly with all booked customers.',
    amenities: ['Sky Lounge', 'Infinity Pool', 'Gym', 'Co-Working', 'Multipurpose Hall', 'EV Charging'],
    specifications: [
      { label: 'Configuration', value: '2 & 3 BHK' },
      { label: 'Towers', value: '2 (G+32)' },
      { label: 'Units', value: '384' },
      { label: 'Status', value: '55% Complete' },
    ],
    status: 'Under Construction - 55% Complete',
    brochure: brochureFiles[6],
    gallery: [propertySvg('Skyline - Tower'), propertySvg('Skyline - Construction'), gallerySvg('Skyline Construction')],
  },
  {
    id: 'meridian-plaza-proj',
    name: 'Meridian Business Plaza',
    category: 'Ongoing',
    location: 'ORR, Marathahalli',
    image: heroCommercial,
    short: 'Grade-A commercial tower with retail frontage.',
    description: 'LEED-certified office development on the Outer Ring Road.',
    overview: 'Meridian Business Plaza is a 14-storey commercial tower under construction on the ORR. The structural framework is complete and facade installation is in progress. Possession is slated for March 2026.',
    amenities: ['Grade-A Offices', 'Retail Frontage', 'Business Lounge', 'Central AC', 'Food Court'],
    specifications: [
      { label: 'Typical Floor', value: '18,000 sq.ft' },
      { label: 'Floors', value: 'G+14' },
      { label: 'Status', value: 'Facade Installation' },
    ],
    status: 'Under Construction - 70% Complete',
    brochure: brochureFiles[7],
    gallery: [propertySvg('Meridian - Tower'), gallerySvg('Meridian Construction')],
  },
  {
    id: 'serene-villas-proj',
    name: 'Serene Luxury Villas',
    category: 'Completed',
    location: 'Whitefield, Bengaluru',
    image: projectOne,
    short: '48 premium villas in a gated community.',
    description: 'A completed villa community handed over to 48 happy families.',
    overview: 'Serene Luxury Villas was completed and handed over in 2023. All 48 villas are occupied and the community is managed by an active residents association. The project won the "Best Villa Project - North Bengaluru" award in 2024.',
    amenities: ['Private Garden', 'Clubhouse', 'Swimming Pool', 'Smart Home', 'Home Theatre'],
    specifications: [
      { label: 'Configuration', value: '4 & 5 BHK Villas' },
      { label: 'Units', value: '48 (All Occupied)' },
      { label: 'Handed Over', value: '2023' },
    ],
<<<<<<< HEAD
    status: 'Ready To Move - Handed Over 2023',
=======
    status: 'Completed - Handed Over 2023',
>>>>>>> 8a1f9eb9068189e8121be57b9b0b6f274e1ce980
    brochure: brochureFiles[8],
    gallery: [propertySvg('Serene - Exterior'), propertySvg('Serene - Interior'), gallerySvg('Serene Living')],
  },
  {
    id: 'palm-grove-proj',
    name: 'Palm Grove Villas',
    category: 'Completed',
    location: 'Devanahalli',
    image: projectOne,
    short: '36 resort-style villas near the airport.',
    description: 'Resort-style living delivered and occupied.',
    overview: 'Palm Grove Villas was completed in 2022. The 36-villa community features a clubhouse, spa and infinity pool, all managed by the residents association.',
    amenities: ['Private Garden', 'Spa', 'Infinity Pool', 'Tennis Court', 'Concierge'],
    specifications: [
      { label: 'Configuration', value: '4 BHK Villas' },
      { label: 'Units', value: '36' },
      { label: 'Handed Over', value: '2022' },
    ],
<<<<<<< HEAD
    status: 'Ready To Move - Handed Over 2022',
=======
    status: 'Completed - Handed Over 2022',
>>>>>>> 8a1f9eb9068189e8121be57b9b0b6f274e1ce980
    brochure: brochureFiles[9],
    gallery: [propertySvg('Palm Grove - Exterior'), gallerySvg('Palm Grove')],
  },
  {
    id: 'azure-heights-proj',
    name: 'Azure Heights',
    category: 'Upcoming',
    location: 'Yelahanka, Bengaluru',
    image: heroResidential,
    short: 'Low-density 3 & 4 BHK apartments.',
    description: 'A new launch with pre-launch booking now open.',
    overview: 'Azure Heights is a new launch with pre-launch booking now open. The low-density community of 120 homes is designed around a central courtyard with villa-like privacy. Construction begins Q1 2026.',
    amenities: ['Central Courtyard', 'Clubhouse', 'Pool', 'Sports Court', 'Reading Lounge'],
    specifications: [
      { label: 'Configuration', value: '3 & 4 BHK' },
      { label: 'Units', value: '120' },
      { label: 'Launch', value: 'Pre-Launch' },
    ],
    status: 'New Launch - Pre-Launch Booking Open',
    brochure: brochureFiles[10],
    gallery: [propertySvg('Azure - Tower'), gallerySvg('Azure Courtyard')],
  },
  {
    id: 'lakeside-township',
    name: 'Lakeside Integrated Township',
    category: 'Upcoming',
    location: 'Sarjapur Road',
    image: heroCommercial,
    short: 'A 60-acre integrated township by the lake.',
    description: 'An upcoming mega township with villas, apartments and retail.',
    overview: 'Lakeside Integrated Township is our most ambitious upcoming project - a 60-acre master-planned community with villas, apartments, a school, retail and a lakefront promenade. Launching 2026.',
    amenities: ['Lakefront Promenade', 'School', 'Retail', 'Clubhouse', 'Central Park'],
    specifications: [
      { label: 'Project Area', value: '60 Acres' },
      { label: 'Launch', value: '2026' },
    ],
    status: 'Upcoming - Launching 2026',
    brochure: brochureFiles[11],
    gallery: [propertySvg('Lakeside - Masterplan'), gallerySvg('Lakeside')],
  },
]

export const team: TeamMember[] = [
  { name: 'Aditya Bhardwaj', role: 'Founder & Managing Director', image: teamDirector, bio: '' },
  { name: 'Bijay Agarwal', role: 'Legal Associate & Legal Partner', image: '', bio: '' },
  { name: 'Nikhil Thakrani', role: 'Sales Head & Manager', image: teamNikhil, bio: '' },
  { name: 'Aman Pandey', role: 'Senior Project Lead', image: teamAman, bio: '' },
  { name: 'Vinay Kumar', role: 'Operation Head', image: teamVinay, bio: '' },
  { name: 'Ankit Tomar', role: 'Sales Executive', image: teamAnkit, bio: '' },
  { name: 'Digvijay Singh', role: 'Business Development Lead', image: teamDigvijay, bio: '' },
  { name: 'Varun Panday', role: 'Sales Executive', image: teamVarun, bio: '' },
]

export const galleryImages = [
  { src: gallerySereneVillas, category: 'Exterior', label: 'Serene Villas' },
  { src: galleryLivingRoom, category: 'Interior', label: 'Living Room' },
  { src: gallerySkylineTower, category: 'Construction', label: 'Skyline Tower' },
  { src: galleryAerialView, category: 'Drone', label: 'Aerial View' },
  { src: galleryPalmGrove, category: 'Exterior', label: 'Palm Grove' },
  { src: galleryModularKitchen, category: 'Interior', label: 'Modular Kitchen' },
  { src: galleryMeridianSite, category: 'Construction', label: 'Meridian Site' },
  { src: galleryLakesideAerial, category: 'Drone', label: 'Lakeside Aerial' },
  { src: galleryAzureHeights, category: 'Exterior', label: 'Azure Heights' },
  { src: galleryMasterBedroom, category: 'Interior', label: 'Master Bedroom' },
  { src: galleryFoundationWork, category: 'Construction', label: 'Foundation Work' },
  { src: galleryMasterplanView, category: 'Drone', label: 'Masterplan View' },
]

export const testimonials: Testimonial[] = [
  { name: 'Priya & Kunal Joshi', role: 'Homeowners', location: 'Vrindavan', rating: 5, text: 'Choosing Destiny Buildwell was the best decision we made while searching for our dream home. The team was supportive, transparent, and delivered exactly what they promised.' },
  { name: 'Anjali Mehta', role: 'Investor', location: 'Delhi', rating: 5, text: 'We invested in a property in Vrindavan, and the entire experience was smooth and trustworthy. Highly recommended for first-time buyers.' },
  { name: 'Vikram Sinha', role: 'Homeowner', location: 'Noida Extension', rating: 5, text: 'Destiny Buildwell doesn\'t just build properties—they build confidence. We loved how timely and professional the entire process was.' },
]

export const blogPosts: BlogPost[] = [
  { id: 'rera-buying-guide', title: 'A Homebuyer\'s Guide to RERA: What You Must Check', excerpt: 'Understanding RERA registration, carpet area definitions and your rights as a buyer before you sign.', date: 'Jul 12, 2025', author: 'Anita Sharma', category: 'Buying Guides', image: blogSvg('RERA Guide') },
  { id: 'villa-vs-apartment', title: 'Villa vs Apartment: Which Suits Your Lifestyle?', excerpt: 'We compare space, privacy, maintenance and long-term value to help you choose the right home type.', date: 'Jun 28, 2025', author: 'Rajesh Menon', category: 'Lifestyle', image: blogSvg('Villa vs Apartment') },
  { id: 'construction-quality', title: '5 Signs of Premium Construction Quality', excerpt: 'From concrete grade to finishing, here\'s how to assess build quality during a site visit.', date: 'Jun 10, 2025', author: 'Karthik Iyer', category: 'Construction', image: blogSvg('Construction Quality') },
  { id: 'interior-trends-2025', title: 'Interior Design Trends That Will Define 2025', excerpt: 'Warm minimalism, natural textures and smart living - the trends shaping homes this year.', date: 'May 22, 2025', author: 'Meera Joshi', category: 'Design', image: blogSvg('Interior Trends') },
]

export const faqs: FaqItem[] = [
  { question: 'Are all Destiny Buildwell projects RERA registered?', answer: 'Yes. Every project we launch is RERA registered with clear titles and all necessary approvals. You can verify each project\'s RERA number on the project detail page and on the official RERA portal.' },
  { question: 'What is the typical booking and payment process?', answer: 'Booking requires a token amount followed by a sale agreement within 30 days. Payments are linked to construction milestones for under-construction projects, or a flexible plan for ready-to-move homes. We share a detailed payment schedule upfront with no hidden charges.' },
  { question: 'Can I customise the interior of my home?', answer: 'For villas and select apartments, we offer customisation packages through our interior design team. Structural changes are subject to approval, but finishes, modular kitchens and layouts can often be tailored to your taste.' },
  { question: 'Do you offer home loans assistance?', answer: 'Yes. We have tie-ups with leading banks and our team assists you with documentation, eligibility checks and getting the best interest rates. The process is handled end-to-end at no extra cost.' },
  { question: 'How do I track the construction progress of my home?', answer: 'Booked customers receive monthly construction updates with photos and videos. You can also visit the site with prior intimation, and our CRM team is available for any progress-related queries throughout.' },
  { question: 'What happens after possession?', answer: 'We provide a 2-year structural warranty and a 1-year warranty on finishes. A dedicated customer care team handles any post-possession service requests, and we hand over all documents, keys and society formation details at possession.' },
]
