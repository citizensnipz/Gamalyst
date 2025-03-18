import VoteLineChart from "./RedditComponents/VoteLineChart";
import SubredditBarChart from "./RedditComponents/SubredditBarChart";
import PostTypePieChart from "./RedditComponents/PostTypePieChart";
import "../styles/graphcontainer.scss";

const GraphContainer = () => {
  return (
    <div className="graph-container">
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
    </div>
  );
};

export default GraphContainer;