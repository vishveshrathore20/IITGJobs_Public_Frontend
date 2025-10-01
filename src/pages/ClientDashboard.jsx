import React from "react";
import { Link } from "react-router-dom";
import ClientNavbar from "../components/ClientNavbar.jsx";
import ShortFooter from "../components/ShortFooter";
import { useAuth } from "../context/authcontext.jsx";
import BentoGrid from "../components/BentoGrid.jsx";
import { motion } from "framer-motion";

const Card = ({ to, title, desc, icon }) => (
  <Link
    to={to}
    className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
  >
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{desc}</p>
      </div>
    </div>
  </Link>
);

const ClientDashboard = () => {
  const { user, isCorporate, isAuthenticated } = useAuth();
  const displayName = user?.hrName || user?.name || (isCorporate ? user?.companyName : "Client");
  const hours = new Date().getHours();
  const timedGreeting = hours < 5
    ? "Good night"
    : hours < 12
    ? "Good morning"
    : hours < 17
    ? "Good afternoon"
    : "Good evening";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <ClientNavbar />

      {/* Simple Hero */}
      <section className="relative py-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-900" />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mx-auto max-w-6xl px-4 sm:px-6"
        >
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Hello{displayName ? `, ${displayName}` : ""}
          </h1>
          <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">{timedGreeting}</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {user?.companyName ? user.companyName : "Your company"}
            {user?.designation ? ` • ${user.designation}` : ""}
          </p>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Welcome to your dashboard. Use the quick actions below to get started.
          </p>
        </motion.div>
      </section>

      {/* Quick actions grid */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Quick actions</h2>
          <div className="mt-5">
            <BentoGrid
              items={[
                {
                  to: "/client/jobs",
                  title: "Demo",
                  desc: "Access Confidential Data & Information",
                  image:
                    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=600&auto=format&fit=crop",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                      <path d="M2.25 13.5A2.25 2.25 0 0 1 4.5 11.25h15a2.25 2.25 0 0 1 2.25 2.25v4.125A2.625 2.625 0 0 1 19.125 20.25H4.875A2.625 2.625 0 0 1 2.25 17.625V13.5Z" />
                      <path d="M8.25 7.125C8.25 6.089 9.089 5.25 10.125 5.25h3.75c1.036 0 1.875.839 1.875 1.875V9h-7.5V7.125Z" />
                    </svg>
                  ),
                },
                // {
                //   to: "/client/applicants",
                //   title: "Post a Job",
                //   desc: "Post a job to get applicants.",
                //   icon: (
                //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                //       <path fillRule="evenodd" d="M7.5 6.75A3.75 3.75 0 1 1 11.25 10.5 3.75 3.75 0 0 1 7.5 6.75Zm0 6a5.25 5.25 0 0 0-5.25 5.25.75.75 0 0 0 .75.75h9a.75.75 0 0 0 .75-.75A5.25 5.25 0 0 0 7.5 12.75Z" clipRule="evenodd" />
                //       <path d="M15 10.5a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0Z" />
                //     </svg>
                //   ),
                // },
                // {
                //   to: "/client/profile",
                //   title: "Search Profile",
                //   desc: "Search Resumes and Candidate Information",
                //   icon: (
                //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                //       <path d="M3.75 3A.75.75 0 0 0 3 3.75v16.5a.75.75 0 0 0 .75.75h5.25v-9h6v9h5.25a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 20.25 3H3.75Z" />
                //     </svg>
                //   ),
                // },
                  // {
                  //   to: "/client/support",
                  //   title: "Support",
                  //   desc: "Get help and contact support.",
                  //   icon: (
                  //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  //       <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75S6.615 21.75 12 21.75 21.75 17.385 21.75 12 17.385 2.25 12 2.25Zm.75 14.25a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5ZM12 6a3.75 3.75 0 0 0-3.75 3.75.75.75 0 0 0 1.5 0A2.25 2.25 0 1 1 12 12a.75.75 0 0 0-.75.75v.375a.75.75 0 0 0 1.5 0v-.085A3.75 3.75 0 0 0 12 6Z" clipRule="evenodd" />
                  //     </svg>
                  //   ),
                  // },
              ]}
            />
          </div>
        </div>
      </section>

      <ShortFooter />
    </div>
  );
};

export default ClientDashboard;

