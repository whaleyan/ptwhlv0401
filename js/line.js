
/**
 *
 * @param {String} id
 * @param {String} title
 * @param {Object} xData {name<String>, data<Array>}
 * @param {String} yAxisName
 * @param {Array} customized [<Object>{name<String>, data<Array>, legendColor<String>, lineColor<String>, symbol<String>}...]
 */

function renderSmoothLine(id, title, xData, yAxisName, customized) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(id));

  var seriesArr = [],
    yAxis = [
      {
        name: yAxisName,
        nameTextStyle: {
          color: "#989898",
          fontSize: 15,
          padding: [0, 45, 0, 0],
          verticalAlign: "bottom"
          // align: "left"
        },
        type: "value",
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0,
          color: "#989898",
          fontSize: 15
        },
        splitArea: {
          show: false
        }
      }
    ];
  for (var i = 0; i < customized.length; i++) {
    var item = customized[i];
    var tmp = {
      name: item.name,
      type: "line",
      smooth: true,
      showSymbol: false,
      symbolSize: 0,
      itemStyle: {
        color: item.itemColor // 设置itemStyle.color，lengend图例中才会显示对应的颜色
      },
      lineStyle: {
        normal: {
          color: item.lineColor,
          width: 3
        }
      },
      markPoint: {
        symbol: item.symbol,
        symbolSize: [40, 90],
        data: [{ type: "max", name: "最大值" }],
        label: {
          show: true,
          position: "top",
          offset: [20, 30],
          color: "#fff"
        }
      },
      data: item.data
    };
    seriesArr.push(tmp);
  }

  var option = {
    backgroundColor: "transparent",
    title: {
      text: title,
      textAlign: "center",
      textVerticalAlign: "middle",
      x: "50%",
      y: "5%",
      textStyle: {
        color: "#ffca00",
        fontSize: "22",
        align: "center",
        lineHeight: 0
      },
      subtextStyle: {
        color: "#989898",
        fontSize: "18"
      }
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        textStyle: {
          color: "#fff"
        }
      }
    },
    grid: {
      borderWidth: 0,
      top: 120,
      bottom: 45,
      textStyle: {
        // color: "#fff"
      }
    },
    xAxis: [
      {
        name: xData.name,
        nameTextStyle: {
          color: "#989898",
          fontSize: 15,
          padding: [45, 0, 0, 0],
          verticalAlign: "bottom"
        },
        type: "category",
        axisLine: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#012b19"
          }
        },
        axisTick: {
          show: false
        },
        splitArea: {
          show: false
        },
        axisLabel: {
          // interval: 0,
          color: "#989898",
          fontSize: 15
        },
        data: xData.data
      }
    ],
    yAxis: yAxis,
    series: seriesArr
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}

var xData = {
  name: "月",
  data: ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7"]
};

var customized = [
  {
    name: "预约数量",
    data: [709, 1917, 888, 999, 2455, 0, 1719, 1433, 1544, 3000, 2800, 4200],
    legendColor: "#ff3300",
    lineColor: "#ff3300",
    symbol:
      "image://data:image/png;base64,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"
  },
  {
    name: "统计",
    data: [1719, 1433, 1544, 3000, 2800, 4200, 709, 1917, 888, 999, 2455, 0],
    legendColor: "#00f9ff",
    itemColor: "#00f9ff",
    lineColor: {
      type: "linear",
      x: 0,
      y: 0,
      x2: 1,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: "rgba(0,249,255,0.00)" // 0% 处的颜色
        },
        {
          offset: 1,
          color: "#00f9ff" // 100% 处的颜色
        }
      ],
      global: false // 缺省为 false
    },
    symbol:
      "image://data:image/png;base64,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"
  }
];

  var effectScatter = {
		type: 'effectScatter',
		coordinateSystem: 'cartesian2d',
		data:((dataX,dataY) => {
			var effectScatterDate = [];
			for(let item in dataY){
				let data = dataY[item].data;
				let maxIndex=0;
				let max = data[0];
				for(let i= 1; i < data.length;i++){
					if(data[i]> max){
						max = data[i];
						maxIndex = i;
					}
				}
				effectScatterDate.push([dataX.data[maxIndex],max]);
			}
			return effectScatterDate;
		})(xData,customized),
		symbolSize: 6,
		showEffectOn: 'render',
		effectType: 'ripple',
		rippleEffect: {
			period: 2,
			brushType: 'stroke',
			scale:10
		},
		hoverAnimation: true,
		itemStyle: {
				normal: {
					color: '#FFFFFF',
					shadowBlur: 10,
					shadowColor: '#FFFFFF'                  
				}                 
			},                 
		zlevel: 1
};
// renderSmoothLine("main", "游客流量发展趋势", xData, "百万", customized);

/**
 * 二维度平滑折线图
 * @param {String} id
 * @param {Array} xData
 * @param {Array} yData
 * @param {Array} yData2
 */
function renderSmoothLine2Latitude(id, xData, yData, yData2) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(id));
  var option = {
    backgroundColor: "transparent",
    title: {
      text: "月旅游事件等级和类型统计",
      subtext: "2019.03.05",
      textAlign: "center",
      textVerticalAlign: "middle",
      x: "50%",
      y: "5%",
      textStyle: {
        color: "#ffca00",
        fontSize: "22",
        align: "center",
        lineHeight: 0
      },
      subtextStyle: {
        color: "#989898",
        fontSize: "18"
      }
    },
    legend: {
      data: [
        {
          name: "预约数量",
          icon: "roundRect"
        },
        {
          name: "统计",
          icon: "roundRect"
        }
      ],
      top: "18%",
      itemWidth: 28,
      itemHeight: 4,
      textStyle: {
        color: "#ffffff"
      }
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        textStyle: {
          color: "#fff"
        }
      }
    },
    grid: {
      borderWidth: 0,
      top: 120,
      bottom: 45,
      textStyle: {
        // color: "#fff"
      }
    },
    xAxis: [
      {
        name: "月",
        nameTextStyle: {
          color: "#989898",
          fontSize: 15,
          padding: [45, 0, 0, 0],
          verticalAlign: "bottom"
        },
        type: "category",
        axisLine: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#012b19"
          }
        },
        axisTick: {
          show: false
        },
        splitArea: {
          show: false
        },
        axisLabel: {
          // interval: 0,
          color: "#989898",
          fontSize: 15
        },
        data: xData
      }
    ],
    yAxis: [
      {
        name: "百万",
        nameTextStyle: {
          color: "#989898",
          fontSize: 15,
          padding: [0, 45, 0, 0],
          verticalAlign: "bottom"
          // align: "left"
        },
        type: "value",
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0,
          color: "#989898",
          fontSize: 15
        },
        splitArea: {
          show: false
        }
      },
      {
        name: "人",
        nameTextStyle: {
          color: "#989898",
          fontSize: 15,
          padding: [0, 45, 0, 0],
          verticalAlign: "bottom"
          // align: "left"
        },
        type: "value",
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0,
          color: "#989898",
          fontSize: 15
        },
        splitArea: {
          show: false
        }
      }
    ],
    series: [
      {
        name: "预约数量",
        type: "line",
        smooth: true,
        showSymbol: false,
        symbolSize: 0,
        itemStyle: {
          color: "#00f9ff" // 设置itemStyle.color，lengend图例中才会显示对应的颜色
        },
        lineStyle: {
          normal: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(0,249,255,0.00)" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#00f9ff" // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            },
            width: 3
          }
        },
          markPoint: {
              symbol:
                  "image://data:image/png;base64,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",
              symbolSize: [40, 90],
			  symbolOffset:[-1, 7],
              data: [{ type: "max", name: "最大值" }],
              label: {
                  show: true,
                  position: "top",
                  offset: [20, 30],
                  color: "#fff"
              }
          },
        data: yData
      },
      {
        name: "统计",
        yAxisIndex: 1,
        type: "line",
        smooth: true,
        showSymbol: false,
        symbolSize: 0,
        itemStyle: {
          color: "#ff3300" // 设置itemStyle.color，lengend图例中才会显示对应的颜色
        },
        lineStyle: {
          normal: {
            color: "#ff3300",
            width: 3
          }
        },
        markPoint: {
          symbol:
            "image://data:image/png;base64,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",
          symbolSize: [40, 90],
		  symbolOffset:[-1, 7],
          data: [{ type: "max", name: "最大值" }],
          label: {
            show: true,
            position: "top",
            offset: [20, 30],
            color: "#fff"
          }
        },
        data: yData2
      }
    ]
  };
	option.series.push(effectScatter);
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}

renderSmoothLine2Latitude(
  "main2",
  xData.data,
  customized[0].data,
  customized[1].data
);
