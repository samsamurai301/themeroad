export const analyticsChartOption = {
  title: {
    text: 'Monthly Analytics',
    textStyle: {
      fontSize: 16,
    },
  },
  tooltip: {
    trigger: 'axis',
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    boundaryGap: false,
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Sales',
      type: 'line',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      smooth: true,
      areaStyle: {
        opacity: 0.3,
      },
      lineStyle: {
        width: 3,
      },
    },
  ],
};

export const segmentsChartOption = {
  title: {
    text: 'Segment Analysis',
    textStyle: {
      fontSize: 16,
    },
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '5%',
    left: 'center',
  },
  series: [
    {
      name: 'Segments',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Segment A' },
        { value: 735, name: 'Segment B' },
        { value: 580, name: 'Segment C' },
        { value: 484, name: 'Segment D' },
        { value: 300, name: 'Segment E' },
      ],
    },
  ],
};
