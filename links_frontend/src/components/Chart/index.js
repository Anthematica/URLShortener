import { ResponsiveBar } from "@nivo/bar";

function Chart({ queryMonth }) {
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
      indexBy="month"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.4}
      valueScale={{ type: "linear" }}
      colors="#3182CE"
      animate={true}
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "visits",
        legendPosition: "middle",
        legendOffset: -40,
      }}
    />
  );
}

export { Chart };
