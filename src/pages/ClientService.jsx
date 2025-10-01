import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ClientNavbar from "../components/ClientNavbar.jsx";
import ShortFooter from "../components/ShortFooter.jsx";
import { BASE_URL } from "../config";

const ClientService = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const companyId = params.get("companyId");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      setError("");
      try {
        const url = new URL(`${BASE_URL}/api/recruitment/parsed-profiles/all-alpha`);
        if (companyId) url.searchParams.set("companyId", companyId);
        const { data } = await axios.get(url.toString());
        if (data?.success) setItems(data.data || []);
        else setError(data?.message || "Failed to fetch data");
      } catch (e) {
        setError(e?.response?.data?.message || e?.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, [companyId]);

  const filtered = useMemo(() => {
    if (!q.trim()) return items;
    const needle = q.toLowerCase();
    return items.filter((p) => {
      const hay = [
        p.name,
        p.current_designation,
        p.current_company,
        p.location,
        p.ctc,
        p.email,
        p.mobile,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(needle);
    });
  }, [q, items]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <ClientNavbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">All Profiles</h1>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name, designation, location, company…"
            className="text-sm px-3 py-2 rounded border border-slate-300 bg-white dark:bg-slate-800 dark:border-slate-700"
          />
        </div>

        {loading && <p className="mt-4 text-sm text-slate-500">Loading…</p>}
        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

        {!loading && !error && (
          <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
              <thead className="bg-slate-50 dark:bg-slate-900/40">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Designation</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Location</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Company Name</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {filtered.map((p, idx) => (
                  <tr key={p._id || idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40">
                    <td className="px-4 py-3 text-sm text-slate-800 dark:text-slate-200">{p.name || "N/A"}</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{p.current_designation || ""}</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{p.location || ""}</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{p.current_company || ""}</td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-4 py-6 text-center text-sm text-slate-500">No records found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <ShortFooter />
    </div>
  );
};

export default ClientService;
