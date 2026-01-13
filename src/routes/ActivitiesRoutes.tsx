import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Cultural from "../sections/Activities/pages/Cultural";
import SportsActivities from "../sections/Activities/pages/SportsActivities";
import Events from "../sections/Activities/pages/Events";

const ActivitiesRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="events" replace />} />
      <Route path="cultural" element={<Cultural />} />
      <Route path="sports" element={<SportsActivities />} />
      <Route path="events" element={<Events />} />
    </Routes>
  );
};

export default ActivitiesRoutes;
