import React from "react";
import "./index.css";
import { Chart } from "../Chart";
function DashboardGraph() {
  return (
    <div className="graph_container">
      <div className="title_graph">
        {" "}
        <h1>This month</h1>
      </div>
      <Chart></Chart>
    </div>
  );
}

export { DashboardGraph };
