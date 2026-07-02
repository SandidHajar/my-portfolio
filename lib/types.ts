import type { IconType } from 'react-icons';
import type { StaticImageData } from 'next/image';

export type Locale = 'en' | 'fr';

export type TranslationSection = {
  [key: string]: string | string[] | TranslationSection;
};

export type TechItem = {
  name: string;
  icon: IconType;
};

export type MetricItem = {
  label: string;
  value: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  featured: boolean;
  problem?: string;
  solution?: string;
  impact: string;
  bullets: string[];
  stack: string;
  tech: TechItem[];
  metrics?: MetricItem[];
  image: string | StaticImageData;
  github: string;
  demo: string;
};

export type EducationItem = {
  title: string;
  school: string;
  date: string;
  location: string;
  description: string;
  highlights: string[];
};
