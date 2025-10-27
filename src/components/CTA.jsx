import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star } from 'lucide-react';

export default function CTA() {
  return (
    <section id="pricing" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-white/5 to-emerald-400/10 p-8 sm:p-12">
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 right-0 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-white sm:text-3xl"
              >
                Choose your level of care
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                viewport={{ once: true }}
                className="mt-3 max-w-xl text-white/75"
              >
                Flat-rate plans with real people behind them. Cancel anytime.
              </motion.p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[{
                  name: 'Care', price: '$79/mo', features: ['Core updates & backups', 'Security monitoring', 'Email support']
                }, {
                  name: 'Care Pro', price: '$149/mo', features: ['Everything in Care', 'Speed optimization', 'On-demand fixes']
                }].map((p) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-white/10 bg-slate-900/40 p-6"
                  >
                    <div className="flex items-baseline justify-between">
                      <h4 className="text-lg font-semibold text-white">{p.name}</h4>
                      <span className="text-xl font-semibold text-emerald-300">{p.price}</span>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-white/75">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-emerald-400" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a href="#get-started" className="mt-6 inline-block rounded-full bg-emerald-400 px-4 py-2 text-slate-900 transition hover:bg-emerald-300">
                      Start {p.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <Star className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold text-white">Enterprise care available</h4>
                <p className="mt-2 text-white/70">
                  Need multi-site management, SLAs, or a custom workflow? We tailor plans for agencies and high-traffic sites.
                </p>
                <a href="#contact" className="mt-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:bg-white/10">
                  Talk to an expert
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/50">
          All plans include monthly reports, uptime monitoring, and friendly human support.
        </p>
      </div>
    </section>
  );
}
