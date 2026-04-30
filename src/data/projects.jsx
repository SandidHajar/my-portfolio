import {
  SiReact, SiNodedotjs, SiPostgresql, SiPrisma,
  SiTailwindcss, SiTypescript, SiRedis, SiVite,
  SiJavascript, SiExpress, SiGooglecloud, SiSupabase,
  SiLaravel, SiPhp, SiMysql, SiFramer, SiFastapi
} from 'react-icons/si';
import { HiDatabase, HiShieldCheck, HiOutlineMail, HiLightningBolt } from 'react-icons/hi';
import { FaBrain, FaProjectDiagram, FaLock, FaChartLine } from 'react-icons/fa';

import NexoraImg from '../components/Aside/ProjectsImages/nexora.png';
import FreelancerImg from '../components/Aside/ProjectsImages/freelancer.png';
import ExtractorImg from '../components/Aside/ProjectsImages/data-extractor-v2.png';
import AutomationImg from '../components/Aside/ProjectsImages/automation-v2.png';
import ImgGenImg from '../components/Aside/ProjectsImages/ai-generator-img.png';
import CatsImg from '../components/Aside/ProjectsImages/cats-gellery.jpg';
import AiCvAnalyzerImg from '../components/Aside/ProjectsImages/ai-cv-analyzer.png';

export const projects = {
  en: [
    {
      id: 'ai-cv-analyzer',
      title: 'AI CV Analyzer SaaS',
      description: 'Enterprise-grade SaaS platform for CV evaluation using a hybrid architecture (rule engine + Generative AI).',
      featured: true,
      problem: 'Manual CV screening is subjective, slow, and struggles to deeply analyze technical competencies at scale.',
      solution: 'A hybrid analysis solution combining strict rule-based extraction with Generative AI to evaluate, rank, and provide real-time feedback.',
      impact: 'Detailed technical feedback generated in under 10 seconds, reducing screening time by 90% with a monetizable SaaS model.',
      bullets: [
        'End-to-End Data Pipeline: PDF Parsing ➔ Contextual Prompt Engineering ➔ Async Processing (FastAPI) ➔ Dynamic Dashboard',
        'Full SaaS Architecture: Secure Auth (JWT/Bcrypt), Serverless DB (NeonDB/PostgreSQL), and Freemium logic (5 analyses/day)',
        'Hybrid AI Fusion Engine (Rule-based + Generative AI) for deep technical competency evaluation',
        'Asynchronous request handling (Background Tasks) preventing UI blocking, with client-side polling',
        'Ultra-modern UI/UX (Glassmorphism, Dark mode) with a conversion-oriented Landing Page'
      ],
      stack: 'React, FastAPI, PostgreSQL, SQLAlchemy, JWT',
      tech: [
        { name: 'React', icon: SiReact },
        { name: 'FastAPI', icon: SiFastapi },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'Open AI', icon: FaBrain }
      ],
      metrics: [
        { label: 'Architecture', value: 'Hybrid AI' },
        { label: 'Processing', value: 'Async' },
        { label: 'Design', value: 'Glassmorphism' }
      ],
      image: AiCvAnalyzerImg,
      github: 'https://github.com/SandidHajar',
      demo: '#'
    },
    {
      id: 'nexora',
      title: 'NEXORA — AI-Driven HR SaaS',
      description: 'Enterprise-grade multi-tenant SaaS for automated recruitment workflows.',
      featured: true,
      problem: 'Enterprise HR teams struggle with massive volumes of CVs and slow manual screening processes.',
      solution: 'A BPMS-powered platform using semantic AI to parse, rank, and automate candidate workflows.',
      impact: '80% reduction in CV screening time',
      bullets: [
        'Semantic CV parsing via Groq AI & LLMs',
        'Dynamic BPMS engine for custom hiring workflows',
        'Real-time notifications via Server-Sent Events (SSE)'
      ],
      stack: 'React, Node.js, TypeScript, PostgreSQL, Redis, Groq AI',
      tech: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'Redis', icon: SiRedis },
        { name: 'Groq AI', icon: FaBrain }
      ],
      metrics: [
        { label: 'CV Parsing', value: '< 2s' },
        { label: 'Workflow Efficiency', value: '+80%' },
        { label: 'Uptime', value: '99.9%' }
      ],
      image: NexoraImg,
      github: 'https://github.com/SandidHajar',
      demo: 'https://nexora-si.com/'
    },
    {
      id: 'freelancer-saas',
      title: 'Freelance Management SaaS',
      description: 'Centralized platform for tracking and automating external contractor workflows.',
      featured: true,
      impact: '3x faster administrative processing',
      bullets: [
        'Automated n8n chatbot for instant contractor support',
        'Real-time mission tracking and invoicing pipeline',
        'Granular permission management for team leads'
      ],
      stack: 'React, Node.js, PostgreSQL, n8n',
      tech: [
        { name: 'React', icon: SiReact },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'n8n', icon: FaProjectDiagram }
      ],
      image: FreelancerImg,
      github: 'https://github.com/SandidHajar',
      demo: 'https://gestion-freelancer.vercel.app/'
    },
    {
      id: 'data-extractor',
      title: 'Data Extractor Premium',
      description: 'Chrome Manifest V3 extension for automated B2B lead generation.',
      featured: true,
      impact: '1000+ leads extracted per hour',
      bullets: [
        'Semantic extraction of emails, phones, and social links',
        'Instant export to CSV/Excel for sales pipelines',
        'Secure Manifest V3 isolated execution'
      ],
      stack: 'JavaScript (V3), Chrome APIs, TailwindCSS',
      tech: [
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Chrome API', icon: SiJavascript },
        { name: 'TailwindCSS', icon: SiTailwindcss }
      ],
      image: ExtractorImg,
      github: 'https://github.com/SandidHajar/data-extracting-extention',
      demo: 'https://github.com/SandidHajar/data-extracting-extention'
    },
    {
      id: 'ai-gen',
      title: 'AI Image Generator',
      description: 'Full-stack creative application leveraging state-of-the-art vision models.',
      featured: false,
      impact: 'Sub-second generation latency',
      bullets: [
        'Prompt-to-image transformation via Gemini Vision API',
        'Community gallery with real-time sharing via Supabase',
        'Optimized API cost management and rate limiting'
      ],
      stack: 'React, Gemini API, Supabase, Vercel',
      tech: [
        { name: 'React', icon: SiReact },
        { name: 'Gemini API', icon: SiGooglecloud },
        { name: 'Supabase', icon: SiSupabase }
      ],
      image: ImgGenImg,
      github: 'https://github.com/SandidHajar',
      demo: 'https://images-ai-generator-xi.vercel.app/'
    },
    {
      id: 'cats-gallery',
      title: 'Cats Gallery Full-Stack',
      description: 'High-performance CRUD application demonstrating database architecture.',
      featured: false,
      impact: 'Fully relational data integrity',
      bullets: [
        'Complete CRUD lifecycle with secure REST endpoints',
        'High-performance SQL connection via TiDB Cloud',
        'Rigorous API testing via Postman suites'
      ],
      stack: 'Node.js, Express, TiDB Cloud',
      tech: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express', icon: SiExpress },
        { name: 'TiDB Cloud', icon: HiDatabase }
      ],
      image: CatsImg,
      github: 'https://github.com/SandidHajar',
      demo: 'https://cats-galery.vercel.app/'
    }
  ],
  fr: [
    {
      id: 'ai-cv-analyzer',
      title: 'AI CV Analyzer SaaS',
      description: 'Plateforme SaaS d\'évaluation de CV basée sur une architecture hybride (moteur de règles + IA générative).',
      featured: true,
      problem: 'Le tri manuel des CV est subjectif, chronophage et inefficace pour évaluer la profondeur technique à grande échelle.',
      solution: 'Une solution d\'analyse hybride combinant extraction par règles et IA générative pour évaluer, classer et fournir un feedback en temps réel.',
      impact: 'Feedback technique détaillé généré en moins de 10 secondes, réduisant de 90% le temps de pré-sélection avec un système SaaS monétisable.',
      bullets: [
        'Pipeline Data de bout en bout : Parsing PDF ➔ Prompt Engineering contextuel ➔ Traitement asynchrone (FastAPI) ➔ Dashboard interactif',
        'Architecture SaaS complète : Authentification sécurisée (JWT/Bcrypt), Base de données Serverless (NeonDB/PostgreSQL) et logique freemium (5 analyses/jour)',
        'Architecture hybride (moteur de règles + IA générative) pour une évaluation précise et objective des CV',
        'Gestion asynchrone des requêtes (Background Tasks) évitant le blocage de l\'UI, avec mécanisme de polling',
        'UI/UX ultra-moderne (Glassmorphism, Dark mode) et Landing Page orientée conversion'
      ],
      stack: 'React, FastAPI, PostgreSQL, SQLAlchemy, JWT',
      tech: [
        { name: 'React', icon: SiReact },
        { name: 'FastAPI', icon: SiFastapi },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'Open AI', icon: FaBrain }
      ],
      metrics: [
        { label: 'Architecture', value: 'Hybride IA' },
        { label: 'Traitement', value: 'Asynchrone' },
        { label: 'Design', value: 'Glassmorphism' }
      ],
      image: AiCvAnalyzerImg,
      github: 'https://github.com/SandidHajar/AI_CV_ANALYSER',
      demo: 'https://ai-cv-analyser-zus6.vercel.app/'
    },
    {
      id: 'nexora',
      title: 'NEXORA — SaaS RH Propulsé par l\'IA',
      description: 'SaaS multi-tenant de classe entreprise pour l\'automatisation du recrutement.',
      featured: true,
      problem: 'Les équipes RH luttent contre des volumes massifs de CV et des processus de tri manuels lents.',
      solution: 'Une plateforme basée sur BPMS utilisant l\'IA sémantique pour analyser et classer les candidats.',
      impact: 'Réduction de 80% du temps de tri des CV',
      bullets: [
        'Analyse sémantique de CV via Groq AI & LLMs',
        'Moteur BPMS dynamique pour des flux de recrutement personnalisés',
        'Notifications en temps réel via Server-Sent Events (SSE)'
      ],
      stack: 'React, Node.js, TypeScript, PostgreSQL, Redis, Groq AI',
      tech: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'Redis', icon: SiRedis },
        { name: 'Groq AI', icon: FaBrain }
      ],
      metrics: [
        { label: 'Analyse CV', value: '< 2s' },
        { label: 'Efficacité Flux', value: '+80%' },
        { label: 'Disponibilité', value: '99.9%' }
      ],
      image: NexoraImg,
      github: 'https://github.com/SandidHajar',
      demo: 'https://nexora-si.com/'
    },
    {
      id: 'freelancer-saas',
      title: 'SaaS Gestion Freelance',
      description: 'Plateforme centralisée pour le suivi et l\'automatisation des prestataires externes.',
      featured: true,
      impact: 'Traitement administratif 3x plus rapide',
      bullets: [
        'Chatbot n8n automatisé pour le support instantané des prestataires',
        'Suivi des missions et pipeline de facturation en temps réel',
        'Gestion granulaire des permissions pour les chefs d\'équipe'
      ],
      stack: 'React, Node.js, PostgreSQL, n8n',
      tech: [
        { name: 'React', icon: SiReact },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'n8n', icon: FaProjectDiagram }
      ],
      image: FreelancerImg,
      github: 'https://github.com/SandidHajar',
      demo: 'https://gestion-freelancer.vercel.app/'
    },
    {
      id: 'data-extractor',
      title: 'Data Extractor Premium',
      description: 'Extension Chrome Manifest V3 pour la génération automatisée de leads B2B.',
      featured: true,
      impact: 'Plus de 1000 leads extraits par heure',
      bullets: [
        'Extraction sémantique d\'emails, téléphones et liens sociaux',
        'Export instantané vers CSV/Excel pour les pipelines de vente',
        'Exécution isolée sécurisée Manifest V3'
      ],
      stack: 'JavaScript (V3), Chrome APIs, TailwindCSS',
      tech: [
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Chrome API', icon: SiJavascript },
        { name: 'TailwindCSS', icon: SiTailwindcss }
      ],
      image: ExtractorImg,
      github: 'https://github.com/SandidHajar/data-extracting-extention',
      demo: 'https://github.com/SandidHajar/data-extracting-extention'
    },
    {
      id: 'ai-gen',
      title: 'AI Image Generator',
      description: 'Application créative full-stack exploitant des modèles de vision de pointe.',
      featured: false,
      impact: 'Latence de génération inférieure à la seconde',
      bullets: [
        'Transformation Prompt-to-image via Gemini Vision API',
        'Galerie communautaire avec partage en temps réel via Supabase',
        'Gestion optimisée des coûts d\'API et limitation de débit'
      ],
      stack: 'React, Gemini API, Supabase, Vercel',
      tech: [
        { name: 'React', icon: SiReact },
        { name: 'Gemini API', icon: SiGooglecloud },
        { name: 'Supabase', icon: SiSupabase }
      ],
      image: ImgGenImg,
      github: 'https://github.com/SandidHajar',
      demo: 'https://images-ai-generator-xi.vercel.app/'
    },
    {
      id: 'cats-gallery',
      title: 'Cats Gallery Full-Stack',
      description: 'Application CRUD haute performance démontrant l\'architecture de base de données.',
      featured: false,
      impact: 'Intégrité des données entièrement relationnelle',
      bullets: [
        'Cycle de vie CRUD complet avec endpoints REST sécurisés',
        'Connexion SQL haute performance via TiDB Cloud',
        'Suites de tests API rigoureuses via Postman'
      ],
      stack: 'Node.js, Express, TiDB Cloud',
      tech: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express', icon: SiExpress },
        { name: 'TiDB Cloud', icon: HiDatabase }
      ],
      image: CatsImg,
      github: 'https://github.com/SandidHajar',
      demo: 'https://cats-galery.vercel.app/'
    }
  ]
};
