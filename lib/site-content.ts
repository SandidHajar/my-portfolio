import fs from 'fs/promises';
import path from 'path';
import type { Locale, ManagedEducationItem, ManagedProjectItem } from './types';

export type SiteContent = {
  cvUrl: string;
  cvLabel: string;
  featuredProjectId: string;
  extraProjects: Record<Locale, ManagedProjectItem[]>;
  extraEducation: Record<Locale, ManagedEducationItem[]>;
};

const CONTENT_PATH = path.join(process.cwd(), 'data', 'site-content.json');

const DEFAULT_CONTENT: SiteContent = {
  cvUrl: '/Hajar_Sandid_Full_Stack_Developpeur_Cv.pdf',
  cvLabel: 'CV Hajar Sandid',
  featuredProjectId: 'nexora',
  extraProjects: {
    en: [],
    fr: []
  },
  extraEducation: {
    en: [],
    fr: []
  }
};

export async function readSiteContent(): Promise<SiteContent> {
  try {
    const raw = await fs.readFile(CONTENT_PATH, 'utf8');
    const parsed = JSON.parse(raw) as Partial<SiteContent>;
    return {
      ...DEFAULT_CONTENT,
      ...parsed,
      extraProjects: {
        en: parsed.extraProjects?.en ?? DEFAULT_CONTENT.extraProjects.en,
        fr: parsed.extraProjects?.fr ?? DEFAULT_CONTENT.extraProjects.fr
      },
      extraEducation: {
        en: parsed.extraEducation?.en ?? DEFAULT_CONTENT.extraEducation.en,
        fr: parsed.extraEducation?.fr ?? DEFAULT_CONTENT.extraEducation.fr
      }
    };
  } catch {
    return DEFAULT_CONTENT;
  }
}

export async function writeSiteContent(content: SiteContent) {
  await fs.writeFile(CONTENT_PATH, JSON.stringify(content, null, 2), 'utf8');
}
