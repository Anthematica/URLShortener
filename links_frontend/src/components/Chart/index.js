import { ResponsiveBar } from "@nivo/bar";
import { useState, useEffect } from "react";

function Chart({ queryMonth }) {
  const [windowContainerWidth, setWindowContainerWidth] = useState(false);

  useEffect(() => {
    function addMQListener(mql, callback) {
      if (mql.addEventListener) {
        mql.addEventListener("change", callback);
      } else {
        mql.addListener(callback);
      }
    }

    addMQListener(window.matchMedia("(max-width: 768px)"), (event) => {
      setWindowContainerWidth(event.matches);
    });
  }, []);

  const Labelmonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = Labelmonth.map((item) => {
    return {
      month: item,
      visits: 0,
    };
  });

  const data = month.map((item) => {
    queryMonth.map((item2) => {
      if (item.month === item2.month) {
        item.visits = item2.visits;
      }
    });
    //Esta mierda no servía porque queryMonth tiene un tamaño diferente a month
    // console.log("¿Como es?", Boolean(item.month === queryMonth[key]?.month));
    // if (item.month === queryMonth[key]?.month) {
    //   console.log("Entro?");
    //   item.visits = queryMonth[key]?.visits;
    // }

    return item;
  });
  return (
    <ResponsiveBar
      data={data}
      keys={["visits"]}
      theme={{
        axis: { ticks: { text: { fontSize: windowContainerWidth ? 6 : 11 } } },
      }}
      indexBy="month"
      margin={{ top: 16, right: 20, bottom: 90, left: 50 }}
      padding={0.4}
      valueScale={{ type: "linear" }}
      borderRadius={3}
      colors="#3182CE"
      animate={true}
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: -40,
      }}
      axisBottom={{
        tickRotation: windowContainerWidth ? -45 : 0,
      }}
    />
  );
}

export { Chart };
