import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------
// 1. Recruitment Service Configuration Data (Externalized Content)
// ----------------------------------------------------------------------
const recruitmentServiceData = {
  // Main Hero Section
  title: "Recruitment Services – Preferred Partner Model (PPM)",
  subtitle: "Seamless, tech-driven, and cost-effective hiring across roles and levels.",
  
  // Detailed Description Section (using inner HTML for rich text)
  descriptionHtml: `
    We are specialized recruitment service providers under our tech-driven <strong>Preferred Partner Model (PPM)</strong>. 
    Our recruitment solutions are designed to <strong>bridge workforce gaps quickly and cost-effectively</strong>, ensuring your business continuity and growth. 
    We offer end-to-end recruitment services under our very special tech-driven model known as PPM, which is at the unheard pricing mentioned below.
  `,

  // Key Features Section (includes commercial structure)
  features: [
    {
      title: "Commercial Structure & Key Benefits",
      // Icon related to agreements/value
      iconPath: "M12 2l4 4-4 4-4-4 4-4z", 
      items: [
        "Unmatched Hiring Rates: Just <strong>2% of the CTC</strong> across all hiring levels (T&C apply).",
        "For positions with a CTC below <strong>₹10 LPA</strong> – a flat fee of <strong>₹20,000 per hire</strong>.",
        "<strong>Tech-Driven Process:</strong> Seamless, efficient, and hassle-free recruitment.",
      ],
      iconBg: "from-indigo-50 to-indigo-100 text-indigo-600 dark:from-indigo-900/30 dark:to-indigo-800/30 dark:text-indigo-300",
    },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" },
  }),
};

// ----------------------------------------------------------------------
// 2. Component Structure
// ----------------------------------------------------------------------
const RecruitmentService = () => {
  const navigate = useNavigate();
  const data = recruitmentServiceData; 

  const handleDemoClick = () => {
    // Assuming a similar demo route as your attrition page
    navigate("/employer/signup"); 
  };

  const handleOverviewClick = () => {
    navigate("/employer/login"); 
  };


  // Helper function to render a feature card
  const FeatureCard = ({ title, iconPath, items, iconBg, customIndex }) => (
    <motion.div
      className="group rounded-2xl border border-slate-200 bg-white/95 p-6 text-left shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-blue-200 dark:border-slate-700 dark:bg-slate-800/90 dark:hover:ring-slate-600"
      variants={fadeUp}
      custom={customIndex}
    >
      <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${iconBg}`}>
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={iconPath} />
        </svg>
      </div>
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-600 dark:text-slate-300">
        {items.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </motion.div>
  );

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
                {data.title}
              </h1>
              <p className="mt-2 mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-300">
                {data.subtitle}
              </p>

              {/* Display detailed description from data */}
              <p 
                className="mt-4 mx-auto max-w-3xl text-base text-slate-700 dark:text-slate-300"
                dangerouslySetInnerHTML={{ __html: data.descriptionHtml }}
              />
            </motion.div>

            {/* --- Buttons Group --- */}
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

              {/* Secondary Outline Button: Quick Overview */}
              <button
                onClick={handleOverviewClick}
                className="inline-flex items-center justify-center rounded-full border border-blue-600 bg-transparent px-6 py-3 text-base font-medium text-blue-600 shadow-md transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-slate-800 dark:focus:ring-offset-slate-900"
              >
                Demo
              </button>
            </motion.div>
          </div>

          {data.features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              iconPath={feature.iconPath}
              items={feature.items}
              iconBg={feature.iconBg}
              customIndex={index + 2} // Starts animation index at 2
            />
          ))}

        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default RecruitmentService;