'use client';

import { useEffect, useMemo, useState } from 'react';
import { FaChevronDown, FaChevronUp, FaFilePdf, FaImage, FaLink, FaPlus, FaSave, FaTrash } from 'react-icons/fa';
import type { ManagedEducationItem, ManagedProjectItem } from '../../lib/types';

type AdminContent = {
  cvUrl: string;
  cvLabel: string;
  projects: ManagedProjectItem[];
  education: ManagedEducationItem[];
};

type PanelState = {
  projects: Record<string, boolean>;
  education: Record<string, boolean>;
};

const DEFAULT_CONTENT: AdminContent = {
  cvUrl: '/Hajar_Sandid_Full_Stack_Developpeur_Cv.pdf',
  cvLabel: 'CV Hajar Sandid',
  projects: [],
  education: []
};

function createId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-white/10 bg-black/20 px-5 py-8 text-center">
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">{children}</span>;
}

export default function AdminPage() {
  const [content, setContent] = useState<AdminContent>(DEFAULT_CONTENT);
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState('Chargement...');
  const [isSaving, setIsSaving] = useState(false);
  const [panels, setPanels] = useState<PanelState>({ projects: {}, education: {} });

  useEffect(() => {
    fetch('/api/site-content')
      .then((res) => res.json())
      .then((data) => {
        const projects = data.extraProjects?.en ?? [];
        const education = data.extraEducation?.en ?? [];

        setContent({
          cvUrl: data.cvUrl ?? DEFAULT_CONTENT.cvUrl,
          cvLabel: data.cvLabel ?? DEFAULT_CONTENT.cvLabel,
          projects,
          education
        });

        setPanels({
          projects: Object.fromEntries(projects.map((item: ManagedProjectItem) => [item.id, true])),
          education: Object.fromEntries(education.map((item: ManagedEducationItem) => [item.id, false]))
        });

        setStatus('Contenu charge depuis le serveur.');
      })
      .catch(() => setStatus('Impossible de charger le contenu.'))
      .finally(() => setReady(true));
  }, []);

  const serialized = useMemo(() => JSON.stringify(content, null, 2), [content]);

  const togglePanel = (group: 'projects' | 'education', id: string) => {
    setPanels((prev) => ({
      ...prev,
      [group]: {
        ...prev[group],
        [id]: !prev[group][id]
      }
    }));
  };

  const saveContent = async (next: AdminContent) => {
    setContent(next);
    setIsSaving(true);
    setStatus('Enregistrement en cours...');

    const response = await fetch('/api/site-content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(next)
    });

    setIsSaving(false);
    setStatus(response.ok ? 'Modifications enregistrees.' : 'Echec de sauvegarde.');
  };

  const updateProject = (id: string, field: keyof ManagedProjectItem, value: string) => {
    setContent((prev) => ({
      ...prev,
      projects: prev.projects.map((project) => (project.id === id ? { ...project, [field]: value } : project))
    }));
  };

  const updateEducation = (id: string, field: keyof ManagedEducationItem, value: string) => {
    setContent((prev) => ({
      ...prev,
      education: prev.education.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    }));
  };

  const uploadCv = async (file: File | null) => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    setStatus('Import du CV en cours...');

    const response = await fetch('/api/admin/upload-cv', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      setStatus('Echec de l import du CV.');
      return;
    }

    const result = await response.json();
    setContent((prev) => ({
      ...prev,
      cvUrl: result.cvUrl,
      cvLabel: result.cvLabel || prev.cvLabel
    }));
    setStatus('CV remplace avec succes. Pense a enregistrer si tu modifies aussi le contenu.');
  };

  const uploadProjectImage = async (id: string, file: File | null) => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    setStatus('Import de l image en cours...');

    const response = await fetch('/api/admin/upload-project-image', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      setStatus('Echec de l import de l image.');
      return;
    }

    const result = await response.json();
    setContent((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === id ? { ...project, image: result.imageUrl } : project
      )
    }));
    setStatus('Image du projet importee.');
  };

  const addProject = () => {
    const id = createId('project');
    setContent((prev) => ({
      ...prev,
      projects: [
        {
          id,
          title: 'Nouveau projet',
          description: 'Description du projet',
          image: '',
          github: '',
          demo: ''
        },
        ...prev.projects
      ]
    }));
    setPanels((prev) => ({
      ...prev,
      projects: { ...prev.projects, [id]: true }
    }));
    setStatus('Nouveau projet ajoute.');
  };

  const addEducation = () => {
    const id = createId('education');
    setContent((prev) => ({
      ...prev,
      education: [
        {
          id,
          title: 'Nouvelle formation',
          school: 'Ecole / organisme',
          location: 'Ville',
          date: '2026',
          description: 'Description de la formation',
          highlights: []
        },
        ...prev.education
      ]
    }));
    setPanels((prev) => ({
      ...prev,
      education: { ...prev.education, [id]: true }
    }));
    setStatus('Nouvelle formation ajoutee.');
  };

  const removeProject = (id: string) => {
    setContent((prev) => ({ ...prev, projects: prev.projects.filter((project) => project.id !== id) }));
    setStatus('Projet supprime.');
  };

  const removeEducation = (id: string) => {
    setContent((prev) => ({ ...prev, education: prev.education.filter((item) => item.id !== id) }));
    setStatus('Formation supprimee.');
  };

  return (
    <main className="min-h-screen bg-[#07111f] px-4 py-8 text-slate-100 md:px-8 md:py-10">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(156,254,234,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-2xl backdrop-blur-xl md:p-8">
          <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-[#9cfeea]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#ffa69e]/10 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#9cfeea]">Admin prive</p>
              <h1 className="mt-3 text-3xl font-semibold md:text-5xl">Gestion du contenu</h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                Une interface plus simple pour remplacer le CV, ajouter des projets et mettre a jour les formations sans
                te perdre dans les champs techniques.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <StatCard label="Projets" value={content.projects.length} />
              <StatCard label="Formations" value={content.education.length} />
              <StatCard label="Etat" value={isSaving ? 'Sauvegarde' : 'Pret'} />
            </div>
          </div>
        </section>

        <div className="sticky top-4 z-30 mt-6 rounded-2xl border border-white/10 bg-[rgba(7,17,31,0.82)] px-4 py-4 shadow-xl backdrop-blur-xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Statut</p>
              <p className="mt-1 text-sm text-slate-300">{status}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={addProject}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-semibold text-white transition hover:bg-white/[0.08]"
              >
                <FaPlus /> Projet
              </button>
              <button
                onClick={addEducation}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-semibold text-white transition hover:bg-white/[0.08]"
              >
                <FaPlus /> Formation
              </button>
              <button
                onClick={() => saveContent(content)}
                disabled={!ready || isSaving}
                className="inline-flex items-center gap-2 rounded-xl bg-[#9cfeea] px-5 py-3 font-semibold text-slate-950 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FaSave /> {isSaving ? 'Enregistrement...' : 'Enregistrer'}
              </button>
            </div>
          </div>
        </div>

        <section className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.15fr_0.95fr]">
          <div className="space-y-6 xl:col-span-1">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-rose-300/15 p-3 text-rose-300">
                  <FaFilePdf />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">CV</h2>
                  <p className="mt-1 text-sm text-slate-400">Import direct du fichier PDF</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                <FieldLabel>Fichier actuel</FieldLabel>
                <p className="text-sm font-semibold text-white">{content.cvLabel}</p>
                <p className="mt-1 break-all text-xs text-slate-500">{content.cvUrl}</p>
                <label className="mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-rose-300 px-4 py-3 font-semibold text-slate-950 transition hover:brightness-105">
                  <FaFilePdf /> Remplacer le CV
                  <input
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                    onChange={(e) => uploadCv(e.target.files?.[0] ?? null)}
                  />
                </label>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl">
              <h2 className="text-xl font-semibold">Apercu JSON</h2>
              <p className="mt-2 text-sm text-slate-400">Utile pour verifier rapidement ce qui sera sauvegarde.</p>
              <pre className="mt-4 max-h-[420px] overflow-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-xs leading-6 text-slate-300">
                {serialized}
              </pre>
            </div>
          </div>

          <div className="space-y-6 xl:col-span-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold">Projets</h2>
                  <p className="mt-1 text-sm text-slate-400">Image, titre, description, GitHub et live demo.</p>
                </div>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  {content.projects.length} elements
                </span>
              </div>

              <div className="mt-5 space-y-4">
                {content.projects.length === 0 && (
                  <EmptyState title="Aucun projet supplementaire" text="Ajoute un projet pour enrichir la grille visible sur le portfolio." />
                )}

                {content.projects.map((project, index) => {
                  const isOpen = panels.projects[project.id] ?? true;

                  return (
                    <article key={project.id} className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                      <button
                        type="button"
                        onClick={() => togglePanel('projects', project.id)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/[0.03]"
                      >
                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Projet {index + 1}</p>
                          <h3 className="mt-1 truncate text-lg font-semibold text-white">{project.title || 'Projet sans titre'}</h3>
                          <p className="mt-1 truncate text-sm text-slate-400">{project.demo || project.github || 'Ajoute tes liens et ton image'}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          {project.image ? (
                            <img src={project.image} alt={project.title} className="h-14 w-20 rounded-xl object-cover" />
                          ) : (
                            <div className="flex h-14 w-20 items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/[0.03] text-slate-500">
                              <FaImage />
                            </div>
                          )}
                          {isOpen ? <FaChevronUp className="text-slate-400" /> : <FaChevronDown className="text-slate-400" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="border-t border-white/10 px-5 py-5">
                          <div className="grid gap-4 md:grid-cols-2">
                            <label className="block md:col-span-2">
                              <FieldLabel>Titre</FieldLabel>
                              <input value={project.title} onChange={(e) => updateProject(project.id, 'title', e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#9cfeea]" placeholder="Titre du projet" />
                            </label>
                            <label className="block md:col-span-2">
                              <FieldLabel>Description</FieldLabel>
                              <textarea value={project.description} onChange={(e) => updateProject(project.id, 'description', e.target.value)} className="min-h-[120px] w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#9cfeea]" placeholder="Description courte et claire" />
                            </label>
                            <label className="block">
                              <FieldLabel>GitHub</FieldLabel>
                              <div className="relative">
                                <FaLink className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                <input value={project.github} onChange={(e) => updateProject(project.id, 'github', e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pl-11 pr-4 text-white outline-none transition focus:border-[#9cfeea]" placeholder="https://github.com/..." />
                              </div>
                            </label>
                            <label className="block">
                              <FieldLabel>Live demo</FieldLabel>
                              <div className="relative">
                                <FaLink className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                <input value={project.demo} onChange={(e) => updateProject(project.id, 'demo', e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pl-11 pr-4 text-white outline-none transition focus:border-[#9cfeea]" placeholder="https://..." />
                              </div>
                            </label>
                            <label className="block md:col-span-2">
                              <FieldLabel>URL image</FieldLabel>
                              <input value={project.image} onChange={(e) => updateProject(project.id, 'image', e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#9cfeea]" placeholder="/uploads/projects/... ou URL externe" />
                            </label>
                          </div>

                          <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                              <p className="text-sm font-semibold text-white">Image du projet</p>
                              <p className="mt-1 text-sm text-slate-400">Importe une image ou colle une URL si tu preferes.</p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                              <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-semibold text-white transition hover:bg-white/[0.08]">
                                <FaImage /> Importer une image
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={(e) => uploadProjectImage(project.id, e.target.files?.[0] ?? null)}
                                />
                              </label>
                              <button onClick={() => removeProject(project.id)} className="inline-flex items-center gap-2 rounded-xl border border-rose-300/20 bg-rose-300/10 px-4 py-3 font-semibold text-rose-300 transition hover:bg-rose-300/15">
                                <FaTrash /> Supprimer
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold">Formations</h2>
                  <p className="mt-1 text-sm text-slate-400">Ajoute des formations supplementaires sans toucher au contenu principal.</p>
                </div>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  {content.education.length} elements
                </span>
              </div>

              <div className="mt-5 space-y-4">
                {content.education.length === 0 && (
                  <EmptyState title="Aucune formation supplementaire" text="Ajoute une formation si tu veux completer le parcours deja present sur la page." />
                )}

                {content.education.map((item, index) => {
                  const isOpen = panels.education[item.id] ?? false;

                  return (
                    <article key={item.id} className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                      <button
                        type="button"
                        onClick={() => togglePanel('education', item.id)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/[0.03]"
                      >
                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Formation {index + 1}</p>
                          <h3 className="mt-1 truncate text-lg font-semibold text-white">{item.title || 'Formation sans titre'}</h3>
                          <p className="mt-1 truncate text-sm text-slate-400">{item.school || 'Ecole / organisme'} · {item.date || 'Date'}</p>
                        </div>
                        {isOpen ? <FaChevronUp className="text-slate-400" /> : <FaChevronDown className="text-slate-400" />}
                      </button>

                      {isOpen && (
                        <div className="border-t border-white/10 px-5 py-5">
                          <div className="grid gap-4 md:grid-cols-2">
                            <label className="block md:col-span-2">
                              <FieldLabel>Titre</FieldLabel>
                              <input value={item.title} onChange={(e) => updateEducation(item.id, 'title', e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#9cfeea]" placeholder="Titre de la formation" />
                            </label>
                            <label className="block">
                              <FieldLabel>Ecole</FieldLabel>
                              <input value={item.school} onChange={(e) => updateEducation(item.id, 'school', e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#9cfeea]" placeholder="Ecole / organisme" />
                            </label>
                            <label className="block">
                              <FieldLabel>Date</FieldLabel>
                              <input value={item.date} onChange={(e) => updateEducation(item.id, 'date', e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#9cfeea]" placeholder="2025 - 2026" />
                            </label>
                            <label className="block md:col-span-2">
                              <FieldLabel>Localisation</FieldLabel>
                              <input value={item.location} onChange={(e) => updateEducation(item.id, 'location', e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#9cfeea]" placeholder="Ville / pays" />
                            </label>
                            <label className="block md:col-span-2">
                              <FieldLabel>Description</FieldLabel>
                              <textarea value={item.description} onChange={(e) => updateEducation(item.id, 'description', e.target.value)} className="min-h-[120px] w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#9cfeea]" placeholder="Description de la formation" />
                            </label>
                          </div>

                          <div className="mt-5 flex justify-end">
                            <button onClick={() => removeEducation(item.id)} className="inline-flex items-center gap-2 rounded-xl border border-rose-300/20 bg-rose-300/10 px-4 py-3 font-semibold text-rose-300 transition hover:bg-rose-300/15">
                              <FaTrash /> Supprimer
                            </button>
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

