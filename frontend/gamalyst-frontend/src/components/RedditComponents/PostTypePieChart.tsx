import { ResponsivePie } from "@nivo/pie";
import pieChartTheme from "../../styles/theme/pieChartTheme";
import chartColors from "../../styles/theme/chartColors";

const PostTypePieChart = () => {
  const data = [
    { id: "Text", label: "Text", value: 40 },
    { id: "Image", label: "Image", value: 30 },
    { id: "Video", label: "Video", value: 20 },
    { id: "Link", label: "Link", value: 10 },
  ];

  return (
    <div style={{ height: "350px", width: "100%" }}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={chartColors}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLabelsTextColor="#ffffff"
        theme={pieChartTheme}
      />
    </div>
  );
};

export default PostTypePieChart;