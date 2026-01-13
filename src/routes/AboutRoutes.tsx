import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import History from "../sections/About/pages/History";
import Vision from "../sections/About/pages/Vision";
import ChairmanMessage from "../sections/About/pages/ChairmanMessage";
import SecretaryMessage from "../sections/About/pages/SecretaryMessage";
import PrincipalMessage from "../sections/About/pages/PrincipalMessage";
import JointSecretaryMessage from "../sections/About/pages/JointSecretaryMessage";
import ViceChairmanMessage from "@/sections/About/pages/ViceChairmanMessage";

const AboutRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="history" replace />} />
      <Route path="history" element={<History />} />
      <Route path="vision" element={<Vision />} />
      <Route path="chairman-message" element={<ChairmanMessage />} />
      <Route path="vice-chairman-message" element={<ViceChairmanMessage />} />
      <Route path="principal-message" element={<PrincipalMessage />} />
      <Route path="secretary-message" element={<SecretaryMessage />} />
      <Route path="joint-secretary-message" element={<JointSecretaryMessage />} />

    </Routes>
  );
};

export default AboutRoutes;
