import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

export const BentoGrid = ({ items = [] }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {items.map((it) => (
        <motion.div
          key={it.to}
          variants={itemVariants}
          whileHover={{ y: -3 }}
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition dark:border-slate-700 dark:bg-slate-800"
        >
          {it.imageLarge ? (
            <Link to={it.to} className="block">
              <div className="overflow-hidden rounded-md bg-slate-100 dark:bg-slate-700 aspect-[16/9]">
                {it.image && (
                  <img
                    src={it.image}
                    alt={it.title || ""}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="mt-3">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{it.title}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{it.desc}</p>
              </div>
            </Link>
          ) : (
            <Link to={it.to} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                {it.image ? (
                  <img
                    src={it.image}
                    alt={it.title || ""}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  it.icon
                )}
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{it.title}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{it.desc}</p>
              </div>
            </Link>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BentoGrid;
