import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"];

export default function DashedLineChart() {
  return (
    <LineChart
      width={800}
      height={250}
      series={[
        { data: pData, label: "This year", id: "pvId" },
        { data: uData, label: "Last Year", id: "uvId" },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
      sx={{
        ".MuiLineElement-root, .MuiMarkElement-root": {
          strokeWidth: 2,
        },
        ".MuiLineElement-series-pvId": {
          strokeDasharray: "0 0",
        },
        ".MuiLineElement-series-uvId": {
          strokeDasharray: "0 0 0 0",
        },
        ".MuiMarkElement-root:not(.MuiMarkElement-highlighted)": {
          fill: "#fff",
        },
        "& .MuiMarkElement-highlighted": {
          stroke: "none",
        },
      }}
    />
  );
}
