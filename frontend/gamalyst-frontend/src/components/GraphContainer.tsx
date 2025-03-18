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
          <div className="graph-card">
            <h3>Vote Changes Over Time</h3>
            <VoteLineChart />
          </div>
          <div className="graph-card">
            <h3>Subreddit Performance</h3>
            <SubredditBarChart />
          </div>
          <div className="graph-card">
            <h3>Post Type Engagement</h3>
            <PostTypePieChart />
          </div>
          <div className="graph-card">
            <h3>Engagement by Time of Day</h3>
            <EngagementHeatmap />
          </div>
        </>
      )}

      {selectedPlatform !== "reddit" && <p>No charts available for this platform yet.</p>}
    </div>
  );
};

export default GraphContainer;