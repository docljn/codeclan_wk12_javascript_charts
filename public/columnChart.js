const ColumnChart = function () {
  const container = document.querySelector("#column-chart");

  const chart = new Highcharts.Chart({
    chart: {
      type: "column",
      renderTo: container
    },
    title: {
      text: "Our Favourite Programming Languages"
    },
    series: [
      {
        name: "Cohort 7 Languages",
        data: [8, 12, 3, 0, 1]
      },
      {
        name: "Cohort 18 Languages",
        data: [10, 10, 1, 1, 0]
      }
    ],
    xAxis: {
      categories: ["JavaScript", "Java", "Ruby", "Python", "Algol"]
    }
  });


};
