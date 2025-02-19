<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const data_list = ref([]);

// 初始化第一个图表（气道比例）
const initChart1 = () => {
  const chartDom = document.getElementById("chart1");
  const myChart = echarts.init(chartDom);

  const colorList = ["#73DDFF", "#73ACFF"];

  const option = {
    backgroundColor: "#FFFFFF", // 设置背景色为白色
    title: {
      text: "气道情况比例",
      x: "center",
      y: "center",
      textStyle: {
        fontSize: 15,
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "horizontal",
      left: "center",
      top: "top",
      data: ["正常气道", "困难气道"],
    },
    series: [
      {
        type: "pie",
        center: ["50%", "50%"],
        radius: ["50%", "80%"],
        itemStyle: {
          color: function (params) {
            return colorList[params.dataIndex];
          },
        },
        labelLine: {
          show: false,
        },
        label: {
          formatter: "{b}: {d}%",
        },
        data: [
          { name: "正常气道", value: 70 },
          { name: "困难气道", value: 30 },
        ],
      },
    ],
  };

  myChart.setOption(option);
};

// 初始化第二个图表（困难气道患者男女比例）
const initChart2 = () => {
  const chartDom = document.getElementById("chart2");
  const myChart = echarts.init(chartDom);

  const colorList = ["#FF9F7F", "#37A2DA"];

  const option = {
    backgroundColor: "#FFFFFF", // 设置背景色为白色
    title: {
      text: "困难气道男女比例",
      x: "center",
      y: "center",
      textStyle: {
        fontSize: 15,
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "horizontal",
      left: "center",
      top: "top",
      data: ["男性", "女性"],
    },
    series: [
      {
        type: "pie",
        center: ["50%", "50%"],
        radius: ["50%", "80%"],
        itemStyle: {
          color: function (params) {
            return colorList[params.dataIndex];
          },
        },
        label: {
          formatter: "{b}: {d}%",
        },
        labelLine: {
          show: false,
        },
        data: [
          { name: "男性", value: 60 },
          { name: "女性", value: 40 },
        ],
      },
    ],
  };

  myChart.setOption(option);
};

// 初始化第三个图表（双柱形图：年龄段-人数）
const initChart3 = () => {
  const chartDom = document.getElementById("chart3");
  const myChart = echarts.init(chartDom);

  const option = {
    backgroundColor: "#FFFFFF", // 设置背景色为白色
    title: {
      text: "年龄段检测人数分布",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["男性", "女性"],
      top: "top",
      right: "right",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["0-20岁", "21-40岁", "41-60岁", "61-80岁", "80岁以上"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "男性",
        type: "bar",
        data: [10, 30, 40, 20, 5],
        itemStyle: {
          color: "#37A2DA",
        },
      },
      {
        name: "女性",
        type: "bar",
        data: [8, 25, 35, 15, 3],
        itemStyle: {
          color: "#FF9F7F",
        },
      },
    ],
  };

  myChart.setOption(option);
};

// 初始化第四个图表（折线图：近一年困难气道患者人数）
const initChart4 = () => {
  const chartDom = document.getElementById("chart4");
  const myChart = echarts.init(chartDom);

  const option = {
    backgroundColor: "#FFFFFF", // 设置背景色为白色
    title: {
      text: "近一年困难气道患者人数",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
    },

    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "困难气道人数",
        type: "line",
        data: [12, 15, 20, 18, 22, 25, 30, 28, 24, 26, 20, 18],
        itemStyle: {
          color: "#FF9F7F",
        },
        areaStyle: {
          color: "rgba(255, 159, 127, 0.3)",
        },
      },
    ],
  };

  myChart.setOption(option);
};

// 使用 Vue 的生命周期钩子初始化图表
onMounted(() => {
  initChart1();
  initChart2();
  initChart3();
  initChart4();
});
</script>

<template>
  <van-nav-bar title="困难气道统计图表" />
  <div class="data_list">
    <div class="data_item">
      <p>累计检测人数</p>
      <p>336</p>
    </div>
    <div class="data_item">
      <p>累计困难气道</p>
      <p>89</p>
    </div>
    <div class="data_item">
      <p>今日检测人数</p>
      <p>12</p>
    </div>
  </div>

  <!-- 图表容器 -->
  <div style="display: flex; flex-wrap: wrap; justify-content: space-between">
    <div id="chart1" class="chart-container"></div>
    <div id="chart2" class="chart-container"></div>
  </div>
  <div id="chart3" class="chart-container2"></div>
  <div id="chart4" class="chart-container2"></div>
</template>

<style>
body {
  background-color: rgb(249, 247, 247);
}
.data_list {
  margin-top: 10px;
  height: 60px;
  display: flex;
  justify-content: space-around;
}
.data_item {
  padding: 0px;
  width: 30%;
  border-radius: 5px;
  text-align: center;
}
.data_item p {
  color: rgb(31, 30, 30);
  line-height: 10px;
}

.data_item:first-child {
  background: rgb(172, 223, 172);
}
.data_item:nth-child(2) {
  background: rgb(248, 161, 146);
}
.data_item:nth-child(3) {
  background: rgb(166, 212, 228);
}
.data_item p:nth-child(1) {
  font-weight: bold;
}
.chart-container {
  width: 46%;
  height: 200px;
  margin-top: 10px;
}
.chart-container2 {
  width: 100%;
  height: 250px;
  margin-top: 10px;
}
#chart1,
#chart2,
#chart3,
#chart4 {
  margin: 15px 5px 15px 5px;
}
</style>
