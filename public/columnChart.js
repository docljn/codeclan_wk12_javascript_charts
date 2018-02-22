


const ColumnChart = function (titleText, seriesArray, xAxisCategoriesArray) {
  const container = document.querySelector("#column-chart");

  const chart = new Highcharts.Chart({
    chart: {
      type: "column",
      renderTo: container
    },
    title: {text: titleText},
    series: seriesArray,
    xAxis: {categories: xAxisCategoriesArray}
  });


};
