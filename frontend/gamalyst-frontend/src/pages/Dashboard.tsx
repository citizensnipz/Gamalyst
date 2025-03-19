import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

const Dashboard = () => {

  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Dashboard;