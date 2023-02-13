const chartData = {
  chart: {
    id: "apexchart-example",
  },
  xaxis: {
    categories: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],
  },
  yaxis: {
    title: {
      text: "Amount of Car Rented",
    },
  },
  colors: ["#586B90", "#586B90"],

  legend: {
    width: 200,
  },
  series: [
    {
      name: "Total Rent",
      type: "bar",
      data: [
        80, 50, 10, 20, 92, 85, 62, 5, 25, 115, 95, 100, 97, 32, 119, 80, 50,
        10, 20, 92, 85, 62, 5, 25, 115, 95, 100, 97, 32, 119,
      ],
    },
  ],
};

export default chartData;
