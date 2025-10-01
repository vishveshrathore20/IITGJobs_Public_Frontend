import React, { useState } from "react";

const initialState = { name: "", email: "", phone: "", message: "" };

const ContactForm = () => {
  const [values, setValues] = useState(initialState);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const setField = (k, v) => setValues((s) => ({ ...s, [k]: v }));
  const onBlur = (k) => setTouched((t) => ({ ...t, [k]: true }));

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);
  const phoneValid = values.phone === "" || /^\+?[0-9\s-]{7,15}$/.test(values.phone);
  const nameValid = values.name.trim().length >= 2;
  const messageValid = values.message.trim().length >= 10;

  const canSubmit = emailValid && phoneValid && nameValid && messageValid;

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    if (!canSubmit) return;
    // Demo: just mark submitted. Integrate API/email service here.
    setSubmitted(true);
    setValues(initialState);
  };

  return (
    <section id="contact" className="relative bg-slate-50 py-16 dark:bg-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-900" />
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">Contact Us</h1>
        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-300">
          Send Us Your Concern and Queries
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4 text-left">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Full Name</label>
            <input
              type="text"
              value={values.name}
              onChange={(e) => setField("name", e.target.value)}
              onBlur={() => onBlur("name")}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              placeholder="---"
              required
            />
            {touched.name && !nameValid && (
              <p className="mt-1 text-xs text-red-600">Please enter at least 2 characters.</p>
            )}
          </div>
          

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
              <input
                type="email"
                value={values.email}
                onChange={(e) => setField("email", e.target.value)}
                onBlur={() => onBlur("email")}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                placeholder="you@company.com"
                required
              />
              {touched.email && !emailValid && (
                <p className="mt-1 text-xs text-red-600">Please enter a valid email.</p>
              )}
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Phone (optional)</label>
              <input
                type="tel"
                value={values.phone}
                onChange={(e) => setField("phone", e.target.value)}
                onBlur={() => onBlur("phone")}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                placeholder="--"
              />
              {touched.phone && !phoneValid && (
                <p className="mt-1 text-xs text-red-600">Enter a valid phone number.</p>
              )}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Message</label>
            <textarea
              value={values.message}
              onChange={(e) => setField("message", e.target.value)}
              onBlur={() => onBlur("message")}
              rows={5}
              className="w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              placeholder="Briefly describe your requirement..."
              required
            />
            {touched.message && !messageValid && (
              <p className="mt-1 text-xs text-red-600">Please enter at least 10 characters.</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-[1.01] hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              disabled={!canSubmit}
            >
              Send Message
            </button>
            {submitted && (
              <span className="text-xs text-emerald-600">Thanks! We will reach out shortly.</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
