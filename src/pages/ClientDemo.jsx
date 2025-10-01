import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ClientNavbar from "../components/ClientNavbar.jsx";
import ShortFooter from "../components/ShortFooter.jsx";
import { BASE_URL } from "../config";

const ClientDemo = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const companyId = params.get("companyId");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchTop = async () => {
      setLoading(true);
      setError("");
      try {
        const url = new URL(`${BASE_URL}/api/recruitment/parsed-profiles/top-ctc`);
        url.searchParams.set("limit", "10");
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
    fetchTop();
  }, [companyId]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <ClientNavbar />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
        <h1 className="text-xl font-semibold">Top 10 Profiles by CTC</h1>
        {loading && <p className="mt-4 text-sm text-slate-500">Loading…</p>}
        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        {!loading && !error && (
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {items.map((p, idx) => (
              <div key={p._id || idx} className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-semibold">{p.name || "N/A"}</h3>
                    <p className="text-xs text-slate-500">{p.current_designation || ""}{p.current_company ? ` at ${p.current_company}` : ""}</p>
                  </div>
                  <div className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">{p.ctc || "CTC N/A"}</div>
                </div>
                <div className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                  <p>{p.location || ""}</p>
                  <p className="mt-1">Source: {p.source}</p>
                </div>
              </div>
            ))}
            {items.length === 0 && (
              <div className="text-sm text-slate-500">No records found.</div>
            )}
          </div>
        )}
      </main>
      <ShortFooter />
    </div>
  );
};

export default ClientDemo;
