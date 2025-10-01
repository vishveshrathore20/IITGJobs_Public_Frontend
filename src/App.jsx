import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import EmployerSignupPage from "./pages/EmployerSignupPage";
import EmployerLoginPage from "./pages/EmployerLoginPage";
import ClientDashboard from "./pages/ClientDashboard";
import ConfidentialData from "./pages/ConfidentialData";
import ClientApplicants from "./pages/ClientApplicants";
import ClientProfile from "./pages/ClientProfile";
import ClientSupport from "./pages/ClientSupport";
import ProtectedRoute from "./routes/ProtectedRoute";
import ClientService from "./pages/ClientService";
import ClientDemo from "./pages/ClientDemo";
import RecruitmentService from "./pages/RecruitmentService";
import AttrationService from "./pages/AttrationService";
import Banner from "./components/LandingBanner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/employer/signup" element={<EmployerSignupPage />} />
      <Route path="/employer/login" element={<EmployerLoginPage />} />
      <Route path="/services/recruitment" element={<RecruitmentService />} />
      <Route path="/services/attrition" element={<AttrationService />} />

      {/* Corporate (Client) protected routes */}
      <Route element={<ProtectedRoute requireCorporate={true} corporateRedirectTo="/employer/login" /> }>
        <Route path="client/dashboard" element={<ClientDashboard />} />
        <Route path="client/jobs" element={<ConfidentialData />} />
        <Route path="client/applicants" element={<ClientApplicants />} />
        <Route path="client/profile" element={<ClientProfile />} />
        <Route path="client/support" element={<ClientSupport />} />

        <Route path="client/service" element={<ClientService />} />
        <Route path="/client/demo" element={<ClientDemo />} />
      </Route>
    </Routes>
  );
}

export default App;
