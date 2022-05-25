import React from "react";
import "./index.css";
import { Chart } from "../Chart";
function DashboardGraph({ queryMonth }) {
  return (
    <div className="graph_container">
      <div className="title_graph">
        {" "}
        <h1>This month</h1>
      </div>
      <Chart queryMonth={queryMonth}></Chart>
    </div>
  );
}

export { DashboardGraph };
