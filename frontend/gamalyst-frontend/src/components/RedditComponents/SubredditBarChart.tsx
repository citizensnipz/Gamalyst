import { ResponsiveBar } from "@nivo/bar";
import chartColors from "../../styles/theme/chartColors";
import chartTheme from "../../styles/theme/theme";

const SubredditBarChart = () => {
  const data = [
    { subreddit: "r/IndieDev", upvotes: 120, comments: 45 },
    { subreddit: "r/gamedev", upvotes: 200, comments: 80 },
    { subreddit: "r/Unity3D", upvotes: 150, comments: 60 },
    { subreddit: "r/gamedesign", upvotes: 90, comments: 30 },
  ];

  return (
    <div style={{ height: "300px" }}>
      <ResponsiveBar
        data={data}
        keys={["upvotes", "comments"]}
        indexBy="subreddit"
        margin={{ top: 20, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        groupMode="grouped"
        colors={chartColors}
        theme={chartTheme}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Subreddit",
          legendPosition: "middle",
          legendOffset: 40,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Engagement",
          legendPosition: "middle",
          legendOffset: -50,
        }}
      />
    </div>
  );
};

export default SubredditBarChart;
