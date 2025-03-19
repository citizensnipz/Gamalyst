import useNavigationStore from "../store/useNavigationStore";
import VoteLineChart from "./RedditComponents/VoteLineChart";
import SubredditBarChart from "./RedditComponents/SubredditBarChart";
import PostTypePieChart from "./RedditComponents/PostTypePieChart";
import EngagementHeatmap from "./RedditComponents/EngagementHeatmap";
import "../styles/graphcontainer.scss";

const GraphContainer = () => {
  const selectedPlatform = useNavigationStore((state) => state.selectedSection);

  return (
    <div className="graph-container">
      {selectedPlatform === "reddit" && (
        <>
          <div className="graph-card chart1">
            <h3 className="graph-title">Vote Changes Over Time</h3>
            <VoteLineChart />
          </div>
          <div className="graph-card chart2">
            <h3 className="graph-title">Subreddit Performance</h3>
            <SubredditBarChart />
          </div>
          <div className="graph-card chart3">
            <h3 className="graph-title">Post Type Engagement</h3>
            <PostTypePieChart />
          </div>
          <div className="graph-card chart4">
            <h3 className="graph-title">Engagement by Time of Day</h3>
            <EngagementHeatmap />
          </div>
        </>
      )}

      {selectedPlatform !== "reddit" && <p>No charts available for this platform yet.</p>}
    </div>
  );
};

export default GraphContainer;