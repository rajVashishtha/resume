type Stat = {
  value: string
  label: string
}

type SkillGroup = {
  title: string
  skills: string[]
}

type ExperienceTrack = {
  name: string
  summary: string
  bullets: string[]
  technologies: string[]
}

type ExperienceItem = {
  id: string
  company: string
  title: string
  duration: string
  location: string
  overview: string
  highlights: string[]
  technologies: string[]
  tracks?: ExperienceTrack[]
}

type ProjectLink = {
  label: string
  href: string
  kind: 'github' | 'npm' | 'external'
}

type ProjectItem = {
  id: string
  title: string
  label: string
  impact: string
  description: string[]
  tags: string[]
  links: ProjectLink[]
}

type CredentialItem = {
  name: string
  issuer: string
  description: string
}

export const resumeFile = "/raj_vashisht's_resume.pdf"

export const profile = {
  name: 'Raj Vashisht',
  title: 'Fullstack Software Engineer',
  currentCompany: 'Oracle',
  location: 'Noida, India',
  email: 'vashiraj2000@gmail.com',
  phone: '+91 6375991056',
  phoneHref: 'tel:+916375991056',
  linkedIn: 'https://www.linkedin.com/in/vashiraj2000',
  github: 'https://github.com/vashiraj2000',
  summary:
    'Fullstack Software Engineer with 5+ years building scalable, high-performance web applications across cloud security, frontend platforms, and AI-native products.',
  focus:
    'Strong in React, Next.js, FastAPI, distributed systems, and automation workflows that translate into measurable product impact for users and internal teams.',
  specialties: [
    'React',
    'Next.js',
    'TypeScript',
    'FastAPI',
    'LangGraph',
    'Docker',
    'OCI',
  ],
  stats: [
    { value: '5+', label: 'years shipping production software' },
    { value: '10k+', label: 'distributed agents handled concurrently' },
    { value: '40%', label: 'cross-region retrieval latency reduced' },
    { value: '70%', label: 'maintenance effort reduced in OCI Console' },
  ],
} as const satisfies {
  name: string
  title: string
  currentCompany: string
  location: string
  email: string
  phone: string
  phoneHref: string
  linkedIn: string
  github: string
  summary: string
  focus: string
  specialties: string[]
  stats: Stat[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C/C++', 'Go', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Redux', 'Angular', 'Tailwind CSS', 'MUI', 'CSS'],
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'Express',
      'GraphQL',
      'Flask',
      'Django',
      'NestJS',
      'FastAPI',
      'gRPC',
      'WebSockets',
    ],
  },
  {
    title: 'AI & Data',
    skills: ['LangGraph', 'Gemini API', 'MongoDB', 'Redis', 'PyPDF', 'yt-dlp'],
  },
  {
    title: 'Cloud, DevOps & Quality',
    skills: ['OCI', 'AWS', 'Docker', 'Jenkins', 'Airflow', 'Cypress', 'Jest', 'Git', 'Jira'],
  },
]

export const experiences: ExperienceItem[] = [
  {
    id: 'oracle',
    company: 'Oracle',
    title: 'Member of Technical Staff (Fullstack Engineer)',
    duration: 'Apr 2022 - Present',
    location: 'Noida',
    overview:
      'Owning distributed backend systems and frontend platform work across OCI security products, with a strong focus on scale, maintainability, and customer-facing reliability.',
    highlights: [
      'Received the Employee Recognition Award for driving the initiative behind the new MAUI UI framework and raising frontend standards across teams.',
      'Maintained enterprise reliability by diagnosing and resolving critical customer-impacting bugs in the OCI scanning platform under strict SLA expectations.',
    ],
    technologies: ['React', 'Java', 'Node.js', 'Docker', 'Redis', 'WebSockets', 'Oracle DB', 'Cypress', 'OCI'],
    tracks: [
      {
        name: 'Workload Protection',
        summary:
          'Designed the distributed query and agent orchestration capabilities powering real-time workload protection across multiple OCI regions.',
        bullets: [
          'Architected a high-scale ad hoc query engine using a fan-out design across multiple OCI regions and a centralized results hub for real-time polling.',
          'Optimized data synchronization through dual-layer persistence using database replication and Redis stream caching, cutting cross-region retrieval latency by 40%.',
          'Scaled agent communication with a WebSocket-based dispatch system that delivered concurrent queries to more than 10,000 distributed agents.',
        ],
        technologies: ['Java', 'Redis', 'WebSockets', 'Oracle DB', 'Docker'],
      },
      {
        name: 'OCI Console',
        summary:
          'Built compliance and platform experiences that streamlined regulatory workflows while reducing long-term maintenance overhead.',
        bullets: [
          'Architected and implemented a full-stack compliance assessment application using React, Node.js, and Docker, improving tracking efficiency by 30%.',
          'Led the migration of legacy plugins to a centralized configuration-based UI framework, reducing long-term maintenance effort by 70%.',
          'Engineered a custom API client refactor for complex data streams, improving large file download performance by 25%.',
        ],
        technologies: ['React', 'Node.js', 'Java', 'Docker', 'Cypress'],
      },
    ],
  },
  {
    id: 'studypaq',
    company: 'Studypaq',
    title: 'Fullstack Engineer',
    duration: 'Feb 2021 - Apr 2022',
    location: 'Remote',
    overview:
      'Led delivery of an education platform spanning content pipelines, rendering services, SEO improvements, CI/CD, and cloud cost optimization.',
    highlights: [
      'Led a team of 5 developers to deliver a production-ready educational tool and improve collaboration and delivery speed.',
      'Implemented Airflow DAGs that reduced the document-to-HTML conversion flow by 70%.',
      'Built microservices with Node.js, Flask, and gRPC, improving content rendering by 30% and strengthening SEO through Next.js.',
      'Developed Docker and Jenkins pipelines that improved deployment efficiency by 70% and reduced time-to-market by 40%.',
      'Cut AWS instance costs by more than 40% through stress testing and optimization.',
    ],
    technologies: ['Node.js', 'Flask', 'gRPC', 'Airflow', 'Docker', 'Jenkins', 'Next.js', 'AWS'],
  },
]

export const projects: ProjectItem[] = [
  {
    id: 'ai-notes',
    title: 'AI Notes',
    label: 'AI-native note generation',
    impact: '30% lower inference cost and latency via caching',
    description: [
      'Architected an AI-native web app using Next.js, FastAPI, and Gemini LLMs to synthesize structured study notes from YouTube videos, podcasts, articles, and PDFs.',
      'Orchestrated multimodal ingestion with LangGraph, yt-dlp, and PyPDF to process text and audio natively before prompting.',
      'Built prompt workflows for formatting 200k+ character contexts into structured markdown notes and key concepts.',
    ],
    tags: ['Next.js', 'FastAPI', 'LangGraph', 'Gemini API', 'MongoDB'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/vashiraj-ai-tools/notes-creator-server',
        kind: 'github',
      },
    ],
  },
  {
    id: 'quickly',
    title: 'Quickly',
    label: 'High-performance CLI downloader',
    impact: 'Up to 75% faster large-file downloads',
    description: [
      'Engineered a CLI tool for high-speed file transfers using parallel chunk downloading and connection pooling.',
      'Built resumable downloads with per-chunk retries and adaptive chunk splitting, helping the tool reach a 99% success rate on unstable networks.',
    ],
    tags: ['Node.js', 'TypeScript', 'Undici', 'CLI'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/rajVashishtha/quickly',
        kind: 'github',
      },
      {
        label: 'NPM',
        href: 'https://www.npmjs.com/package/@raj-vashisht/quickly',
        kind: 'npm',
      },
    ],
  },
  {
    id: 'algo-visualiser',
    title: 'Algo Visualiser',
    label: 'Interactive learning tool',
    impact: '90% improvement in engagement and comprehension',
    description: [
      'Developed a real-time visualization engine for sorting and searching algorithms to make complex logic easier to learn and explore.',
    ],
    tags: ['React', 'JavaScript', 'Algorithms', 'Visualization'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/rajVashishtha/visualizer',
        kind: 'github',
      },
    ],
  },
]

export const awards: CredentialItem[] = [
  {
    name: 'Employee Recognition Award',
    issuer: 'Oracle',
    description: 'Recognized for initiative in building the new MAUI UI framework and shaping cross-team frontend standards.',
  },
  {
    name: 'Hacknovate 2.0 - 3rd Prize Winner',
    issuer: 'ABESIT',
    description: 'Placed in a national hackathon through rapid prototyping, collaboration, and practical problem-solving.',
  },
]

export const certifications: CredentialItem[] = [
  {
    name: 'AWS Cloud Solution Architect Certificate',
    issuer: 'Amazon Web Services',
    description: 'Focused on cloud architecture fundamentals, reliability, and scalable distributed systems on AWS.',
  },
  {
    name: 'React Professional Certificate',
    issuer: 'HackerRank',
    description: 'Validated hands-on proficiency in React and component-driven frontend engineering.',
  },
]

export const education = {
  degree: 'B.Tech in Computer Science',
  institution: 'Laxmi Devi Institute of Engineering and Technology',
  location: 'Alwar',
  graduation: 'Sep 2021',
} as const satisfies {
  degree: string
  institution: string
  location: string
  graduation: string
}
