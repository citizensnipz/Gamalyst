import useNavigationStore from "../store/useNavigationStore";
import "../styles/sidebar.scss";
import gamalystLogoLight from "../../public/gamalystLogoLight.png";

const Sidebar = () => {
  const setSection = useNavigationStore((state) => state.setSection);

  return (
    <nav className="sidebar">
            <img src={gamalystLogoLight} alt="Gamalyst Logo" className="sidebar-logo" />
            <h2 className="sidebar-title">Gamalyst</h2>
      <ul>
        <li><button onClick={() => setSection("overview")}>Overview</button></li>
        <li><button onClick={() => setSection("reddit")}>Reddit</button></li>
        <li><button onClick={() => setSection("insights")}>Insights</button></li>
        <li><button onClick={() => setSection("outreach")}>Outreach</button></li>
        <li><button onClick={() => setSection("testing")}>Testing</button></li>
        <li><button onClick={() => setSection("account")}>Account</button></li>
        <li><button onClick={() => setSection("settings")}>Settings</button></li>
      </ul>
    </nav>
  );
};

export default Sidebar;