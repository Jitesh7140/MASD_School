import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Academic from "../sections/Admission/pages/Apply";
import Criteria from "../sections/Admission/pages/Criteria";
import FeesStructure from "../sections/Admission/pages/FeesStructure";

const AdmissionRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="apply" replace />} />
      <Route path="apply" element={<Academic />} />
      <Route path="criteria" element={<Criteria />} />
      <Route path="feesStructure" element={<FeesStructure />} />
    </Routes>
  );
};

export default AdmissionRoutes;
