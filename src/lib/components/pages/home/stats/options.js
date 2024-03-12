const tooltips = {0:"e.g.,Python, Svelte, Flask, testing",
                  1:"e.g., Propositional Logic, Discrete Mathematics, Algebra",
                  2:"e.g., Biology, Neurology, Environment",
                  3:"e.g., Code explanation and commenting, Technical tutorials",
                  4:"e.g., Problem definition, Literature surveys, Theorem proving"
                 }

export const options = {

    labels: ['Coding', 'Math', 'Science', 'Software documentation', 'Research methodology'],
    dataLabels: {
        enabled: false,
        enabledOnSeries: undefined,
      },
    series: [1,1,1,1,1],
    colors: ["#1a53ff", "#00b7c7", "#7fe57f", "#ebdc78", "#ff5252"],
    chart: {
        height: 270,
        width: '100%',
        type: 'donut'
    },
    legend: {
        position: 'bottom',
        fontFamily: 'Inter, sans-serif'
    },
    stroke: {
        colors: ['transparent'],
        lineCap: ''
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    name: {
                        show: true,
                        offsetY: 20
                      },
                    total:{
                        show: true,
                        showAlways:true,
                        label: 'prompts',
                        formatter: function (w) {
                            return `~2k`;
                          }
                    },
                    value: {
                        show: true,
                        offsetY: -20,
                        formatter: function (value) {
                          return value;
                        }
                    }
                }
            }
        }
    },
    tooltip:{
        enabled:true,
        custom: function({seriesIndex}) {
            return '<div class="arrow_box">' +
                    '<span class="p-5">' + tooltips[seriesIndex] + '</span>' +
                    '</div>'
        }
    }
}