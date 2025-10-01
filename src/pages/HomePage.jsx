import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import Footer from "../components/Footer";
import Banner from "../components/LandingBanner";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = location.state && location.state.scrollTo;
    if (target) {
      // Clear state to avoid re-scrolling on next renders
      navigate(".", { replace: true, state: null });
      // Defer to ensure DOM is ready
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, [location.state, navigate]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <Navbar />
      <Banner />
    </div>
  );
};

export default HomePage;