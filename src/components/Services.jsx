import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Wrench, Zap, Clock, Server, RefreshCw } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Security & Monitoring',
    desc: '24/7 firewall, malware scans, uptime monitoring, and proactive patching to keep threats out.'
  },
  {
    icon: Wrench,
    title: 'Safe Updates',
    desc: 'Core, theme, and plugin updates in a staging flow with visual regression checks.'
  },
  {
    icon: Zap,
    title: 'Speed Optimization',
    desc: 'Image compression, caching layers, database cleanup, and Core Web Vitals tuning.'
  },
  {
    icon: Clock,
    title: 'Daily Backups',
    desc: 'Off-site, encrypted backups with one-click restores for total peace of mind.'
  },
  {
    icon: Server,
    title: 'Hosting & CDN Ready',
    desc: 'Works seamlessly with leading hosts and CDNs. We speak DevOps so you don’t have to.'
  },
  {
    icon: RefreshCw,
    title: 'On-demand Fixes',
    desc: 'Broken layout? Plugin conflict? We jump in fast and get you back online.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Everything your WordPress site needs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true }}
            className="mx-auto mt-3 max-w-2xl text-white/70"
          >
            A proactive maintenance stack built for performance, reliability, and growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              viewport={{ once: true, margin: '-100px' }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.07]"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="pointer-events-none absolute -top-24 right-0 h-48 w-48 rounded-full bg-emerald-500/20 blur-2xl" />
              </div>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                {React.createElement(s.icon, { className: 'h-5 w-5' })}
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
