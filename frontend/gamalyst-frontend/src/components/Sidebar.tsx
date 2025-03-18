import useNavigationStore from "../store/useNavigationStore";
import "../styles/sidebar.scss";

const Sidebar = () => {
  const setSection = useNavigationStore((state) => state.setSection);

  return (
    <nav className="sidebar">
      <h2>Gamalyst</h2>
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