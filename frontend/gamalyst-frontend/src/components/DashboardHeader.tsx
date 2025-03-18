import "../styles/dashboardheader.scss";
import useNavigationStore from "../store/useNavigationStore";

const DashboardHeader = () => {
  const selectedSection = useNavigationStore((state) => state.selectedSection);

  return (
    <header className="dashboard-header">
      <h2>{selectedSection === "overview" ? "Overview" : `Analytics: ${selectedSection}`}</h2>
      <p>Displaying engagement metrics and insights.</p>
    </header>
  );
};

export default DashboardHeader;