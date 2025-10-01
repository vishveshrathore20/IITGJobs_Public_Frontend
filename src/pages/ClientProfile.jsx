import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ClientProfile = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <Navbar />
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Company Profile</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Edit your company information and branding here.</p>
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">Coming soon...</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ClientProfile;
