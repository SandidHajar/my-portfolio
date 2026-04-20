import { 
  SiReact, SiNodedotjs, SiPostgresql, SiPrisma, 
  SiTailwindcss,
  SiJavascript, SiExpress, SiGooglecloud, SiSupabase,
} from 'react-icons/si';
import { HiDatabase, HiShieldCheck } from 'react-icons/hi';
import { FaBrain, FaProjectDiagram } from 'react-icons/fa';

import NexoraImg from '../components/Aside/ProjectsImages/nexora.png';
import FreelancerImg from '../components/Aside/ProjectsImages/freelancer.png';
import ExtractorImg from '../components/Aside/ProjectsImages/data-extractor-v2.png';
import AutomationImg from '../components/Aside/ProjectsImages/automation-v2.png';
import ImgGenImg from '../components/Aside/ProjectsImages/ai-generator-img.png';
import CatsImg from '../components/Aside/ProjectsImages/cats-gellery.jpg';

export const caseStudies = {
  fr: [
    {
      id: 'nexora',
      title: 'NEXORA - SaaS RH IA',
      tagline: 'Architecture SaaS multi-tenant avec moteur de workflows BPMS.',
      featured: true,
      problem: 'La gestion des RH en entreprise souffre de processus manuels lents, notamment pour le tri des CV et la gestion des workflows complexes.',
      solution: 'Une plateforme de pointe intégrant des LLM pour l\'analyse automatique de CV et un moteur BPMS pour automatiser les flux de travail RH.',
      architecture: 'Architecture scalable avec isolation des données multi-tenant, utilisant Node.js et PostgreSQL pour une performance optimale.',
      metrics: [
        { label: 'CV Analysis', value: '< 2s' },
        { label: 'Workflows', value: 'BPMS' },
        { label: 'Isolation', value: '100%' }
      ],
      features: [
        'Analyse sémantique de CV via IA Groq',
        'Moteur de processus métier (BPMS) dynamique',
        'Notifications en temps réel via SSE',
        'Stockage cloud optimisé (Cloudinary)'
      ],
      tech: [
        { name: 'React', icon: SiReact },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Prisma', icon: SiPrisma },
        { name: 'PostgreSQL', icon: SiPostgresql }
      ],
      image: NexoraImg,
      github: 'https://github.com/SandidHajar',
      demo: 'https://nexora-si.com/'
    },
    {
      id: 'freelancer-saas',
      title: 'SaaS Gestion Freelance',
      tagline: 'Pilotage de collaborateurs tiers et automatisation n8n.',
      featured: true,
      problem: 'Le suivi des missions et de la facturation des prestataires externes est souvent fragmenté et difficile à centraliser.',
      solution: 'Un tableau de bord complet avec chatbot automatisé via n8n pour fluidifier la communication et la gestion des flux.',
      architecture: 'Intégration d\'API de bas niveau avec des outils d\'automatisation low-code pour un déploiement rapide et efficace.',
      metrics: [
        { label: 'Automation', value: 'n8n' },
        { label: 'Support', value: 'Chatbot' },
        { label: 'Database', value: 'Postgres' }
      ],
      features: [
        'Chatbot intelligent pour le support tiers',
        'Workflows d\'automatisation logicielle',
        'Gestion granulaire des missions freelance',
        'Dashboard analytique en temps réel'
      ],
      tech: [
        { name: 'React', icon: SiReact },
        { name: 'n8n Logic', icon: FaProjectDiagram },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'PostgreSQL', icon: SiPostgresql }
      ],
      image: FreelancerImg,
      github: 'https://github.com/SandidHajar',
      demo: 'https://gestion-freelancer.vercel.app/'
    },
    {
      id: 'data-extractor',
      title: 'Data Extractor Premium',
      tagline: 'Extension Chrome V3 pour l’extraction massive de données.',
      featured: true,
      problem: 'La prospection commerciale nécessite des heures de recherche manuelle pour trouver des coordonnées de contact sur le web.',
      solution: 'Une extension Chrome haut de gamme capable de scanner n\'importe quel site pour extraire emails, téléphones et réseaux sociaux en un clic.',
      architecture: 'Développement Manifest V3 utilisant les Content Scripts et le Scripting API pour une injection sécurisée et furtive.',
      metrics: [
        { label: 'Extraction', value: 'Vitesse' },
        { label: 'Manifest', value: 'V3' },
        { label: 'Export', value: 'CSV/Excel' }
      ],
      features: [
        'Extraction sémantique d\'emails et téléphones',
        'Interface moderne en Glassmorphism',
        'Exportation instantanée vers Excel',
        'Détection automatique des liens sociaux'
      ],
      tech: [
        { name: 'JS V3', icon: SiJavascript },
        { name: 'Chrome API', icon: SiJavascript },
        { name: 'TailwindCSS', icon: SiTailwindcss }
      ],
      image: ExtractorImg,
      github: 'https://github.com/SandidHajar/data-extracting-extention',
      demo: 'https://github.com/SandidHajar/data-extracting-extention'
    },
    {
      id: 'automation-intel',
      title: 'Automation Intelligence',
      tagline: 'Scripts Tampermonkey pour l’importation de données cross-domain.',
      featured: false,
      problem: 'Le transfert de données entre sites web incompatibles ralentit les processus de saisie de formulaires répétitifs.',
      solution: 'Un système d\'automatisation utilisant le stockage local pour persister des identités fictives et les injecter intelligemment dans des formulaires.',
      architecture: 'Scripts de haut niveau gérant la synchronisation des données persistantes à travers plusieurs onglets et domaines.',
      metrics: [
        { label: 'Workflow', value: '+90%' },
        { label: 'Vitesse', value: 'Auto' },
        { label: 'Sécurité', value: 'Local' }
      ],
      features: [
        'Transfert de données cross-domain sécurisé',
        'Remplissage automatique de formulaires complexes',
        'Génération dynamique de mots de passe',
        'Notifications visuelles d\'état d\'avancement'
      ],
      tech: [
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'DOM Logic', icon: HiShieldCheck },
        { name: 'Persistence', icon: HiDatabase }
      ],
      image: AutomationImg,
      github: 'https://github.com/SandidHajar/Import_Data',
      demo: 'https://github.com/SandidHajar/Import_Data'
    },
    {
      id: 'ai-gen',
      title: 'Générateur d’Images IA',
      tagline: 'Application créative exploitant l’API Gemini Vision.',
      featured: false,
      problem: 'La création de visuels personnalisés à partir de descriptions textuelles nécessite souvent des outils complexes et coûteux.',
      solution: 'Une interface épurée permettant de transformer des prompts en designs uniques avec une galerie communautaire de partage.',
      architecture: 'Application serverless utilisant Vercel et Supabase pour une scalabilité immédiate et une réactivité optimale.',
      metrics: [
        { label: 'IA API', icon: FaBrain },
        { label: 'Model', value: 'Gemini' },
        { label: 'Cloud', value: 'Vercel' }
      ],
      features: [
        'Génération d\'images par prompt textuel',
        'Galerie persistante via Supabase',
        'Partage communautaire instantané',
        'Optimisation des coûts d\'API'
      ],
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
      tagline: 'Système CRUD complet avec API REST et DB TiDB.',
      featured: false,
      problem: 'Démontrer la maîtrise du cycle complet de développement, de la conception API aux validations de données en base.',
      solution: 'Un tableau de bord interactif gérant des données structurées, testé rigoureusement via Postman pour assurer la fiabilité.',
      architecture: 'Environnement distribué utilisant TiDB Cloud pour garantir l\'intégrité des données à grande échelle.',
      metrics: [
        { label: 'Backend', value: 'Node/Express' },
        { label: 'Testing', value: 'Postman' },
        { label: 'SQL', value: 'TiDB' }
      ],
      features: [
        'Cycle CRUD complet et sécurisé',
        'Tests d\'endpoints via Postman',
        'Interface responsive moderne',
        'Connexion SQL Cloud haute performance'
      ],
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
  en: [
    {
      id: 'nexora',
      title: 'NEXORA - AI HR SaaS',
      tagline: 'Multi-tenant SaaS Architecture with BPMS Workflow Engine.',
      featured: true,
      problem: 'Enterprise HR management suffers from slow manual processes, especially for resuming screening and complex workflow management.',
      solution: 'A state-of-the-art platform integrating LLMs for automated CV parsing and a BPMS engine to automate HR workflows.',
      architecture: 'Scalable architecture with multi-tenant data isolation, using Node.js and PostgreSQL for optimal performance.',
      metrics: [
        { label: 'CV Analysis', value: '< 2s' },
        { label: 'Workflows', value: 'BPMS' },
        { label: 'Isolation', value: '100%' }
      ],
      features: [
        'Semantic CV parsing via Groq AI',
        'Dynamic Business Process Management (BPMS)',
        'Real-time notifications via SSE',
        'Optimized cloud storage (Cloudinary)'
      ],
      tech: [
        { name: 'React', icon: SiReact },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Prisma', icon: SiPrisma },
        { name: 'PostgreSQL', icon: SiPostgresql }
      ],
      image: NexoraImg,
      github: 'https://github.com/SandidHajar',
      demo: 'https://nexora-si.com/'
    },
    {
      id: 'freelancer-saas',
      title: 'Freelance Management SaaS',
      tagline: 'Third-party collaborator tracking and n8n automation.',
      featured: true,
      problem: 'Tracking missions and invoicing for external contractors is often fragmented and difficult to centralize.',
      solution: 'A comprehensive dashboard with automated chatbot support via n8n to streamline communication and workflow management.',
      architecture: 'Integration of low-level APIs with low-code automation tools for rapid and efficient deployment.',
      metrics: [
        { label: 'Automation', value: 'n8n' },
        { label: 'Support', value: 'Chatbot' },
        { label: 'Database', value: 'Postgres' }
      ],
      features: [
        'Intelligent chatbot for third-party support',
        'Software automation workflows',
        'Granular freelance mission management',
        'Real-time analytical dashboard'
      ],
      tech: [
        { name: 'React', icon: SiReact },
        { name: 'n8n Logic', icon: FaProjectDiagram },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'PostgreSQL', icon: SiPostgresql }
      ],
      image: FreelancerImg,
      github: 'https://github.com/SandidHajar',
      demo: 'https://gestion-freelancer.vercel.app/'
    },
    {
      id: 'data-extractor',
      title: 'Data Extractor Premium',
      tagline: 'Chrome Manifest V3 Extension for massive data extraction.',
      featured: true,
      problem: 'Sales prospecting requires hours of manual research to find contact details efficiently on the web.',
      solution: 'A premium Chrome extension capable of scanning any site to extract emails, phones, and social networks in one click.',
      architecture: 'Manifest V3 development utilizing Content Scripts and the Scripting API for secure, stealthy injection.',
      metrics: [
        { label: 'Extraction', value: 'Speed' },
        { label: 'Manifest', value: 'V3' },
        { label: 'Export', value: 'CSV/Excel' }
      ],
      features: [
        'Semantic extraction of emails and phones',
        'Modern Glassmorphism interface',
        'Instant export to Excel',
        'Automatic detection of social links'
      ],
      tech: [
        { name: 'JS V3', icon: SiJavascript },
        { name: 'Chrome API', icon: SiJavascript },
        { name: 'TailwindCSS', icon: SiTailwindcss }
      ],
      image: ExtractorImg,
      github: 'https://github.com/SandidHajar/data-extracting-extention',
      demo: 'https://github.com/SandidHajar/data-extracting-extention'
    },
    {
      id: 'automation-intel',
      title: 'Automation Intelligence',
      tagline: 'Tampermonkey scripts for cross-domain data import.',
      featured: false,
      problem: 'Data transfer between incompatible websites slows down repetitive form-filling processes.',
      solution: 'An automation system using local storage to persist fictitious identities and intelligently inject them into forms.',
      architecture: 'High-level scripts managing persistent data synchronization across multiple tabs and domains.',
      metrics: [
        { label: 'Workflow', value: '+90%' },
        { label: 'Speed', value: 'Auto' },
        { label: 'Security', value: 'Local' }
      ],
      features: [
        'Secure cross-domain data transfer',
        'Automatic filling of complex forms',
        'Dynamic password generation',
        'Visual progress notifications'
      ],
      tech: [
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'DOM Logic', icon: HiShieldCheck },
        { name: 'Persistence', icon: HiDatabase }
      ],
      image: AutomationImg,
      github: 'https://github.com/SandidHajar/Import_Data',
      demo: 'https://github.com/SandidHajar/Import_Data'
    },
    {
      id: 'ai-gen',
      title: 'AI Image Generator',
      tagline: 'Creative app leveraging the Gemini Vision API.',
      featured: false,
      problem: 'Creating custom visuals from text descriptions often requires complex and expensive tools.',
      solution: 'A clean interface to transform prompts into unique designs, featuring a community gallery for sharing.',
      architecture: 'Serverless application using Vercel and Supabase for immediate scalability and optimal responsiveness.',
      metrics: [
        { label: 'IA API', icon: FaBrain },
        { label: 'Model', value: 'Gemini' },
        { label: 'Cloud', value: 'Vercel' }
      ],
      features: [
        'Image generation via text prompt',
        'Persistent gallery via Supabase',
        'Instant community sharing',
        'API cost optimization'
      ],
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
      tagline: 'Complete CRUD System with REST API and TiDB.',
      featured: false,
      problem: 'Demonstrate mastery of the full development lifecycle, from API design to database validation.',
      solution: 'An interactive dashboard managing structured data, rigorously tested via Postman to ensure reliability.',
      architecture: 'Distributed environment using TiDB Cloud to guarantee data integrity at scale.',
      metrics: [
        { label: 'Backend', value: 'Node/Express' },
        { label: 'Testing', value: 'Postman' },
        { label: 'SQL', value: 'TiDB' }
      ],
      features: [
        'Complete and secure CRUD lifecycle',
        'Endpoint testing via Postman',
        'Modern responsive interface',
        'High-performance Cloud SQL connection'
      ],
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
