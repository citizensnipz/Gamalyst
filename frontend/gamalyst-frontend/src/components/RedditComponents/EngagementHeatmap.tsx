import { ResponsiveHeatMap } from "@nivo/heatmap";
import heatmapTheme from "../../styles/theme/heatmapTheme";

const EngagementHeatmap = () => {
  const rawData = [
    { day: "Monday", "12AM": 3, "6AM": 7, "12PM": 15, "6PM": 20 },
    { day: "Tuesday", "12AM": 2, "6AM": 5, "12PM": 10, "6PM": 18 },
    { day: "Wednesday", "12AM": 4, "6AM": 6, "12PM": 12, "6PM": 22 },
    { day: "Thursday", "12AM": 1, "6AM": 8, "12PM": 14, "6PM": 17 },
    { day: "Friday", "12AM": 3, "6AM": 9, "12PM": 18, "6PM": 25 },
    { day: "Saturday", "12AM": 5, "6AM": 10, "12PM": 20, "6PM": 30 },
    { day: "Sunday", "12AM": 6, "6AM": 12, "12PM": 22, "6PM": 28 },
  ];

  const data = rawData.map((entry) => ({
    id: entry.day,
    data: Object.entries(entry)
      .filter(([key]) => key !== "day")
      .map(([key, value]) => ({ x: key, y: Number(value) })),
  }));

  return (
    <div style={{ width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%", paddingLeft: "2vw" }}>
      <ResponsiveHeatMap
        data={data}
        margin={{ top: 20, right: 40, bottom: 40, left: 50 }}
        axisTop={{ tickSize: 5, tickPadding: 5, tickRotation: -30 }}
        axisLeft={{ tickSize: 5, tickPadding: 5 }}
        colors={{ type: "sequential", scheme: "reds" }}
        theme={heatmapTheme}
      />
    </div>
  );
};

export default EngagementHeatmap;