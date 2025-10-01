import React from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactPage;
