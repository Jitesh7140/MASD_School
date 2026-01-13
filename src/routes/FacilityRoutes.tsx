import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Library from "../sections/Facility/pages/Library";
import Laboratories from "../sections/Facility/pages/Laboratories";
import Sports from "../sections/Facility/pages/Sports";
import Transport from "../sections/Facility/pages/Transport";
import SmartClass from "../sections/Facility/pages/SmartClass";

const FacilityRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="library" replace />} />
      <Route path="library" element={<Library />} />
      <Route path="laboratories" element={<Laboratories />} />
      <Route path="sports" element={<Sports />} />
      <Route path="transport" element={<Transport />} />
      <Route path="smart-class" element={<SmartClass />} />
    </Routes>
  );
};

export default FacilityRoutes;
