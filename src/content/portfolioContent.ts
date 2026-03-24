export type ZoneId = 'origins' | 'skills' | 'missions' | 'timeline' | 'signal'

export type SkillCluster = {
  label: string
  items: string[]
}

export type Mission = {
  id: string
  title: string
  period: string
  stack: string[]
  impact: string
  summary: string
  detail: string[]
  links?: {
    label: string
    href: string
  }[]
}

export type TimelineEntry = {
  title: string
  organization: string
  period: string
  type: 'work' | 'education' | 'course'
  highlights: string[]
}

export type ContactChannel = {
  id: string
  label: string
  value: string
  href: string
}

export const zoneOrder: { id: ZoneId; label: string; subtitle: string }[] = [
  { id: 'origins', label: 'About', subtitle: 'Who I am and how I build' },
  { id: 'skills', label: 'Skills', subtitle: 'Technical capabilities' },
  { id: 'missions', label: 'Projects', subtitle: 'Selected project work' },
  { id: 'timeline', label: 'Experience', subtitle: 'Work and education timeline' },
  { id: 'signal', label: 'Contact', subtitle: 'Ways to connect' },
]

export const about = {
  name: 'Mateo Boccalato',
  title: 'Developer building memorable digital systems',
  objective:
    'Aspiring AI/ML Engineer skilled in developing full-stack solutions that combine machine learning models with modern web technologies to deliver real-world impact.',
  bio: [
    'I build at the intersection of software engineering, machine learning, and product thinking. I care about useful interfaces, resilient architecture, and experiences people remember.',
    'My background spans front-end, back-end, and model-focused workflows. I enjoy translating ambiguous ideas into production-ready systems with clear technical intent.',
  ],
  stats: [
    { label: 'Years Building', value: '2+' },
    { label: 'Projects Shipped', value: '10+' },
    { label: 'Current Focus', value: 'AI + Full Stack' },
    { label: 'Mindset', value: 'Client-First' },
  ],
}

export const skillClusters: SkillCluster[] = [
  {
    label: 'Programming',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Frontend + Product',
    items: ['React', 'Tailwind CSS', 'Responsive UI', 'Interaction Design'],
  },
  {
    label: 'ML + Data',
    items: ['PyTorch', 'Scikit-Learn', 'Pandas', 'Feature Engineering', 'RAG'],
  },
  {
    label: 'Tools + Platform',
    items: ['GitHub', 'Vercel', 'Appwrite', 'Jupyter Notebook', 'Cursor'],
  },
  {
    label: 'Languages',
    items: ['English', 'Portuguese', 'Spanish'],
  },
]

export const missions: Mission[] = [
  {
    id: 'floutv',
    title: 'FLOUtv TVOD Infrastructure',
    period: 'Jun 2025 - Aug 2025',
    stack: ['Routing', 'Shopify', 'DRM', 'Cross-Platform Video'],
    impact: 'Premium rentals across Roku, SamsungTV, ClaroTV, and Plex.',
    summary:
      'Engineered the transactional video-on-demand architecture and QR routing flow as Lead Developer at Spanglish Movies.',
    detail: [
      'Integrated Shopify payment workflows with secure content delivery.',
      'Designed QR-based platform handoff to reduce friction in living-room device switching.',
      'Shipped a production path for premium rentals across multiple device ecosystems.',
    ],
  },
  {
    id: 'filmbrain',
    title: 'FilmBrain Revenue Prediction Engine',
    period: 'Feb 2024 - May 2024',
    stack: ['Python', 'CatBoost', 'Flask', 'React', 'TMDB API', 'IMDB API'],
    impact: 'RMSE of $25M and MAE of $19M on box-office forecasting.',
    summary:
      'Built a predictive ML product that connects a trained regression model to a lightweight web interface.',
    detail: [
      'Created a 6000+ movie dataset with 12 engineered data elements.',
      'Developed a Flask API layer to operationalize model predictions for frontend use.',
      'Designed a simple React client to test prediction scenarios in real time.',
    ],
  },
  {
    id: 'ez-toke',
    title: 'Ez-Toke E-Commerce Platform',
    period: 'Featured Work',
    stack: ['React', 'Node.js', 'CSS'],
    impact: 'Production storefront for browsing and purchasing hemp products.',
    summary:
      'Delivered an end-to-end e-commerce experience focused on browsing clarity and purchase flow.',
    detail: [
      'Built the product browsing experience and supporting storefront architecture.',
      'Focused on practical UX decisions for conversion-oriented shopping paths.',
      'Maintained a clean visual language while handling a broad product catalog.',
    ],
    links: [{ label: 'Live Site', href: 'https://ez-toke.com/' }],
  },
  {
    id: 'adhd-gpt',
    title: 'Custom GPT Learning Assistant',
    period: 'Sept 2025 - Dec 2025',
    stack: ['LLM Fine-Tuning', 'RAG', 'Prompt Design', 'User Research'],
    impact: 'Improved relevance of study support for high school students with ADHD.',
    summary:
      'Fine-tuned custom GPT workflows and personalized retrieval pipelines at RelaTech Labs / RevelOnward.',
    detail: [
      'Built RAG pipelines around personalized academic material.',
      'Mapped user learning barriers into technical model requirements.',
      'Improved engagement by tailoring retrieval and response behavior to learner context.',
    ],
  },
]

export const timeline: TimelineEntry[] = [
  {
    title: 'Software Engineer Intern',
    organization: 'Quneu.com',
    period: 'Feb 2026 - Current',
    type: 'work',
    highlights: [
      'Contributing to production engineering initiatives in an active internship role.',
      'Expanding end-to-end software delivery skills in a live product environment.',
    ],
  },
  {
    title: 'AI/ML Developer Intern',
    organization: 'RelaTech Labs / RevelOnward',
    period: 'Sept 2025 - Dec 2025',
    type: 'work',
    highlights: [
      'Fine-tuned custom GPT models for students with ADHD.',
      'Built personalized RAG pipelines to improve answer relevance and usefulness.',
    ],
  },
  {
    title: 'Lead Developer',
    organization: 'Spanglish Movies',
    period: 'Jun 2025 - Aug 2025',
    type: 'work',
    highlights: [
      'Engineered a cross-platform TVOD infrastructure for FLOUtv.',
      'Integrated payments and secure DRM delivery across streaming platforms.',
    ],
  },
  {
    title: 'Technical Lead',
    organization: 'AI Club',
    period: 'Sept 2022 - Mar 2023',
    type: 'work',
    highlights: [
      'Led a team building an X-ray fracture detection model.',
      'Communicated technical concepts clearly across mixed-experience audiences.',
    ],
  },
  {
    title: 'B.S. Computer Science',
    organization: 'San Diego State University',
    period: 'Expected May 2027',
    type: 'education',
    highlights: [
      'Formal CS foundation with focus on applied software and AI systems.',
      'Combining coursework with project-based shipping experience.',
    ],
  },
  {
    title: 'Data Structures and Algorithms',
    organization: 'San Diego State University',
    period: 'Aug 2024 - Dec 2024',
    type: 'course',
    highlights: [
      'Applied searching, sorting, and graph algorithms for practical computational tasks.',
      'Evaluated scalability trade-offs between time and space complexity.',
    ],
  },
  {
    title: 'Introduction to AI',
    organization: 'San Diego State University',
    period: 'Aug 2025 - Dec 2025',
    type: 'course',
    highlights: [
      'Implemented supervised and unsupervised learning workflows.',
      'Explored neural networks, search methods, and AI application domains.',
    ],
  },
  {
    title: 'Advanced Programming Languages',
    organization: 'San Diego State University',
    period: 'Jan 2026 - May 2026',
    type: 'course',
    highlights: [
      'Analyzed language ecosystem trade-offs for real-world software systems.',
      'Compared language fit across architecture and implementation contexts.',
    ],
  },
]

export const contactChannels: ContactChannel[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'mateoboccalato@gmail.com',
    href: 'mailto:mateoboccalato@gmail.com',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+1 (305) 724-2908',
    href: 'tel:+13057242908',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/mateo-boccalato',
    href: 'https://www.linkedin.com/in/mateo-boccalato/',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/Mateo-Boccalato',
    href: 'https://github.com/Mateo-Boccalato',
  },
  {
    id: 'resume',
    label: 'Resume',
    value: 'Download PDF',
    href: 'https://www.mateoboccalato.com/Mateo_Boccalato_Resume.pdf',
  },
]
