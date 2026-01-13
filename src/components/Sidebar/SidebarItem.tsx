import { Link } from "react-router-dom";

const SidebarItem = ({ to, label }: { to: string; label: string }) => {
  return (
    <div>
      <Link to={to}>{label}</Link>
    </div>
  );
};

export default SidebarItem;
