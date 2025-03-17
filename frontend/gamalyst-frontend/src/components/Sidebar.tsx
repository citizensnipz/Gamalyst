import { Link } from "react-router-dom";
import "../styles/sidebar.scss";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <h2><li><Link to="/">Gamalyst</Link></li></h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;