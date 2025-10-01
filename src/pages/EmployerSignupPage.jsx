import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BASE_URL } from "../config";
import { toast } from "react-hot-toast";

const initial = {
  companyName: "",
  industryType: "",
  hrName: "",
  mobile: "",
  email: "",
  designation: "",
  employeeStrength: "",
  password: "",
  location: "",
  productLine: "",
};

const EmployerSignupPage = () => {
  const [values, setValues] = useState(initial);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);

  const notify = (message, type = "info") => {
    if (type === "success") return toast.success(message);
    if (type === "error") return toast.error(message);
    return toast(message);
  };

  const setField = (k, v) => setValues((s) => ({ ...s, [k]: v }));
  const onBlur = (k) => setTouched((t) => ({ ...t, [k]: true }));

  // Validations
  const nameValid = values.companyName.trim().length >= 2;
  const industryValid = values.industryType.trim().length >= 2;
  const hrValid = values.hrName.trim().length >= 2;
  const phoneValid = /^\+?[0-9\s-]{7,15}$/.test(values.mobile);
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);
  const designationValid = values.designation.trim().length >= 2;
  const strengthValid = values.employeeStrength === "" || /^[0-9]+$/.test(values.employeeStrength);
  const passwordValid = typeof values.password === "string" && values.password.length >= 6;
  const locationValid = values.location.trim().length >= 2;
  const productLineValid = values.productLine.trim().length >= 2;

  const canSubmit =
    nameValid &&
    industryValid &&
    hrValid &&
    phoneValid &&
    emailValid &&
    designationValid &&
    strengthValid &&
    passwordValid &&
    locationValid &&
    productLineValid;

  const onSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      companyName: true,
      industryType: true,
      hrName: true,
      mobile: true,
      email: true,
      designation: true,
      employeeStrength: true,
      password: true,
      location: true,
      productLine: true,
    });
    if (!canSubmit) return;
    setLoading(true);
    setError("");
    setSuccessMsg("");

    try {
      const API_BASE = BASE_URL || "";
      const url = `${API_BASE}/api/recruitment/create/corporate-account`;

      const payload = {
        companyName: values.companyName.trim(),
        industryType: values.industryType.trim(),
        hrName: values.hrName.trim(),
        mobile: values.mobile.trim(),
        email: values.email.trim(),
        designation: values.designation.trim(),
        password: values.password,
        location: values.location.trim(),
        productLine: values.productLine.trim(),
      };
      if (values.employeeStrength !== "") {
        payload.employeeStrength = Number(values.employeeStrength);
      }

      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await resp.json().catch(() => ({}));

      if (!resp.ok) {
        const message = data?.message || `Request failed with status ${resp.status}`;
        setError(message);
        notify(message, "error");
        setSubmitted(false);
      } else {
        setSubmitted(true);
        setSuccessMsg(data?.message || "OTP sent to your email. Please verify.");
        notify(data?.message || "OTP sent to your email. Please verify.", "success");
        setShowOtp(true);
        setValues((s) => ({
          companyName: "",
          industryType: "",
          hrName: "",
          mobile: "",
          email: s.email,
          designation: "",
          employeeStrength: "",
          password: "",
          location: "",
          productLine: "",
        }));
        setTouched({ email: true, password: false });
      }
    } catch (err) {
      setError("Network error. Please try again.");
      notify("Network error. Please try again.", "error");
      setSubmitted(false);
    } finally {
      setLoading(false);
    }
  };

  const onVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp || !values.email) return;
    setVerifying(true);
    setError("");
    try {
      const url = `${BASE_URL}/api/recruitment/verify/corporate`;
      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email: values.email.trim(), otp: otp.trim() }),
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok) {
        const message = data?.message || `Verification failed (${resp.status})`;
        setError(message);
        notify(message, "error");
        setVerified(false);
      } else {
        setVerified(true);
        setSuccessMsg(data?.message || "Email verified successfully.");
        notify(data?.message || "Email verified successfully.", "success");
        setShowOtp(false);
        setOtp("");
      }
    } catch (err) {
      setError("Network error during verification. Please try again.");
      notify("Network error during verification. Please try again.", "error");
      setVerified(false);
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <Navbar />
      <section className="relative bg-slate-50 py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Employer Signup
          </h1>
          <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-300">
            Create your employer account to post jobs and hire faster.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            {/* Company & Industry */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">Company Name</label>
                <input
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
                  value={values.companyName}
                  onChange={(e) => setField("companyName", e.target.value)}
                  onBlur={() => onBlur("companyName")}
                  placeholder="Acme Pvt Ltd"
                  required
                />
                {touched.companyName && !nameValid && (
                  <p className="mt-1 text-xs text-red-600">Enter a valid company name.</p>
                )}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Industry Type</label>
                <input
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
                  value={values.industryType}
                  onChange={(e) => setField("industryType", e.target.value)}
                  onBlur={() => onBlur("industryType")}
                  placeholder="Manufacturing / IT / BFSI"
                  required
                />
                {touched.industryType && !industryValid && (
                  <p className="mt-1 text-xs text-red-600">Enter a valid industry.</p>
                )}
              </div>
            </div>
            {/* Location & Product Line */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">Location</label>
                <input
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
                  value={values.location}
                  onChange={(e) => setField("location", e.target.value)}
                  onBlur={() => onBlur("location")}
                  placeholder="e.g. Mumbai, India"
                  required
                />
                {touched.location && !locationValid && (
                  <p className="mt-1 text-xs text-red-600">Enter a valid location.</p>
                )}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Product Line</label>
                <input
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
                  value={values.productLine}
                  onChange={(e) => setField("productLine", e.target.value)}
                  onBlur={() => onBlur("productLine")}
                  placeholder="e.g. SaaS / Machinery"
                  required
                />
                {touched.productLine && !productLineValid && (
                  <p className="mt-1 text-xs text-red-600">Enter a valid product line.</p>
                )}
              </div>
            </div>

            {/* HR Name & Mobile */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">HR Name</label>
                <input
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
                  value={values.hrName}
                  onChange={(e) => setField("hrName", e.target.value)}
                  onBlur={() => onBlur("hrName")}
                  placeholder="John Doe"
                  required
                />
                {touched.hrName && !hrValid && (
                  <p className="mt-1 text-xs text-red-600">Enter HR's full name.</p>
                )}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Mobile Number</label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
                  value={values.mobile}
                  onChange={(e) => setField("mobile", e.target.value)}
                  onBlur={() => onBlur("mobile")}
                  placeholder="+91 98765 43210"
                  required
                />
                {touched.mobile && !phoneValid && (
                  <p className="mt-1 text-xs text-red-600">Enter a valid phone number.</p>
                )}
              </div>
            </div>

            {/* Email & Designation */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">E-mail</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
                  value={values.email}
                  onChange={(e) => setField("email", e.target.value)}
                  onBlur={() => onBlur("email")}
                  placeholder="hr@company.com"
                  required
                />
                {touched.email && !emailValid && (
                  <p className="mt-1 text-xs text-red-600">Enter a valid email.</p>
                )}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Designation</label>
                <input
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
                  value={values.designation}
                  onChange={(e) => setField("designation", e.target.value)}
                  onBlur={() => onBlur("designation")}
                  placeholder="HR Manager"
                  required
                />
                {touched.designation && !designationValid && (
                  <p className="mt-1 text-xs text-red-600">Enter a valid designation.</p>
                )}
              </div>
            </div>

            {/* Password */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
                  value={values.password}
                  onChange={(e) => setField("password", e.target.value)}
                  onBlur={() => onBlur("password")}
                  placeholder="Create a password"
                  required
                />
                {touched.password && !passwordValid && (
                  <p className="mt-1 text-xs text-red-600">Password must be at least 6 characters.</p>
                )}
              </div>
              <div></div>
            </div>

            {/* Employee Strength */}
            <div>
              <label className="mb-1 block text-sm font-medium">Employee Strength</label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
                value={values.employeeStrength}
                onChange={(e) => setField("employeeStrength", e.target.value)}
                onBlur={() => onBlur("employeeStrength")}
                placeholder="e.g. 250"
              />
              {touched.employeeStrength && !strengthValid && (
                <p className="mt-1 text-xs text-red-600">Enter a numeric value.</p>
              )}
            </div>

            

            {/* Submit */}
            <div className="flex items-center justify-between">
              <button
                disabled={!canSubmit || loading}
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-[1.01] hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit For Demo"}
              </button>
            </div>

            {/* OTP Verification */}
            {showOtp && (
              <div className="mt-4 rounded-lg border border-slate-200 p-4 dark:border-slate-700">
                <label className="mb-1 block text-sm font-medium">
                  Enter OTP sent to {values.email}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="6-digit OTP"
                    maxLength={6}
                  />
                  <button
                    onClick={onVerifyOtp}
                    disabled={verifying || otp.trim().length < 4}
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-[1.01] hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {verifying ? "Verifying..." : "Verify OTP"}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EmployerSignupPage;
