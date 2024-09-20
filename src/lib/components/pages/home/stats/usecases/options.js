const tooltips = {0:["Open & Closed QA:","Providing answers to various question formats","#b30000"],
                  1:["Summarization:","Synthesizing the key points of a text","#7c1158"],
                  2:["Chain-of-thought:","Describing a logical progression of ideas","#4421af"],
                  3:["Multi-turn:","Extended dialogue with maintained context","#1a53ff"],
                  4:["Rewriting:","Rephrasing text with maintained meaning","#0d88e6"],
                  5:["Extraction:","Creating structured data from unstructured text","#00b7c7"],
                  6:["Classification:","Labeling text based on specified attributes","#f4a261"],
                  7:["Writing Feedback:","Personal writing feedback, student writing feedback","#5ad45a"],
                 }

export const options = {
  labels: ['Open & Closed QA', 'Summarization','Chain-of-thought','Multi-turn','Rewriting','Extraction','Classification', 'Writing Feedback'],

  dataLabels: {
    enabled: false,
    style: {
      fontFamily: 'Inter, sans-serif'
    }
  },
  series: [5, 4, 4, 3, 2, 1, 1,4],
  colors: ["#b30000", "#7c1158", "#4421af", "#1a53ff", "#0d88e6", "#00b7c7", "#5ad45a", "#8be04e", "#ebdc78","#f4a261"],
  chart: {
    height: 270,
    width: '100%',
    type: 'pie'
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
      labels: {
        show: true
      },
      size: '100%',
      dataLabels: {
        offset: -25
      }
    }
  },
  tooltip:{
    enabled:true,
    custom: function({seriesIndex}) {

        return '<div class="arrow_box">' +
                    '<span class="p-2 max-w-2"><strong>' + 
                      tooltips[seriesIndex][0] + 
                    '</strong></span><br/>'+
                    '<span class="p-2">' + 
                      tooltips[seriesIndex][1] + 
                    '</span></div>'
    }
  }
}
