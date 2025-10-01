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

const Home = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
        {/* Fullscreen Banner - shown first */}
        <motion.section id="home" className="relative"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <img
            src="/Banner1.png"
            alt="Homepage Banner"
            className="h-screen w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </motion.section>

        {/* Intro content below banner */}
        <motion.section className="relative isolate overflow-hidden"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-900 opacity-20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:py-24">
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm dark:border-blue-900/40 dark:bg-blue-900/30 dark:text-blue-300">
              30+ Years • Trusted HR Partner
            </span>
            <motion.h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-indigo-900 sm:text-4xl lg:text-5xl dark:from-blue-400 dark:to-indigo-300"
              variants={fadeUp} custom={1}>
              30+ Years of Building Careers & Businesses with Trusted HR Solutions
            </motion.h1>
            <motion.p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300"
              variants={fadeUp} custom={2}>
              Recruiting right, reducing attrition, and elevating HR excellence for organizations of all sizes. From talent acquisition to retention strategies and HR consulting — we deliver with experience and trust.
            </motion.p>
            <motion.div className="mt-6 flex flex-wrap items-center justify-center gap-3" variants={fadeUp} custom={3}>
              <button
                onClick={() => scrollTo('services')}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-[1.01] hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Hire Talent
              </button>
              <button
                onClick={() => scrollTo('services')}
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60"
              >
                Find a Job
              </button>
            </motion.div>
            <motion.div className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-slate-400" variants={fadeUp} custom={4}>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-indigo-500" /> Recruitment Excellence
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-sky-500" /> Attrition Control
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-violet-500" /> HR Expertise
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </motion.section>
    </>
  )
};

export default Home;
