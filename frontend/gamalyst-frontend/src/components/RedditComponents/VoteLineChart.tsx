import { ResponsiveLine } from "@nivo/line";
import chartTheme from "../../styles/theme/theme";
import chartColors from "../../styles/theme/chartColors";

const VoteLineChart = () => {
  // Dummy data for testing
  const data = [
    {
      id: "Post A",
      color: chartColors[0],
      data: [
        { x: "12:00", y: 10 },
        { x: "12:30", y: 20 },
        { x: "13:00", y: 30 },
        { x: "13:30", y: 25 },
        { x: "14:00", y: 40 },
      ],
    },
    {
      id: "Post B",
      color: chartColors[1],
      data: [
        { x: "12:00", y: 5 },
        { x: "12:30", y: 15 },
        { x: "13:00", y: 25 },
        { x: "13:30", y: 35 },
        { x: "14:00", y: 45 },
      ],
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%", maxWidth: "90%", maxHeight: "90%" }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 40, bottom: 40, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: "auto", max: "auto", stacked: true }}
        axisBottom={{ tickSize: 5, tickPadding: 5, tickRotation: -30 }}
        axisLeft={{ tickSize: 5, tickPadding: 5 }}
        colors={chartColors}
        theme={chartTheme}
      />
    </div>
  );
};

export default VoteLineChart;