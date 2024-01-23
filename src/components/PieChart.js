import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { id: 0, value: 10, label: "UttarPradesh" },
  { id: 1, value: 15, label: "Delhi" },
  { id: 2, value: 20, label: "Pune" },
  { id: 3, value: 6, label: "other" },
];

export default function PieActiveArc() {
  return (
    <PieChart
      colors={["#00d1b0", "#266888", "#3aceff", "#2888"]}
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
        },
      ]}
      height={200}
    />
  );
}
