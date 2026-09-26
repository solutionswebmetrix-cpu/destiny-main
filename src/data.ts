import type { LucideIcon } from 'lucide-react'
import {
  Home, Building2, Sofa, Compass, Hammer, Castle,
  ShieldCheck, Users, Award, BadgeDollarSign, Clock, Smile,
  Waves, Dumbbell, Building, Baby, Car, Lock, Trees, PersonStanding,
} from 'lucide-react'

// Image and PDF assets (use only files already present in src/assets)
import heroBanner from './assets/banner.png'
import heroResidential from './assets/Residential Construction.jpg'
import heroCommercial from './assets/Commercial Projects.jpg'
import projectImageOne from './assets/Project/Project 1.png'
import projectImageTwo from './assets/Project/Project 2.png'
import projectImageThree from './assets/Project/project 4.png'
import projectImageFour from './assets/Project/projcet 5.png'
import propertyPlots from './assets/Properties/plots.png'
import propertyVillas from './assets/Properties/Luxury Villas.png'
import propertyApartments from './assets/Properties/apartments.png'

const projectImages = [projectImageOne, projectImageTwo, projectImageThree, projectImageFour]

import teamDirector from './assets/id card/Director.jpeg'
import teamAman from './assets/id card/Aman.jpeg'
import teamAnkit from './assets/id card/Ankit.jpeg'
import teamDigvijay from './assets/id card/DigVijay.jpeg'
import teamBijay from './assets/id card/Bijay Agarwal.jpeg'
import teamKushdeep from './assets/id card/Kushdeep.jpeg'
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
  'Kasa Isles Broucher.pdf',
  'Kensington boulevard apartment sector 128.pdf',
  'Kensington park apartments.pdf',
  'klassic duplex project details.pdf',
  'klassic heights.pdf',
  'klassic shoorya kng.pdf',
  'knight court.pdf',
  'kosmos.pdf',
  'Krecent Home Brochure.pdf',
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

export interface ProjectInventoryItem {
  configuration: string
  size: string
  price: string
}

export interface Project {
  id: string
  name: string
  type: 'Residential' | 'Commercial'
  category: 'Under Construction' | 'Ready to Move' | 'Status not specified'
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
  inventory?: ProjectInventoryItem[]
  hasFullDetails?: boolean
}

export const companyContact = {
  phone: '+91 9891128882',
  phoneLink: 'tel:+919891128882',
  email: 'destinybuildwell@gmail.com',
  emailLink: 'mailto:destinybuildwell@gmail.com',
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
          <stop offset='0' stop-color='#0B0B0B'/>
          <stop offset='1' stop-color='#151515'/>
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
      <g fill='rgba(212,175,55,0.35)'>
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
        <stop offset='0' stop-color='#151515'/><stop offset='1' stop-color='#0B0B0B'/>
      </linearGradient></defs>
      <rect width='800' height='900' fill='url(#ag)'/>
      <g fill='rgba(255,255,255,0.92)'>
        <rect x='80' y='420' width='200' height='420' rx='6'/>
        <rect x='320' y='340' width='240' height='500' rx='6'/>
        <rect x='600' y='480' width='160' height='360' rx='6'/>
      </g>
      <g fill='rgba(212,175,55,0.3)'>
        <rect x='100' y='460' width='45' height='45'/><rect x='165' y='460' width='45' height='45'/>
        <rect x='230' y='460' width='45' height='45'/><rect x='100' y='520' width='45' height='45'/>
        <rect x='165' y='520' width='45' height='45'/><rect x='230' y='520' width='45' height='45'/>
        <rect x='340' y='380' width='55' height='55'/><rect x='415' y='380' width='55' height='55'/>
        <rect x='490' y='380' width='55' height='55'/><rect x='340' y='450' width='55' height='55'/>
        <rect x='415' y='450' width='55' height='55'/><rect x='490' y='450' width='55' height='55'/>
      </g>
    </svg>`
  )

const teamSvg = (initials: string) =>
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'>
      <defs><linearGradient id='tg' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#151515'/><stop offset='1' stop-color='#0B0B0B'/>
      </linearGradient></defs>
      <rect width='400' height='400' fill='url(#tg)'/>
      <circle cx='200' cy='160' r='62' fill='rgba(255,255,255,0.92)'/>
      <path d='M90 360 Q200 240 310 360 Z' fill='rgba(255,255,255,0.92)'/>
      <text x='200' y='175' font-family='Playfair Display, serif' font-size='44' fill='#D4AF37' text-anchor='middle' font-weight='700'>${initials}</text>
    </svg>`
  )

const blogSvg = (label: string) =>
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'>
      <defs><linearGradient id='bg' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#151515'/><stop offset='1' stop-color='#0B0B0B'/>
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
    location: 'Greater Noida',
    area: '3,200 - 4,500 sq.ft',
    price: '₹2.4 Cr onwards',
    beds: 4, baths: 5,
    image: propertyVillas,
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
    gallery: [propertyVillas],
    status: 'Ready to Move',
  },
  {
    id: 'skyline-residences',
    title: 'Skyline Park Residences',
    type: 'Apartment',
    location: 'Noida',
    area: '1,450 - 2,300 sq.ft',
    price: '₹95 L onwards',
    beds: 3, baths: 3,
    image: propertyApartments,
    tag: 'New Launch',
    description: 'High-rise apartments with panoramic city and lake views.',
    overview: 'Skyline Park Residences offers 2 & 3 BHK sky homes across two soaring towers of 32 floors each. With a central podium of amenities, sky lounges and curated landscaping, it redefines modern high-rise living in Noida.',
    amenities: ['Sky Lounge', 'Infinity Pool', 'Gym', 'Co-Working', 'Multipurpose Hall', 'EV Charging'],
    specifications: [
      { label: 'Configuration', value: '2 & 3 BHK Apartments' },
      { label: 'Built-up Area', value: '1,450 - 2,300 sq.ft' },
      { label: 'Towers', value: '2 Towers, G+32' },
      { label: 'Possession', value: 'Dec 2026' },
      { label: 'RERA', value: 'PRM/KA/RERA/1251/446/PR-DB-002' },
    ],
    brochure: brochureFiles[1],
    gallery: [propertyApartments],
    status: 'Under Construction',
  },
  {
    id: 'meridian-plaza',
    title: 'Meridian Business Plaza',
    type: 'Commercial',
    location: 'Noida',
    area: '600 - 12,000 sq.ft',
    price: '₹1.1 Cr onwards',
    image: propertyApartments,
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
    gallery: [propertyApartments],
    status: 'Under Construction',
  },
  {
    id: 'greenfield-plots',
    title: 'Greenfield Villa Plots',
    type: 'Plot',
    location: 'Greater Noida',
    area: '1,200 - 2,400 sq.ft',
    price: '₹48 L onwards',
    image: propertyPlots,
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
    gallery: [propertyPlots],
    status: 'Ready to Move',
  },
  {
    id: 'azure-heights',
    title: 'Azure Heights',
    type: 'Apartment',
    location: 'South Delhi',
    area: '1,650 - 2,800 sq.ft',
    price: '₹1.3 Cr onwards',
    beds: 3, baths: 4,
    image: propertyApartments,
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
    gallery: [propertyApartments],
    status: 'New Launch',
  },
  {
    id: 'palm-grove-villas',
    title: 'Palm Grove Villas',
    type: 'Villa',
    location: 'Faridabad',
    area: '2,800 - 3,600 sq.ft',
    price: '₹2.1 Cr onwards',
    beds: 4, baths: 5,
    image: propertyVillas,
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
    gallery: [propertyVillas],
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
    id: 'krecent-homes',
    name: 'Krecent Homes',
    type: 'Residential',
    category: 'Under Construction',
    location: 'Noida sector -129 ',
    image: projectImages[0],
    short: 'Premium under-construction residences with flexible BHK options.',
    description: 'Under construction residential project with multiple inventory options.',
    overview: 'Krecent Homes is an under-construction residential development offering a range of 2 BHK to 4 BHK + Servant configurations in a value-focused offering.',
    amenities: ['Prime Location', 'Modern Living', 'Value Investment', 'Family-Friendly Layouts'],
    specifications: [
      { label: 'Configuration', value: '2 BHK • 3 BHK + Servant • 4 BHK + Servant' },
      { label: 'Status', value: 'Under Construction' },
      { label: 'Pricing Basis', value: '₹7000/sq ft' },
    ],
    status: 'Under Construction',
    brochure: 'Krecent Home Brochure.pdf',
    gallery: [projectImages[0]],
    inventory: [
      { configuration: '2 BHK', size: '1115 ft²', price: '₹7000/sq ft' },
      { configuration: '2 BHK', size: '1230 ft²', price: '₹7000/sq ft' },
      { configuration: '3 BHK + Servant', size: '1680 ft²', price: '₹7000/sq ft' },
      { configuration: '3 BHK + Servant', size: '1980 ft²', price: '₹7000/sq ft' },
      { configuration: '4 BHK + Servant', size: '2375 ft²', price: '₹7000/sq ft' },
    ],
  },
  {
    id: 'kasa-isles',
    name: 'Kasa Isles',
    type: 'Residential',
    category: 'Under Construction',
    location: 'Noida Sector -129 ',
    image: projectImages[1],
    short: 'A wide range of apartment sizes with under-construction pricing options.',
    description: 'Under construction residential project with multiple apartment configuration options.',
    overview: 'Kasa Isles offers a broad mix of apartment sizes designed to suit varied budgets and family requirements.',
    amenities: ['Apartment Living', 'Flexible Options', 'Good Value', 'Family-Oriented Design'],
    specifications: [
      { label: 'Configuration', value: '1 BHK • 2 BHK • 3 BHK • 4 BHK' },
      { label: 'Status', value: 'Under Construction' },
      { label: 'Pricing Basis', value: '₹46 Lakhs + last demand; ₹80 Lakhs all inclusive; ₹8000/sq ft' },
    ],
    status: 'Under Construction',
    brochure: 'Kasa Isles Broucher.pdf',
    gallery: [projectImages[1]],
    inventory: [
      { configuration: '1 BHK', size: '535 ft²', price: '₹46 Lakhs + last demand' },
      { configuration: 'Not specified', size: '920 ft²', price: '₹80 Lakhs all inclusive' },
      { configuration: 'Not specified', size: '1250 ft²', price: '₹8000/sq ft' },
      { configuration: 'Not specified', size: '1370 ft²', price: '₹8000/sq ft' },
      { configuration: 'Not specified', size: '1570 ft²', price: '₹8000/sq ft' },
      { configuration: 'Not specified', size: '1935 ft²', price: '₹8000/sq ft' },
      { configuration: 'Not specified', size: '1870 ft²', price: '₹8000/sq ft' },
      { configuration: 'Not specified', size: '1935 ft²', price: '₹8000/sq ft' },
      { configuration: 'Not specified', size: '2300 ft²', price: '₹8000/sq ft' },
    ],
  },
  {
    id: 'garden-isles',
    name: 'Garden Isles',
    type: 'Residential',
    category: 'Under Construction',
    location: 'Greater Noida',
    image: projectImages[2],
    short: 'Residential layouts across multiple sizes and pricing bands.',
    description: 'Under construction project with a range of apartment and villa-style sizes.',
    overview: 'Garden Isles presents a wide spread of home sizes and pricing to cater to family and investment preferences.',
    amenities: ['Urban Connectivity', 'Residential Layouts', 'Modern Planning', 'Family Convenience'],
    specifications: [
      { label: 'Configuration', value: 'Multiple layouts' },
      { label: 'Status', value: 'Under Construction' },
      { label: 'Pricing Basis', value: '₹6000/sq ft – ₹7000/sq ft' },
    ],
    status: 'Under Construction',
    brochure: 'Garden Isles.pdf',
    gallery: [projectImages[2]],
    inventory: [
      { configuration: 'Not specified', size: '1205 ft²', price: '₹6000/sq ft' },
      { configuration: 'Not specified', size: '1305 ft²', price: '₹6000/sq ft' },
      { configuration: 'Not specified', size: '1840 ft²', price: '₹6200/sq ft' },
      { configuration: 'Not specified', size: '1995 ft²', price: '₹6200/sq ft' },
      { configuration: 'Not specified', size: '2690 ft²', price: '₹7000/sq ft' },
      { configuration: 'Not specified', size: '2690 ft²', price: '₹7000/sq ft' },
    ],
  },
  {
    id: 'kosmos-under-construction',
    name: 'Kosmos',
    type: 'Residential',
    category: 'Under Construction',
    location: 'Noida sector-134',
    image: projectImages[3],
    short: 'Under-construction residential project with multiple BHK configurations and development references.',
    description: 'Under construction project with project reference codes and 2 BHK / 3 BHK options.',
    overview: 'Kosmos is an under-construction residential project offering multiple layouts and development references across the site plan.',
    amenities: ['Flexible Layouts', 'Residential Community', 'Family Value', 'Prime Location'],
    specifications: [
      { label: 'Configuration', value: '2 BHK • 3 BHK' },
      { label: 'Status', value: 'Under Construction' },
      { label: 'Project References', value: 'KM-60, KM-61, KM-68, KM-69, KM-71, KM-72A, KM-72B, KM-72C, KM-80, KM-79, KM-79A, KM-79B' },
      { label: 'KBA References', value: 'KBA-15, KBA-16, KBA-17, KBA-18, KBA-19, KBA-20, KBA-21, KBA-22' },
    ],
    status: 'Under Construction',
    brochure: 'kosmos.pdf',
    gallery: [projectImages[3]],
    inventory: [
      { configuration: '2 BHK', size: 'Not specified', price: 'Price details available on request' },
      { configuration: '3 BHK', size: 'Not specified', price: 'Price details available on request' },
    ],
  },
  {
    id: 'kba-kensington-boulevard-apartments',
    name: 'KBA — Kensington Boulevard Apartments',
    type: 'Residential',
    category: 'Under Construction',
    location: 'Noida sector-131',
    image: projectImages[0],
    short: 'Under-construction apartment project with 3 BHK and 4 BHK layouts.',
    description: 'Under construction apartment project with residential layouts and references.',
    overview: 'Kensington Boulevard Apartments is an under-construction residential development with multiple layout references and configurations.',
    amenities: ['Apartment Living', 'Structured Planning', 'Residential Community', 'Family-Oriented Design'],
    specifications: [
      { label: 'Project Name', value: 'Kensington Boulevard Apartments' },
      { label: 'Configuration', value: '3 BHK • 4 BHK' },
      { label: 'Status', value: 'Under Construction' },
      { label: 'KBA References', value: 'KBA-15, KBA-16, KBA-17, KBA-18, KBA-19, KBA-20, KBA-21, KBA-22' },
    ],
    status: 'Under Construction',
    brochure: 'Kensington boulevard apartment sector 128.pdf',
    gallery: [projectImages[0]],
    inventory: [
      { configuration: '3 BHK', size: '1650 ft²', price: 'Price details available on request' },
      { configuration: '4 BHK', size: 'Not specified', price: 'Price details available on request' },
    ],
  },
  {
    id: 'kosmos-ready-to-move',
    name: 'Kosmos',
    type: 'Residential',
    category: 'Ready to Move',
    location: 'Noida sector-134',
    image: projectImages[1],
    short: 'Ready-to-move apartment inventory with competitive pricing bands.',
    description: 'Ready to move residential project with multiple pricing and configuration options.',
    overview: 'Kosmos is available in ready-to-move inventory with clear pricing information across varied BHK sizes.',
    amenities: ['Ready to Move', 'Value Layouts', 'Secure Community', 'Family Living'],
    specifications: [
      { label: 'Configuration', value: '2 BHK • 3 BHK • 3 BHK + Servant • 4 BHK + Servant' },
      { label: 'Status', value: 'Ready to Move' },
    ],
    status: 'Ready to Move',
    brochure: 'kosmos.pdf',
    gallery: [projectImages[1]],
    inventory: [
      { configuration: '2 BHK', size: '950 ft²', price: '₹75 Lakhs' },
      { configuration: '3 BHK', size: '1270 ft²', price: '₹1.05–1.10 Cr' },
      { configuration: '3 BHK + Servant', size: '1370 ft²', price: '₹1.10–1.15 Cr' },
      { configuration: '3 BHK + Servant', size: '1470 ft²', price: '₹1.50 Cr' },
      { configuration: '4 BHK + Servant', size: '2110 ft²', price: '₹2.20–2.25 Cr' },
    ],
  },
  {
    id: 'klassic',
    name: 'Klassic',
    type: 'Residential',
    category: 'Ready to Move',
    location: 'Noida sector-134',
    image: projectImages[2],
    short: 'Ready-to-move residential development with multiple BHK options.',
    description: 'Ready to move residential apartments with varied configurations and prices.',
    overview: 'Klassic offers a mix of ready-to-move apartment options and family-sized layouts across balanced pricing bands.',
    amenities: ['Ready to Move', 'Family Layouts', 'Comfortable Living', 'Residential Convenience'],
    specifications: [
      { label: 'Configuration', value: '2 BHK • 3 BHK • 4 BHK • 2 BHK + Study • 3 BHK + Servant' },
      { label: 'Status', value: 'Ready to Move' },
    ],
    status: 'Ready to Move',
    brochure: 'klassic heights.pdf',
    gallery: [projectImages[2]],
    inventory: [
      { configuration: '2 BHK', size: '1170 ft²', price: '₹95 Lakhs' },
      { configuration: '3 BHK', size: '1550 ft²', price: '₹1.35 Cr' },
      { configuration: '4 BHK', size: '2370 ft²', price: '₹2.10 Cr' },
      { configuration: '2 BHK + Study', size: '1270 ft²', price: '₹1.20 Cr' },
      { configuration: '3 BHK + Servant', size: '1650 ft²', price: '₹1.50 Cr' },
      { configuration: '3 BHK + Servant', size: '1750 ft²', price: '₹1.65 Cr' },
      { configuration: '3 BHK + Servant', size: '1850 ft²', price: '₹1.80 Cr' },
      { configuration: '4 BHK + Servant', size: '2370 ft²', price: '₹2.40 Cr' },
    ],
  },
  {
    id: 'klassic-duplex',
    name: 'Klassic Duplex',
    type: 'Residential',
    category: 'Ready to Move',
    location: 'Noida sector-134',
    image: projectImages[3],
    short: 'Ready-to-move duplex apartments with larger family layouts.',
    description: 'Ready to move duplex project with multiple apartment configurations.',
    overview: 'Klassic Duplex offers a compact yet premium ready-to-move portfolio with balanced family living options.',
    amenities: ['Ready to Move', 'Duplex Layouts', 'Family Comfort', 'Premium Feeling'],
    specifications: [
      { label: 'Configuration', value: '2 BHK • 3 BHK + Servant • 4 BHK + Study' },
      { label: 'Status', value: 'Ready to Move' },
    ],
    status: 'Ready to Move',
    brochure: 'klassic duplex project details.pdf',
    gallery: [projectImages[3]],
    inventory: [
      { configuration: '2 BHK', size: '1170 ft²', price: '₹95 Lakhs' },
      { configuration: '3 BHK + Servant', size: '1500 ft²', price: '₹1.20 Cr' },
      { configuration: '4 BHK + Study', size: '2550 ft²', price: '₹2.20 Cr' },
    ],
  },
  {
    id: 'kba-ready-to-move',
    name: 'KBA — Kensington Boulevard Apartments',
    type: 'Residential',
    category: 'Ready to Move',
    location: 'Noida sector-131',
    image: projectImages[0],
    short: 'Ready-to-move KBA apartments with compact and family-sized units.',
    description: 'Ready to move apartment units in Kensington Boulevard Apartments.',
    overview: 'KBA — Kensington Boulevard Apartments offers ready-to-move apartment inventory with 1 BHK and 2 BHK options.',
    amenities: ['Ready to Move', 'Compact Apartments', 'Comfortable Living', 'Straightforward Pricing'],
    specifications: [
      { label: 'Project Name', value: 'Kensington Boulevard Apartments' },
      { label: 'Configuration', value: '1 BHK • 2 BHK' },
      { label: 'Status', value: 'Ready to Move' },
    ],
    status: 'Ready to Move',
    brochure: 'Kensington boulevard apartment sector 128.pdf',
    gallery: [projectImages[0]],
    inventory: [
      { configuration: '1 BHK', size: '665 ft²', price: '₹60 Lakhs' },
      { configuration: '2 BHK', size: '1050 ft²', price: '₹95 Lakhs' },
    ],
  },
  {
    id: 'kpa-ready-to-move',
    name: 'KPA — Kensington Park Apartments',
    type: 'Residential',
    category: 'Ready to Move',
    location: 'Noida sector-133',
    image: projectImages[1],
    short: 'Ready-to-move apartment inventory with family-sized layouts.',
    description: 'Ready to move residential options in Kensington Park Apartments.',
    overview: 'KPA — Kensington Park Apartments offers ready-to-move apartment sizes and pricing for family homes and investment buyers.',
    amenities: ['Ready to Move', 'Apartment Living', 'Family Sizes', 'Established Community'],
    specifications: [
      { label: 'Project Name', value: 'Kensington Park Apartments' },
      { label: 'Configuration', value: '2 BHK • 3 BHK • 4 BHK' },
      { label: 'Status', value: 'Ready to Move' },
    ],
    status: 'Ready to Move',
    brochure: 'Kensington park apartments.pdf',
    gallery: [projectImages[1]],
    inventory: [
      { configuration: '2 BHK', size: '1170 ft²', price: '₹95 Lakhs' },
      { configuration: '3 BHK', size: '1560 ft²', price: '₹1.35 Cr' },
      { configuration: '4 BHK', size: '1950 ft²', price: '₹2.30 Cr' },
    ],
  },
  {
    id: 'kalypso-court',
    name: 'Kalypso Court',
    type: 'Residential',
    category: 'Ready to Move',
    location: '',
    image: projectImages[2],
    short: 'Ready-to-move project with 2 BHK, 3 BHK and 4 BHK options.',
    description: '',
    overview: '',
    amenities: [],
    specifications: [],
    status: 'Ready to Move',
    brochure: '',
    gallery: [projectImages[2]],
    hasFullDetails: false,
    inventory: [
      { configuration: '2 BHK', size: '1820 sq ft', price: 'Price details available on request' },
      { configuration: '3 BHK', size: '2600–2800 sq ft', price: 'Price details available on request' },
      { configuration: '4 BHK', size: '3450–3550 sq ft', price: 'Price details available on request' },
    ],
  },
  {
    id: 'imperial-court',
    name: 'Imperial Court',
    type: 'Residential',
    category: 'Ready to Move',
    location: '',
    image: projectImages[3],
    short: 'Ready-to-move project with 3 BHK and 4 BHK options.',
    description: '',
    overview: '',
    amenities: [],
    specifications: [],
    status: 'Ready to Move',
    brochure: 'imperial court.pdf',
    gallery: [projectImages[3]],
    hasFullDetails: false,
    inventory: [
      { configuration: '3 BHK', size: '2800 sq ft', price: 'Price details available on request' },
      { configuration: '4 BHK', size: '3750–3800 sq ft', price: 'Price details available on request' },
    ],
  },
  {
    id: 'pavilion-court',
    name: 'Pavilion Court',
    type: 'Residential',
    category: 'Ready to Move',
    location: '',
    image: projectImages[0],
    short: 'Ready-to-move project with 1 BHK, 2 BHK and 3 BHK options.',
    description: '',
    overview: '',
    amenities: [],
    specifications: [],
    status: 'Ready to Move',
    brochure: 'pavilion court.pdf',
    gallery: [projectImages[0]],
    hasFullDetails: false,
    inventory: [
      { configuration: '1 BHK', size: '936 sq ft', price: 'Price details available on request' },
      { configuration: '2 BHK', size: '1350 sq ft', price: 'Price details available on request' },
      { configuration: '3 BHK', size: '1820 sq ft', price: 'Price details available on request' },
    ],
  },
  {
    id: 'pavilion-heights',
    name: 'Pavilion Heights',
    type: 'Residential',
    category: 'Ready to Move',
    location: '',
    image: projectImages[1],
    short: 'Ready-to-move project with 2 BHK, 3 BHK and 4 BHK options.',
    description: '',
    overview: '',
    amenities: [],
    specifications: [],
    status: 'Ready to Move',
    brochure: 'pavilion heights.pdf',
    gallery: [projectImages[1]],
    hasFullDetails: false,
    inventory: [
      { configuration: '2 BHK', size: '1400 sq ft', price: 'Price details available on request' },
      { configuration: '3 BHK', size: '1940 sq ft', price: 'Price details available on request' },
      { configuration: '4 BHK', size: '2654 sq ft', price: 'Price details available on request' },
    ],
  },
  {
    id: 'knight-court',
    name: 'Knight Court',
    type: 'Residential',
    category: 'Ready to Move',
    location: '',
    image: projectImages[2],
    short: 'Ready-to-move project with 3 BHK and 4 BHK options.',
    description: '',
    overview: '',
    amenities: [],
    specifications: [],
    status: 'Ready to Move',
    brochure: 'knight court.pdf',
    gallery: [projectImages[2]],
    hasFullDetails: false,
    inventory: [
      { configuration: '3 BHK', size: '2200–2300 sq ft', price: 'Price details available on request' },
      { configuration: '4 BHK', size: '2800–2900 sq ft', price: 'Price details available on request' },
    ],
  },
  {
    id: 'the-orchard',
    name: 'The Orchard',
    type: 'Residential',
    category: 'Status not specified',
    location: '',
    image: projectImages[3],
    short: 'Project configurations include 2 BHK, 3 BHK and 4 BHK options.',
    description: '',
    overview: '',
    amenities: [],
    specifications: [],
    status: 'Status not specified',
    brochure: '',
    gallery: [projectImages[3]],
    hasFullDetails: false,
    inventory: [
      { configuration: '2 BHK', size: '1235 sq ft', price: 'Price details available on request' },
      { configuration: '3 BHK', size: '1798–2105 sq ft', price: 'Price details available on request' },
      { configuration: '4 BHK', size: '2505–2620 sq ft', price: 'Price details available on request' },
    ],
  },
  {
    id: 'kube',
    name: 'KUBE',
    type: 'Residential',
    category: 'Status not specified',
    location: '',
    image: projectImages[0],
    short: 'Project configurations include 2 BHK, 3 BHK and 4 BHK options.',
    description: '',
    overview: '',
    amenities: [],
    specifications: [],
    status: 'Status not specified',
    brochure: '',
    gallery: [projectImages[0]],
    hasFullDetails: false,
    inventory: [
      { configuration: '2 BHK', size: '995 sq ft', price: 'Price details available on request' },
      { configuration: '3 BHK', size: '1740 sq ft', price: 'Price details available on request' },
      { configuration: '4 BHK', size: '4400 sq ft', price: 'Price details available on request' },
    ],
  },
]

export const team: TeamMember[] = [
  { name: 'Aditya Bhardwaj', role: 'Founder & Managing Director', image: teamDirector, bio: '' },
  { name: 'Bijay Agarwal', role: 'Legal Associate & Legal Partner', image: teamBijay, bio: '' },
  { name: 'Aman Pandey', role: 'Senior Project Lead', image: teamAman, bio: '' },
  { name: 'Vinay Kumar', role: 'Operation Head', image: teamVinay, bio: '' },
  { name: 'Ankit Tomar', role: 'Sales Executive', image: teamAnkit, bio: '' },
  { name: 'Digvijay Singh', role: 'Business Development Lead', image: teamDigvijay, bio: '' },
  { name: 'Varun Panday', role: 'Sales Executive', image: teamVarun, bio: '' },
  { name: 'Kushdeep', role: 'Sales Executive', image: teamKushdeep, bio: '' },
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
