import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import SplineScene from './SplineScene.jsx';

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.6, ease: 'easeOut' },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft radial background and gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-[32rem] rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      {/* Spline 3D Illustration (safe lazy load) */}
      <div className="absolute inset-0 opacity-70">
        <SplineScene scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode" />
      </div>

      {/* Gradient overlay to increase contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 sm:pt-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={item}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur"
          >
            <Shield className="h-4 w-4 text-emerald-400" />
            Peace-of-mind WordPress care for growing brands
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-semibold text-transparent sm:text-6xl"
          >
            Premium WordPress Maintenance Service
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            We keep your site updated, fast, and secure 24/7 — so you can focus on growing your business. Smooth performance, proactive protection, and elite support.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-slate-900 transition hover:bg-emerald-300"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              See what's included
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 grid grid-cols-1 gap-3 text-left sm:grid-cols-3"
          >
            {[ 
              { icon: <CheckCircle2 className="h-4 w-4 text-emerald-400" />, text: 'Daily Backups & Safe Updates' },
              { icon: <Zap className="h-4 w-4 text-emerald-400" />, text: 'Speed Optimization' },
              { icon: <Shield className="h-4 w-4 text-emerald-400" />, text: 'Security Monitoring 24/7' },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur">
                {f.icon}
                <span className="text-sm text-white/80">{f.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
