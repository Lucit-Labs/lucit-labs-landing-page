'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  HeartPulse,
  Landmark,
  Shield,
  Workflow,
} from 'lucide-react';

const specialties = [
  {
    title: 'Medical Software',
    description:
      'Clinical-grade platforms with strong privacy boundaries, workflow automation, and regulatory readiness.',
    icon: HeartPulse,
  },
  {
    title: 'Economic & Fintech Software',
    description:
      'Secure financial and economic software focused on resilience, compliance, and real-world transaction scale.',
    icon: Landmark,
  },
  {
    title: 'Architectural Software',
    description:
      'Data-driven architecture tooling that improves planning, coordination, and long-term operational visibility.',
    icon: Building2,
  },
];

const capabilities = [
  'AI modernization for legacy and active platforms',
  'AI feature strategy, implementation, and iteration',
  'HIPAA compliance and protected health data controls',
  'Desktop and cloud-ready software delivery',
  'Secure software engineering for regulated domains',
];

export function LucitLandingPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f9fb] px-4 py-4 text-[#0f172a] md:px-6 lg:px-8">
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          opacity: [0.86, 0.96, 0.86],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
        style={{ backgroundSize: '500% 500%' }}
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,122,255,0.24)_0%,rgba(61,90,254,0.2)_40%,rgba(41,33,209,0.22)_78%,rgba(0,122,255,0.22)_100%)]"
      />
      <motion.div
        animate={{
          x: ['-12%', '7%', '-12%'],
          y: ['4%', '-3%', '4%'],
          rotate: [0, 2, 0],
        }}
        transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-44 top-[-180px] h-[620px] w-[920px] bg-[radial-gradient(ellipse_at_center,rgba(0,122,255,0.34)_0%,rgba(61,90,254,0.2)_44%,rgba(0,122,255,0)_76%)] blur-3xl"
      />
      <motion.div
        animate={{
          x: ['10%', '-8%', '10%'],
          y: ['-4%', '5%', '-4%'],
          rotate: [0, -2, 0],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.4,
        }}
        className="pointer-events-none absolute -right-48 bottom-[-180px] h-[640px] w-[980px] bg-[radial-gradient(ellipse_at_center,rgba(41,33,209,0.3)_0%,rgba(61,90,254,0.2)_44%,rgba(41,33,209,0)_76%)] blur-3xl"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30 mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="lucit-noise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.82"
              numOctaves="4"
              seed="42"
            >
              <animate
                attributeName="baseFrequency"
                values="0.82;0.62;0.92;0.74;0.82"
                dur="18s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="24">
              <animate
                attributeName="scale"
                values="24;34;20;30;24"
                dur="18s"
                repeatCount="indefinite"
              />
            </feDisplacementMap>
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          filter="url(#lucit-noise)"
          fill="#ffffff"
        />
      </svg>
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6">
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="w-full rounded-2xl border border-[#e2e8f0] bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_1px_2px_rgba(0,0,0,0.04)] md:p-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 md:gap-4">
            <div className="min-w-0 flex-1">
              <div className="rounded-xl p-0">
                <img
                  src={`${basePath}/Lucit-Logo-no-bg.png`}
                  alt="Lucit Labs logo"
                  className="h-16 w-auto max-w-full object-contain sm:h-20 md:h-28 lg:h-32"
                />
              </div>
            </div>
            <nav className="hidden items-center gap-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-2 lg:flex">
              <a
                className="rounded-lg px-5 py-2.5 text-[15px] font-semibold text-[#5b6782] transition-all hover:bg-white hover:text-[#0f172a] hover:shadow-sm"
                href="#"
              >
                Features
              </a>
              <a
                className="rounded-lg px-5 py-2.5 text-[15px] font-semibold text-[#5b6782] transition-all hover:bg-white hover:text-[#0f172a] hover:shadow-sm"
                href="#"
              >
                Solutions
              </a>
              <a
                className="rounded-lg px-5 py-2.5 text-[15px] font-semibold text-[#5b6782] transition-all hover:bg-white hover:text-[#0f172a] hover:shadow-sm"
                href="#"
              >
                AI Services
              </a>
            </nav>
            <motion.button
              type="button"
              whileHover={{ y: -1, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="rounded-xl bg-[linear-gradient(140deg,#007AFF_0%,#3D5AFE_52%,#2921D1_100%)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(61,90,254,0.28)] transition-[filter] hover:brightness-110 md:px-6 md:py-3 md:text-base"
            >
              Contact Sales
            </motion.button>
          </div>
        </motion.header>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
            className="flex flex-col items-start justify-center rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_1px_2px_rgba(0,0,0,0.04)] md:p-12 lg:col-span-8"
          >
            <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-[#0f172a] md:text-5xl lg:text-6xl">
              Modern Software Solutions,
              <br className="hidden md:block" /> for Modern Business Needs.
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[#64748b]">
              We specialize in medical, economical, and architectural software
              that scales with your business. We deliver AI modernization, AI
              feature development, HIPAA-compliant platforms, secure fintech
              systems, and desktop + cloud software experiences.
            </p>
            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <motion.button
                type="button"
                whileHover={{ y: -1.5, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(140deg,#007AFF_0%,#3D5AFE_52%,#2921D1_100%)] px-7 py-3.5 font-medium text-white shadow-sm transition-[filter] hover:brightness-110"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ y: -1 }}
                className="flex items-center justify-center rounded-xl border border-[#e2e8f0] px-7 py-3.5 font-medium text-[#0f172a] shadow-sm transition-colors hover:bg-[#f8fafc]"
              >
                View capabilities
              </motion.button>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.12 }}
            className="flex flex-col rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_1px_2px_rgba(0,0,0,0.04)] lg:col-span-4"
          >
            <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-[#64748b]">
              Core modules
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                'AI Modernization',
                'HIPAA Ready Infrastructure',
                'Secure Fintech Engineering',
                'Desktop + Cloud Platforms',
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-default rounded-xl border border-[#e2e8f0] bg-[#f7f9fb] p-4 text-sm font-semibold text-[#0f172a] shadow-sm transition-colors hover:border-[#3d5afe]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.aside>
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {specialties.map(({ title, description, icon: Icon }) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, ease: 'easeOut' }}
              whileHover={{ y: -2 }}
              className="rounded-2xl border border-[#e2e8f0] bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_1px_2px_rgba(0,0,0,0.04)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#c5d6ff] bg-[linear-gradient(140deg,rgba(0,122,255,0.12)_0%,rgba(61,90,254,0.15)_55%,rgba(41,33,209,0.18)_100%)] text-[#3d5afe]">
                <Icon size={20} />
              </div>
              <h2 className="mb-3 text-lg font-bold text-[#0f172a]">{title}</h2>
              <p className="text-sm leading-relaxed text-[#64748b]">
                {description}
              </p>
            </motion.article>
          ))}
        </section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.48, ease: 'easeOut', delay: 0.12 }}
          className="mb-8 rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_1px_2px_rgba(0,0,0,0.04)] md:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#c5d6ff] bg-[linear-gradient(140deg,rgba(0,122,255,0.1)_0%,rgba(61,90,254,0.14)_55%,rgba(41,33,209,0.16)_100%)] text-[#3d5afe]">
              <BrainCircuit size={20} />
            </div>
            <h2 className="text-xl font-bold text-[#0f172a]">
              Extended capabilities
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {capabilities.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-[#f7f9fb] p-4 text-sm font-medium text-[#0f172a] shadow-sm"
              >
                <CheckCircle2 className="text-[#3d5afe]" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <motion.div
            whileHover={{ y: -1.5 }}
            className="mt-6 flex items-center gap-2 rounded-xl border border-[#e2e8f0] bg-[#f7f9fb] p-4 text-sm text-[#64748b]"
          >
            <Workflow className="text-[#3d5afe]" size={18} />
            <Shield className="text-[#3d5afe]" size={18} />
            <span>
              Reliable delivery for regulated, secure, and high-impact software
              initiatives.
            </span>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}
