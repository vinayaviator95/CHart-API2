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
// const lineChart = document.getElementById("line-graph").getContext("2d");
// let line = new Chart(lineChart, {
//   type: "line",
//   data: {
//     labels: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//     datasets: [
//       {
//         label: "Line1",
//         data: [44, 35, 36, 34, 32, 26, 23, 25, 42, 44, 45, 43],
//         tension: 0,
//         borderColor: "#a9df07",
//         backgroundColor: "#a9df07",
//       },
//       {
//         label: "Line2",
//         data: [33, 34, 25, 44, 40, 18, 55, 54, 48, 27, 37, 28],
//         tension: 0,
//         borderColor: "#f1d61f",
//         backgroundColor: "#f1d61f",
//       },
//       {
//         label: "Line3",
//         data: [24, 14, 15, 24, 34, 36, 23, 45, 44, 18, 28, 25],
//         tension: 0,
//         borderColor: "#25b7d4",
//         backgroundColor: "#25b7d4",
//       },
//     ],
//   },
//   options: {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//         position: "top",
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: true,
//         },
//       },
//       y: {
//         min: 5,
//         max:65,

//         grid: {
//           display: true,
//         },
//       },
//     },
//   },
// });

// window.onload=function(){

//     const doughnut_chart_tag1 = new Chart(document.getElementById('tag1'), {
//       type: 'doughnut',

//       data: {
//         labels: [ 't1',
//         't2'],
//         datasets: [
//           {
//             label: "Tag1",
//             data: [30,70],
//             backgroundColor:["#e6e6e6","#5a9bd5"],

//           },
//         ],
//       },

//       options: {
//          responsive: true,
//         legend: {
//           display: false
//         }
//       }
//     });
//     const doughnut_chart_tag2 = new Chart(document.getElementById('tag2'), {
//         type: 'doughnut',

//         data: {
//           labels: [ 't1',
//           't2'],
//           datasets: [
//             {
//               label: "Tag1",
//               data: [30,70],
//               backgroundColor:["#e6e6e6","#5a9bd5"],

//             },
//           ],
//         },

//         options: {
//            responsive: true,
//           legend: {
//             display: false
//           }
//         }
//       });

//       const doughnut_chart_tag3 = new Chart(document.getElementById('tag3'), {
//         type: 'doughnut',

//         data: {
//           labels: [ 't1',
//           't2'],
//           datasets: [
//             {
//               label: "Tag1",
//               data: [30,70],
//               backgroundColor:["#e6e6e6","#5a9bd5"],

//             },
//           ],
//         },

//         options: {
//            responsive: true,
//           legend: {
//             display: false
//           }
//         }
//       });

//       const doughnut_chart_tag4 = new Chart(document.getElementById('tag4'), {
//         type: 'doughnut',

//         data: {
//           labels: [ 't1',
//           't2'],
//           datasets: [
//             {
//               label: "Tag1",
//               data: [30,70],
//               backgroundColor:["#e6e6e6","#5a9bd5"],

//             },
//           ],
//         },

//         options: {
//            responsive: true,
//           legend: {
//             display: false
//           }
//         }
//       });

//     Chart.pluginService.register({
//       beforeDraw: function(chart) {
//         var width = chart.chart.width,
//             height = chart.chart.height,
//             ctx = chart.chart.ctx;
//         ctx.restore();
//         var fontSize = (height / 114).toFixed(2);
//         ctx.font = fontSize + "em sans-serif";
//         ctx.textBaseline = "middle";
//         var text = "70%",
//             textX = Math.round((width - ctx.measureText(text).width) / 2),
//             textY = height / 2;
//         ctx.fillText(text, textX, textY);
//         ctx.save();
//       }
//     });
// }

const current = document.getElementById("tag1").getContext("2d");

//   let currentChart = new Chart(current, {
//     type: "doughnut",
//     data: {
//       labels: [ 'c1',
//       'c2'],
//       datasets: [
//         {
//           label: "Current",
//           data: [70,30],
//           backgroundColor:["#00ffff","#e5e5e5"],

//         },
//       ],
//     },
//     options: {

//       responsive: true,
//       maintainAspectRatio:false,
//       plugins: {
//         legend: {
//           display: false,
//           position: "top",
//         },
//         title: {
//           display: true,
//           text: 70,
//           position:"bottom",
//           font: {weight: 'bold',
//               size:20
//           }
//         },
//       }
//        },
//   })

// var myDoughnutChart = new Chart(current, {
//     type: 'doughnut',
//     data: [70,30],
//     options: {
//       plugins: {
//         doughnutlabel: {
//           labels: [
//             {
//               text: 'The title',
//               font: {
//                 size: '60'
//               }
//             },
//             {
//               text: getTotal,
//               font: {
//                 size: '50'
//               },
//               color: 'grey'
//             },
//             {
//               text: '$100.000',
//               font: {
//                 size: '30'
//               },
//               color: 'red'
//             },
//             {
//               text: '95%',
//               font: {
//                 size: '45'
//               },
//             color: 'green'
//             }
//           ]
//         }
//       }
//     }
//   });

//   var getTotal = function(myDoughnutChart) {
//       var sum = myDoughnutChart.config.data.datasets[0].data.reduce((a, b) => a + b, 0);
//       return `Total: ${sum}`;
//   }
