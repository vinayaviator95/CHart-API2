const tagone = document.getElementById("tag1").getContext("2d");
let tagonechart = new Chart(tag1, {
  type: "doughnut",
  data: {
    labels: ["c1", "c2"],
    datasets: [
      {
        label: "Tag1",
        data: [30, 70],
        backgroundColor: ["#e6e6e6", "#5a9bd5"],
      },
    ],
  },
  options: {
    cutout: "70%",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
    },
  },
});

const tagtwo = document.getElementById("tag2").getContext("2d");
let tagtwochart = new Chart(tag2, {
  type: "doughnut",
  data: {
    labels: ["c1", "c2"],
    datasets: [
      {
        label: "Tag1",
        data: [30, 70],
        backgroundColor: ["#e6e6e6", "#5a9bd5"],
      },
    ],
  },
  options: {
    cutout: "70%",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
    },
  },
});
const tagthree = document.getElementById("tag3").getContext("2d");
let tagthreechart = new Chart(tag3, {
  type: "doughnut",
  data: {
    labels: ["c1", "c2"],
    datasets: [
      {
        label: "Tag1",
        data: [30, 70],
        backgroundColor: ["#e6e6e6", "#5a9bd5"],
      },
    ],
  },
  options: {
    cutout: "70%",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
    },
  },
});
const tagfour = document.getElementById("tag4").getContext("2d");
let tagfourchart = new Chart(tag4, {
  type: "doughnut",
  data: {
    labels: ["c1", "c2"],
    datasets: [
      {
        label: "Tag1",
        data: [30, 70],
        backgroundColor: ["#e6e6e6", "#5a9bd5"],
      },
    ],
  },
  options: {
    cutout: "70%",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
    },
  },
});
const lineChart = document.getElementById("line-graph").getContext("2d");
let temperatureTrendChart = new Chart(lineChart, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "L1",
        data: [44, 35, 36, 34, 32, 26, 23, 25, 42, 44, 45, 43],
        tension: 0,
        borderColor: " #a9df07",
        backgroundColor: " #a9df07",
      },
      {
        label: "L2",
        data: [33, 34, 25, 44, 40, 18, 55, 54, 48, 27, 37, 28],
        tension: 0,
        borderColor: "#f1d61f",
        backgroundColor: "#f1d61f",
      },
      {
        label: "L3",
        data: [24, 14, 15, 24, 34, 36, 23, 45, 44, 18, 28, 25],
        tension: 0,
        borderColor: "#25b7d4",
        backgroundColor: "#25b7d4",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Temperature Trend",
        font: {
          size: 22,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        min: 0,
        max: 60,

        grid: {
          display: true,
        },
      },
    },
  },
});
