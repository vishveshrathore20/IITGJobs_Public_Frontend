import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext.jsx";

const ClientNavbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onLogout = () => {
    logout();
    navigate("/employer/login", { replace: true });
  };

  const activeClass = "text-blue-600 dark:text-blue-400";
  const baseClass = "text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <button className="sm:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle Menu">
            <svg className="h-6 w-6 text-slate-700 dark:text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <Link to="/client/dashboard" className="text-sm font-semibold tracking-wide text-slate-900 dark:text-white">
            IITGJobs Client
          </Link>
        </div>

        <nav className="hidden items-center gap-6 sm:flex">
          <NavLink to="/client/dashboard" className={({ isActive }) => `${isActive ? activeClass : baseClass} text-sm font-medium`}>
           Demo Dashboard
          </NavLink>
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          {user?.companyName && (
            <span className="text-xs text-slate-500 dark:text-slate-400">{user.companyName}</span>
          )}
          <button onClick={onLogout} className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600">
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900 sm:hidden">
          <div className="flex flex-col gap-3">
            <NavLink to="/client/dashboard" onClick={() => setOpen(false)} className={({ isActive }) => `${isActive ? activeClass : baseClass} text-sm font-medium`}>
              Dashboard
            </NavLink>
            <NavLink to="/client/jobs" onClick={() => setOpen(false)} className={({ isActive }) => `${isActive ? activeClass : baseClass} text-sm font-medium`}>
              Jobs
            </NavLink>
            <NavLink to="/client/applicants" onClick={() => setOpen(false)} className={({ isActive }) => `${isActive ? activeClass : baseClass} text-sm font-medium`}>
              Applicants
            </NavLink>
            <NavLink to="/client/profile" onClick={() => setOpen(false)} className={({ isActive }) => `${isActive ? activeClass : baseClass} text-sm font-medium`}>
              Profile
            </NavLink>
            <NavLink to="/client/support" onClick={() => setOpen(false)} className={({ isActive }) => `${isActive ? activeClass : baseClass} text-sm font-medium`}>
              Support
            </NavLink>
            <button onClick={() => { setOpen(false); onLogout(); }} className="mt-2 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600">
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default ClientNavbar;
