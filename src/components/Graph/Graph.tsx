import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../../main.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  data: any;
  options?: any;
  w?: string;
  h?: string;
  p?: string;
  style?: React.CSSProperties;
}

const LineChart: React.FC<LineChartProps> = ({
  data,
  options,
  w,
  h,
  p,
  style,
}) => {
  return (
    <div
      className="mcb-graph"
      style={{
        ...style,
        width: w || "100%",
        height: h || "100%",
        padding: p || "100",
      }}
    >
      <Line
        data={data}
        options={options}
        color="rgba(255, 99, 132, 0.2)"
        role="re"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default LineChart;
