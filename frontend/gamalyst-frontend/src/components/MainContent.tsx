import useNavigationStore from "../store/useNavigationStore";
import DashboardHeader from "./DashboardHeader";
import GraphContainer from "./GraphContainer";
import "../styles/maincontent.scss";

const MainContent = () => {
  const selectedSection = useNavigationStore((state) => state.selectedSection);

  return (
    <div className="main-content">
      {/* Show DashboardHeader + GraphContainer for graph sections */}
      {["overview", "reddit"].includes(selectedSection) && (
        <>
          <DashboardHeader />
          <GraphContainer />
        </>
      )}

      {/* Show other sections without GraphContainer */}
      {selectedSection === "outreach" && <p>Show outreach tools...</p>}
      {selectedSection === "testing" && <p>Show playtesting tools...</p>}
      {selectedSection === "account" && <p>Show account settings...</p>}
      {selectedSection === "settings" && <p>Show site settings...</p>}
    </div>
  );
};

export default MainContent;