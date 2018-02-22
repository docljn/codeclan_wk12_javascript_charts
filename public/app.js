document.addEventListener("DOMContentLoaded", function () {
  new PieChart();

  const titleText = "Our Favourite Programming Languages";
  const seriesArray = [
    {
      name: "Cohort 7 Languages",
      data: [8, 12, 3, 0, 1]
    },
    {
      name: "Cohort 18 Languages",
      data: [10, 10, 1, 1, 0]
    }
  ];

  const xAxisCategoriesArray = ["JavaScript", "Java", "Ruby", "Python", "Algol"];

  new ColumnChart(titleText, seriesArray, xAxisCategoriesArray);

});
