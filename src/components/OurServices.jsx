import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" },
  }),
};

const OurServices = () => {
  return (
    <>
        {/* Services */}
      <motion.section id="services" className="relative bg-slate-50 py-16 dark:bg-slate-900"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-900" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">Our Services</h2>
              <p className="mt-2 mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-300">From hiring to retention and continuous growth, we deliver end-to-end HR solutions that create real business impact.</p>
            </motion.div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:auto-rows-[1fr] md:grid-cols-6">
            {/* PPM - Large tile */}
            <motion.div
              className="group col-span-1 rounded-2xl border border-slate-200 bg-white/95 p-6 text-center shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-blue-200 dark:border-slate-700 dark:bg-slate-800/90 dark:hover:ring-slate-600 md:col-span-3 md:row-span-2"
              variants={fadeUp}
              custom={0}
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-600 dark:from-indigo-900/30 dark:to-indigo-800/30 dark:text-indigo-300">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l4 4-4 4-4-4 4-4z"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recruitment Services – Preferred Partner Model (PPM)</h3>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-left text-sm text-slate-600 dark:text-slate-300">
                <li>Unmatched Hiring Rates: Just 2% of the CTC across levels (T&C apply).</li>
                <li>Tech-Driven Process: Seamless, efficient, and hassle-free recruitment.</li>
              </ul>
            </motion.div>

            {/* Attrition Control - Tall tile */}
            <motion.div
              className="group col-span-1 rounded-2xl border border-slate-200 bg-white/95 p-6 text-center shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-blue-200 dark:border-slate-700 dark:bg-slate-800/90 dark:hover:ring-slate-600 md:col-span-3 md:row-span-2"
              variants={fadeUp}
              custom={1}
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 text-sky-600 dark:from-sky-900/30 dark:to-sky-800/30 dark:text-sky-300">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Attrition Control</h3>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-left text-sm text-slate-600 dark:text-slate-300">
                <li>HR Alert Reports: AI-driven insights to detect potential attrition.</li>
                <li>HR Retention Team: Collaborative strategies with your HR team for employee retention.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default OurServices;
