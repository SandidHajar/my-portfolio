'use client';

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed start-0 top-0 z-20 w-full px-3 pt-3 text-white sm:px-4">
      <div className="surface-panel mx-auto max-w-7xl rounded-[1.5rem] px-4 py-3 sm:px-6">
        <div className="flex items-center justify-end">
          <div className="hidden items-center gap-2 md:flex">
            <a href="#about" className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white">
              About Me
            </a>
            <a href="#my_skills" className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white">
              My Skills
            </a>
            <a href="#portfolio" className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white">
              Portfolio
            </a>
            <a href="#contact" className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white">
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-colors hover:bg-white/8"
              aria-label="Toggle navigation"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen ? (
        <div className="surface-panel mx-auto mt-3 max-w-7xl rounded-[1.5rem] px-3 py-3 md:hidden">
          <a href="#about" onClick={() => setIsOpen(false)} className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">
            About Me
          </a>
          <a href="#my_skills" onClick={() => setIsOpen(false)} className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">
            My Skills
          </a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">
            Portfolio
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">
            Contact
          </a>
        </div>
      ) : null}
    </header>
  );
}
