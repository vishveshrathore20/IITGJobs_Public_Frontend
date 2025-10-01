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

const AboutUs = () => {
  return (
    <>
       {/* About */}
      <motion.section id="about" className="relative bg-slate-50 py-16 dark:bg-slate-900"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-900" />
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              <span className="inline-flex h-2 w-2 rounded-full bg-blue-600" /> 30 Years of Legacy
            </div>
            <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl dark:text-white">About Us</h2>
            
            <motion.p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300" variants={fadeUp} custom={1}>
              IITGJobs is 30 years aged business house of HRs and successfully managing specialized recruitment services in every Industry domain pan India. Being an established player, we work closely with prominent Indian top fortune 500 companies. Having a strong presence nationally, our efforts are rewarding because we use state of art technology and our exclusive databank.
            </motion.p>
            <motion.ul className="mx-auto mt-4 max-w-3xl list-disc space-y-2 pl-6 text-sm text-slate-600 dark:text-slate-300" variants={fadeUp} custom={2}>
              <li>Pan-India delivery across every industry domain with seasoned HR expertise.</li>
              <li>Trusted partner to prominent Indian Fortune 500 companies.</li>
              <li>State-of-the-art technology stack powering sourcing and screening.</li>
              <li>Exclusive, continuously enriched talent databank.</li>
            </motion.ul>
          </motion.div>
         
        </div>
      </motion.section>
    </>
  );
};

export default AboutUs;
