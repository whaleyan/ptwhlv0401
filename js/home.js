//时间
$(document).ready(function () {

    //月累计来访台客趋势
    var PictorialBar1 = {
        cate: ['8', '9', '10', '11', '12', '1', '2'],
        value:['900', '500', '200', '700', '1400', '600', '800']
    };

    var PictorialBar2 = {
        cate: ['8', '9', '10', '11', '12', '1', '2'],
        value:['600', '200', '800', '900', '1862', '1000', '500']
    };

    var Bar1 = {
        cate: ['上海','广东','浙江','福建','江苏'],
        value: ['200','130','160','130','110']
    }

    var Bar2 = {
        cate: ['上海','广东','浙江','福建','江苏'],
        value: ['180','230','100','150','130']
    }

    var color1 = "#ffca00";
    var color2 = "#00f9ff";

    PictorialBar("PictorialBar1","月累计房客旅客趋势",PictorialBar1,color1);
    PictorialBar("PictorialBar2","月累计房客旅客趋势",PictorialBar2,color2);

    Bar("Bar1",'游客来源排名',Bar1);
    Bar("Bar2",'各地游客消费排名',Bar2);

    // Pie("Pie1");

    setInterval(function(){
        PictorialBar("PictorialBar1","月累计房客旅客趋势",PictorialBar1,color1);
        PictorialBar("PictorialBar2","月累计房客旅客趋势",PictorialBar2,color2);
        Bar("Bar1",'游客来源排名',Bar1);
        Bar("Bar2",'各地游客消费排名',Bar2);
        // Pie("Pie1");
    },10000);
});
//电池图
function PictorialBar(divID, title,data, color) {
    var myBar = echarts.init(document.getElementById(divID));

    var labelStyles = {
        outside: {
            show: false,
            color: "#d6b328",
            fontFamily: "PingFang-Regular",
            fontSize: 14,
            position: "top"
        },
        inside: {
            show: false,
            color: "#ffd713",
            fontFamily: "PingFang-Regular",
            fontSize: 16,
            position: "insideRight"
        }
    };

    option = {

        title: {
            text: title,
            // subtext: "2019.03.05",
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
            // subtextStyle: {
            //     color: "#989898",
            //     fontSize: "18"
            // }
        },
        grid: {
            left: 0,
            right: 20,
            top: 35,
            bottom: 0,
            containLabel: true
        },

        xAxis: {
            name: '月',
            nameGap: 5,
            type: 'category',
            nameTextStyle: {
                color: "#989898",
                fontSize: 10,
                fontFamily: "PingFang-Regular",
                verticalAlign: 'top',
            },
            data: data.cate,
            splitLine: {
                show: false
            },
            axisLabel: {
                interval: 0,//标签设置为全部显示
                show: true,
                color: "#989898",
                fontSize: 10,
                fontFamily: "PingFang-Regular"
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    type: 'solid',
                    color: '#2d3291',//边线的颜色
                    width: '1'       //坐标线的宽度
                }
            },
            z: 10
        },
        yAxis: {
            name: '人',
            nameGap: 5,
            type: "value",
            nameTextStyle: {
                color: "#989898",
                fontSize: 10,
                fontFamily: "PingFang-Regular",
            },
            axisLine: {
                show: false,
                lineStyle: {
                    type: 'solid',
                    color: '#2d3291',//边线的颜色
                    width: '1'       //坐标线的宽度
                }
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                color: "#989898",
                fontSize: 10,
                fontFamily: "PingFang-Regular",
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'solid',
                    color: '#2d3291',//边线的颜色
                    width: '1'       //坐标线的宽度
                },
                color: "#9ad9ff"
            }
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        series: [
            {
                type: 'pictorialBar',
                symbol: 'rect',
                symbolSize: [20, 8],
                color: color,
                barWidth: 10,
                itemStyle: {
                    normal: {
                        width: 30,
                        color: color,
                        barBorderRadius: [50, 50, 50, 50]
                    },
                    emphasis: {
                        barBorderRadius: 30
                    }
                },
                stack: 'all',
                symbolRepeat: true,
                animationEasing: 'elasticOut',
                label: {
                    normal: labelStyles.outside
                },
                data: data.value,
                animationDelay: function (dataIndex, params) {
                    return params.index * 30 * 1.1;
                },

            }
        ]
    };

    myBar.setOption(option);
}

//柱状图
function Bar(divID, title, data) {
    var myBar = echarts.init(document.getElementById(divID));
    var yMax = 300;
    var dataShadow = [];
    for (var i = 0; i < data.cate.length; i++) {
        dataShadow.push(yMax);
    }

    option = {
        animationDuration:3000,
        color:[new echarts.graphic.LinearGradient(
            0, 0, 0, 1, [{
                offset: 0,
                color: '#d4c52b'
            },
                {
                    offset: 0.7,
                    color: 'rgba(212,197,43,0)'
                },
                {
                    offset: 1,
                    color: 'rgba(212,197,43,0.5)'
                },
            ]
        )],
        title: {
            text: title,
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
        grid: {
            left: 10,
            right: 0,
            bottom: 0,
            top: 50,
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            z: 10
        },
        yAxis: {
            type: 'category',
            data: data.cate,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ffffff",
                    fontSize:13
                }
            }
        },
        series: [
            { // For shadow
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0.05)',
                        borderWidth:1,
                        borderColor:'#00f6ff',
                    }
                },
                barGap:'-100%',
                barCategoryGap:'10%',
                data: dataShadow,
                animation: false
            },
            {
                name: '',
                type: 'bar',
                barWidth: 29,
                itemStyle: {
                    normal:{
                        borderWidth:1,
                        borderColor:'#00f6ff',
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: "{c}h",
                            position: [300, -10],
                            textStyle: {
                                color: "#00f6ff",
                                fontSize:15
                            }
                        }
                    },
                },
                data: data.value
            }
        ]
    };

    myBar.setOption(option);
}

function Pie(divID) {
    var myPie = echarts.init(document.getElementById(divID));

    function getData(percent) {
        return [{
            value: percent,
            name: percent,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: '#000000'
                    }, {
                        offset: 1,
                        color: '#FF0000'
                    }]),
                    borderWidth: 10.5,
                    shadowBlur: 30,
                }
            }
        }, {
            value: 1 - percent,
            itemStyle: {
                normal: {
                    color: '#000000',
                }
            },
        }];
    }

    var placeHolderStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0
        }
    };

    option = {
        title: {
            text: '55%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: '#ffffff',
                fontSize: '18'
            }
        },
        series: [{
            name: '',
            type: 'pie',
            clockWise: true, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [45, 55],
            itemStyle: placeHolderStyle,
            data: getData(0.55)
        }]
    };
    myPie.setOption(option);
}
