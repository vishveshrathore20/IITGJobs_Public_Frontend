import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" },
  }),
};

const AttritionService = () => {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    navigate("/employer/signup"); // 👉 route for demo request
  };

  const handleContactClick = () => {
    navigate("/employer/login"); // 👉 route for sales page
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <Navbar />
      <motion.section
        className="relative bg-slate-50 py-16 dark:bg-slate-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-900" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <motion.div variants={fadeUp}>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                Attrition Control
              </h1>
              <p className="mt-2 mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-300">
                Proactive insights and retention strategies powered by people
                analytics.
              </p>

              {/* 🔥 Added new description about Churn Control Model */}
              <p className="mt-4 mx-auto max-w-3xl text-sm text-slate-700 dark:text-slate-300">
                Our <strong>Attrition Control</strong> is a ground-breaking
                solution designed to reduce employee attrition by up to{" "}
                <strong>80%</strong>. Using advanced AI, our tool generates{" "}
                <strong>HR Alert Reports</strong> – a list of employees who are
                actively involved in reemployment activity and are most likely
                to leave in the near future.
              </p>
            </motion.div>

            {/* --- Updated Buttons Group --- */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="mt-6 flex flex-wrap justify-center gap-3"
            >
              {/* Primary Button: Request a Demo */}
              <button
                onClick={handleDemoClick}
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                Request a Demo
              </button>

              {/* Secondary Outline Button: Contact Sales */}
              <button
                onClick={handleContactClick}
                className="inline-flex items-center justify-center rounded-full border border-blue-600 bg-transparent px-6 py-3 text-base font-medium text-blue-600 shadow-md transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-slate-800 dark:focus:ring-offset-slate-900"
              >
                Demo
              </button>
            </motion.div>
            {/* ------------------------------------------- */}
          </div>

          <motion.div
            className="group rounded-2xl border border-slate-200 bg-white/95 p-6 text-left shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-blue-200 dark:border-slate-700 dark:bg-slate-800/90 dark:hover:ring-slate-600"
            variants={fadeUp}
            custom={2}
          >
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 text-sky-600 dark:from-sky-900/30 dark:to-sky-800/30 dark:text-sky-300">
              {/* Icon related to graphs/monitoring for 'Attrition Control' */}
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3v18h18" />
                <path d="M18 17l-3-3-4 4-5-5" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Key Features
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <strong>Attrition Control:</strong> Reduces employee attrition
                by up to 80% with predictive AI analysis.
              </li>
              <li>
                <strong>HR Alert Reports:</strong> Identifies employees engaged
                in reemployment activity and flags probable attrition risks.
              </li>
              <li>
                <strong>HR Retention Team Collaboration:</strong> Dedicated
                support to collaborate with your HR team on implementing
                effective retention strategies.
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default AttritionService;
