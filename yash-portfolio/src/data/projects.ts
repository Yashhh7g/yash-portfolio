// ✏️ Add, remove or edit projects here. Add `github` / `demo` URLs ONLY when they are real —
// the buttons appear automatically when a URL is filled in.
export interface Project {
  id: string
  title: string
  subtitle: string
  status: string
  description: string
  stack: string[]
  highlights: string[]
  github?: string
  demo?: string
  featured?: boolean
  placeholder?: boolean
}

export const projects: Project[] = [
  {
    id: 'documind',
    title: 'DocuMind',
    subtitle: 'Local AI-Powered PDF RAG Assistant',
    status: 'Personal project',
    description:
      'A Python-based application that helps users retrieve relevant information from PDF documents using retrieval-augmented generation (RAG).',
    stack: ['Python', 'RAG', 'Vector search'],
    highlights: [
      'Processes PDF documents so their content can be searched',
      'Semantic retrieval of passages relevant to a question',
      'Runs locally',
    ],
    github: '', // e.g. 'https://github.com/Yashhh7g/documind'
    demo: '',
    featured: true,
  },
  {
    id: 'optifi',
    title: 'OptiFi',
    subtitle: 'Financial Operations & Remittance Management SaaS',
    status: 'Ongoing · Client project',
    description:
      'A centralized platform for daily accounting, remittance tracking and real-time monitoring of financial operations.',
    stack: ['Next.js 14', 'NestJS', 'Prisma', 'PostgreSQL'],
    highlights: [
      'Role-based access for Super Admins and Operators',
      'Daily cash-flow workflows: balances, collections, expenses, transfers',
      'Reconciliation alerts for pending debits, unresolved credits and inactivity',
    ],
  },
  {
    id: 'air-canvas',
    title: 'Air Canvas',
    subtitle: 'Computer Vision & Hand-Gesture Interactive System',
    status: 'Ongoing · Final-year project',
    description:
      'A webcam-based canvas for touchless drawing, driven by hand-landmark detection.',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
    highlights: [
      'Finger-position-based colour selection and brush-size adjustment',
      'Canvas clearing with an on-video UI overlay',
      'Exploring GenAI-assisted conversion of sketches to refined graphics',
    ],
  },
  {
    id: 'civic',
    title: 'Civic Issue Reporting',
    subtitle: 'Crowdsourced Reporting & Resolution System',
    status: 'Completed · SIH 2025-26',
    description:
      'A full-stack platform where citizens report municipal issues such as potholes, sanitation and streetlight problems, and track their status.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs'],
    highlights: [
      'REST workflows for submission, priority categorisation, media upload and admin review',
      'Relational MySQL model for complaints and status updates',
    ],
  },
  {
    id: 'cafes',
    title: 'Café Maverick & Café Relish',
    subtitle: 'Premium Café Website Prototypes',
    status: 'Completed · Client project',
    description:
      'Frontend prototypes for two cafés with a cinematic black-and-gold theme, built for mobile and desktop.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS'],
    highlights: [
      'Interactive food menu with category-based price cards',
      'About section, photo gallery, contact details and Google Maps',
    ],
  },
  {
    id: 'next',
    title: 'Your next project',
    subtitle: 'Placeholder',
    status: 'Coming soon',
    description: '',
    highlights: [],
    placeholder: true,
  },
]
