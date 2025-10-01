import React from "react";

const ShortFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
      © {year} IITGJobs. All rights reserved.
    </footer>
  );
};

export default ShortFooter;
