const tooltips = { 0: ["Coding:","Python, Svelte, Flask, Testing"],
                   1: ["Math:","Propositional Logic, Discrete Mathematics, Algebra"],
                   2: ["Science:","CS, Biology, Neurology, Environment"],
                   3: ["Documentation:","Code Explanation and Commenting, Technical tutorials"],
                   4: ["Research Methodology:","Problem Definition, Literature Surveys, Theorem Proving"],
                   5: ["Data visualization:","LaTeX, D3, Apex Charts"], 
                   6: ["Project Planning:","OKRs, Jira"], 
                 }

const colors = ["#5ad45a", "#00b7c7", "#0d88e6","#1a53ff", "#4421af", "#7c1158", "#b30000"]


export const options = {

    labels: ['Coding', 'Math', 'Science', 'Software documentation', 'Research methodology', 'Data Visualization', 'Project Planning'],
    dataLabels: {
        enabled: false,
        enabledOnSeries: undefined,
      },

    series: [1,1,1,1,1,1,1],
    colors: ["#5ad45a", "#00b7c7", "#0d88e6","#1a53ff", "#4421af", "#7c1158", "#b30000"],
    chart: {
        height: 270,
        width: '100%',
        type: 'donut',
        redrawOnParentResize: false
    },

    legend: {
        position: 'bottom',
        fontFamily: 'Inter, sans-serif'
    },

    stroke: {
        colors: ['transparent'],
        lineCap: '', 
    },

    plotOptions: {
        pie: {
            expandOnClick: false,
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
                            return `~3k+`;
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
        fillSeriesColor: true,
        custom: function({seriesIndex}) {
            return '<div class="arrow_box">' +
                    '<span class="p-2 max-w-2 text-center m-auto"><strong>' + 
                      tooltips[seriesIndex][0] + 
                    '</strong></span><br/>'+
                    '<span class="p-2">' + 
                      tooltips[seriesIndex][1] + 
                    '</span></div>'
        }
    }
}
