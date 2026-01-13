import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Academic from "../sections/Achievement/pages/Academic";
import SportsAchievement from "../sections/Achievement/pages/SportsAchievement.tsx";
import Awards from "../sections/Achievement/pages/Awards";

const AchievementRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="academic" replace />} />
      <Route path="academic" element={<Academic />} />
      <Route path="SportsAchievement" element={<SportsAchievement />} />
      <Route path="awards" element={<Awards />} />
    </Routes>
  );
};

export default AchievementRoutes;
