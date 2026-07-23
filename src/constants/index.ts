import { TNavLink, TTechnology, TExperience, TProject, TWorkshop, TCaseStudy } from "../types";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About", mode: "tech" },
  { id: "work", title: "Work", mode: "tech" },
  { id: "projects", title: "Projects", mode: "tech" },
  { id: "experience", title: "Journey", mode: "tech" },
  { id: "marketing-skills", title: "Skills", mode: "marketing" },
  { id: "results", title: "Results", mode: "marketing" },
  { id: "community", title: "Community", mode: "marketing" },
  { id: "contact", title: "Contact" },
];

export const technologies: TTechnology[] = [
  { name: "Python", icon: "https://img.icons8.com/fluency/48/python.png" },
  { name: "JavaScript", icon: "https://img.icons8.com/fluency/48/javascript.png" },
  { name: "React", icon: "https://img.icons8.com/office/40/react.png" },
  { name: "Node.js", icon: "https://img.icons8.com/windows/32/nodejs.png" },
  { name: "Tailwind", icon: "https://img.icons8.com/fluency/48/tailwind_css.png" },
  { name: "Supabase", icon: "https://img.icons8.com/fluency/48/supabase.png" },
  { name: "HuggingFace", icon: "https://img.icons8.com/fluency/48/hugging-face_app.png" },
  { name: "Groq", icon: "https://img.icons8.com/fluency-systems-regular/48/grok.png" },
  { name: "Azure", icon: "https://img.icons8.com/fluency/48/azure-1.png" },
  { name: "GitHub", icon: "https://img.icons8.com/material-outlined/24/github.png" },
  { name: "Cloudinary", icon: "https://img.icons8.com/ios/50/cloud--v1.png" },
  { name: "n8n", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/n8n-icon.png" },
];

export const experiences: TExperience[] = [
  {
    title: "Founder",
    company_name: "Feron",
    icon: "/company/feron.svg",
    iconBg: "#00d4ff",
    date: "2024 - Present",
    points: [
      "Founded a C2C marketplace platform connecting buyers and sellers.",
      "Built and deployed the full-stack application.",
      "Managed product development, marketing, and growth strategy.",
    ],
  },
  {
    title: "Marketing Team Leader",
    company_name: "CSCC",
    icon: "/company/cscc.svg",
    iconBg: "#ff6ec7",
    date: "2023 - 2024",
    points: [
      "Led the digital marketing team at CSCC (Startup Club).",
      "Organized workshops on content creation, marketing, and startup fundamentals.",
      "Grew community engagement and social media presence.",
    ],
  },
  {
    title: "AI Agent Developer",
    company_name: "Nami AI",
    icon: "/company/nami.svg",
    iconBg: "#00d4ff",
    date: "2024 - Present",
    points: [
      "Developed a RAG-based AI agent for intelligent document processing.",
      "Integrated with Supabase, HuggingFace, and Groq for LLM inference.",
      "Deployed and scaled the agent for real-time user interactions.",
    ],
  },
  {
    title: "Marketing Trainer",
    company_name: "CSCC",
    icon: "/company/cscc.svg",
    iconBg: "#ff6ec7",
    date: "2023",
    points: [
      "Delivered training sessions on digital marketing fundamentals.",
      "Taught SEO, social media strategy, and content creation basics.",
      "Mentored students on building personal brands online.",
    ],
  },
];

export const projects: TProject[] = [
  {
    name: "Asuq AI",
    description:
      "Production-grade multi-agent AI marketing assistant built on a LangGraph state machine (19 nodes, 9 skill agents, 11 slave agents). Features a full RAG pipeline (vector + BM25 + reranker), 3-tier memory system, 4-layer content moderation, and real-time market intelligence collectors — all tailored for Algeria's multilingual marketing landscape. Supports Arabic, French, and Darija with streaming SSE responses.",
    tags: [
      { name: "Python", color: "#3776ab" },
      { name: "LangGraph", color: "#e16462" },
      { name: "FastAPI", color: "#009688" },
      { name: "Supabase", color: "#3ecf8e" },
      { name: "RAG", color: "#00d4ff" },
    ],
    image: "/projects/asuq-ai.svg",
  },
  {
    name: "Nami AI",
    description:
      "A RAG-based AI agent that intelligently processes and answers questions from documents, powered by modern LLMs.",
    tags: [
      { name: "Python", color: "#3776ab" },
      { name: "RAG", color: "#00d4ff" },
      { name: "Supabase", color: "#3ecf8e" },
    ],
    image: "/projects/nami.svg",
    live_link: "#",
  },
  {
    name: "Feron",
    description:
      "A consumer-to-consumer marketplace platform enabling seamless buying and selling between users.",
    tags: [
      { name: "React", color: "#61dafb" },
      { name: "Node.js", color: "#68a063" },
      { name: "Supabase", color: "#3ecf8e" },
    ],
    image: "/projects/feron.svg",
    live_link: "https://feron.app",
  },
  {
    name: "CS Student Bot",
    description:
      "A Telegram bot serving 1,200+ CS students with academic resources, tools, and community support.",
    tags: [
      { name: "Python", color: "#3776ab" },
      { name: "Telegram API", color: "#0088cc" },
      { name: "Automation", color: "#ff6ec7" },
    ],
    image: "/projects/csbot.svg",
  },
];

export const workshops: TWorkshop[] = [
  {
    title: "Content Creation Basics",
    description: "Foundations of creating engaging digital content for social media and blogs.",
  },
  {
    title: "Marketing & Sales Basics",
    description: "Core principles of digital marketing and sales funnels for startups.",
  },
  {
    title: "Startup: Idea to Label",
    description: "End-to-end guide from conceptualizing a startup idea to launching a brand.",
  },
];

export const caseStudies: TCaseStudy[] = [
  {
    title: "Instagram Growth Sprint",
    description:
      "Rapid growth campaign achieving massive reach increase and audience engagement over a 30-day sprint.",
    metrics: [
      { label: "Views", value: "75.9K" },
      { label: "Reach Growth", value: "+26,908%" },
      { label: "Interactions", value: "5,263" },
      { label: "Non-Follower Reach", value: "96.1%" },
    ],
  },
  {
    title: "Feron SEO Campaign",
    description:
      "Search engine optimization campaign for feron.app, building organic visibility from zero.",
    metrics: [
      { label: "Impressions", value: "60" },
      { label: "Avg. Position", value: "20.7" },
      { label: "Countries", value: "19" },
      { label: "Pages Indexed", value: "Multiple" },
    ],
  },
];

export const marketingSkills = [
  {
    category: "Strategy",
    skills: ["Growth Strategy", "Market Research", "Competitive Analysis", "Brand Positioning"],
  },
  {
    category: "Social & Content",
    skills: ["Instagram Growth", "Content Creation", "Copywriting", "Community Building"],
  },
  {
    category: "Automation & Ads",
    skills: ["Marketing Automation", "Paid Ads", "n8n Workflows", "Funnel Optimization"],
  },
  {
    category: "SEO",
    skills: ["On-Page SEO", "Keyword Research", "Google Search Console", "Link Building"],
  },
  {
    category: "Lead Gen",
    skills: ["Lead Magnets", "Email Marketing", "Landing Pages", "Conversion Optimization"],
  },
  {
    category: "Training",
    skills: ["Workshop Delivery", "Mentoring", "Curriculum Design", "Public Speaking"],
  },
];

export const certificates = [
  { name: "Stanford Code in Place 6", image: "/media/certs/stanford-code-in-place.jpg" },
  { name: "CSCC - Content Creation Basics", image: "/media/certs/cscc-content-creation-basics.jpg" },
  { name: "CSCC - Marketing & Sales Basics", image: "/media/certs/cscc-marketing-sales-basics.jpg" },
  { name: "CSCC - Startup: Idea to Label", image: "/media/certs/cscc-startup-idea-to-label.jpg" },
];

export const eventPhotos = [
  { src: "/media/events/cscc-booth.jpg", alt: "CSCC Marketing Booth" },
  { src: "/media/events/cscc-plaque.jpg", alt: "CSCC Recognition" },
  { src: "/media/events/cscc-portrait.jpg", alt: "Digital Communication Leader" },
];
