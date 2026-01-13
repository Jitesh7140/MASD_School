import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import MainLayout from "@/layouts/MainLayout";
import SectionLayout from "@/layouts/SectionLayout";

// Pages
import HomePage from "@/pages/Home/HomePage";
import ContactPage from "@/pages/Contact/ContactPage";
import GalleryPage from "@/pages/Gallery/GalleryPage"; 
import Staff from "@/pages/Staff/Staff";
import MandatoryDisclosure from "@/pages/MandatoryDisclosure/MandatoryDisclosurePage";
import NotFoundPage from "@/pages/NotFounds/NotFoundPage";

// Section Routes
import AboutRoutes from "@/routes/AboutRoutes";
import FacilityRoutes from "@/routes/FacilityRoutes";
import ActivitiesRoutes from "@/routes/ActivitiesRoutes";
import AchievementRoutes from "@/routes/AchievementRoutes";
import AdmissionRoutes from "@/routes/AdmissionRoutes";

// Sidebar Menus
import { aboutMenu } from "@/data/aboutMenu";
import { facilityMenu } from "@/data/facilityMenu";
import { activitiesMenu } from "@/data/activitiesMenu";
import { achievementMenu } from "@/data/achievementMenu";
import { admissionMenu } from "@/data/admissionMenu";

const AppRoutes = () => {
  return (
    <Routes>

      {/* ================= MAIN PAGES ================= */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} /> 
        <Route path="/staff" element={<Staff />} />
        <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
      </Route>

      {/* ================= ABOUT ================= */}
      <Route
        element={<SectionLayout sidebarMenu={aboutMenu} />}
      >
        <Route path="/about/*" element={<AboutRoutes />} />
      </Route>

      {/* ================= Addmission ================= */}
      <Route
        element={<SectionLayout sidebarMenu={admissionMenu} />}
      >
        <Route path="/admission/*" element={<AdmissionRoutes />} />
      </Route>


      {/* ================= FACILITY ================= */}
      <Route
        element={<SectionLayout sidebarMenu={facilityMenu} />}
      >
        <Route path="/facility/*" element={<FacilityRoutes />} />
      </Route>

      {/* ================= ACTIVITIES ================= */}
      <Route
        element={<SectionLayout sidebarMenu={activitiesMenu} />}
      >
        <Route path="/activities/*" element={<ActivitiesRoutes />} />
      </Route>

      {/* ================= ACHIEVEMENT ================= */}
      <Route
        element={<SectionLayout sidebarMenu={achievementMenu} />}
      >
        <Route path="/achievement/*" element={<AchievementRoutes />} />
      </Route>

      {/* ================= FALLBACK ================= */}
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />

    </Routes>
  );
};

export default AppRoutes;
