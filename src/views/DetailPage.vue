<script setup>
import { ref } from "vue";
const photo_types = ref([
  "正面",
  "最大张口度",
  "张口伸舌",
  "下门牙咬伤上唇",
  "侧面",
  "侧面颈部最大后仰",
]);
</script>

<template>
  <van-nav-bar
    title="患者信息详情页"
    style="background-color: rgb(225, 222, 212)"
  />
  <div id="collect_info">
    <p>采集编号：21313141 &emsp;&emsp;采集日期：2024-12-21</p>
  </div>

  <div id="person_info">
    <div>
      <p>姓名：张三</p>
      <p>性别：女</p>
      <p>年龄：56 岁 &emsp;</p>
      <p>身高：175cm &emsp; 体重：67kg</p>
      <span style="color: rgb(53, 121, 248)">需要标注：是</span>
      <p>住院号：13414221326567</p>
    </div>
    <div
      class="img"
      style="
        background-color: white;
        text-align: center;

        display: flex;
        align-items: center;
      "
    >
      <img
        src="../assets/patients_img/1.jpg"
        alt=""
        style="height: 160px; width: 130px; margin-top: 5px"
      />
    </div>
  </div>

  <div id="report_info" style="color: red">
    <p>检测结果： <span>困难气道</span></p>
    <p>等级： <span style="color: red">三级-四级</span></p>
    <p>描述： <span style="color: red">会厌可见声带不可见或会厌不可见</span></p>
    <van-button plain type="primary">生成检验报告单</van-button>
  </div>

  <div id="images">
    <van-grid :column-num="3" square gutter="5">
      <van-grid-item
        v-for="value in photo_types"
        :key="value"
        icon="photo-o"
        :text="value"
      />
    </van-grid>
  </div>
  <div id="audio">
    <p>患者发声音频</p>
    <audio controls>
      <source
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        type="audio/mpeg"
      />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<style>
body {
  background-color: rgb(245, 242, 242);
}
#report_info {
  height: 180px;
}
#person_info,
#report_info,
#collect_info {
  margin-bottom: 10px;
  padding: 15px;
  background: white;
}
#collect_info {
  padding: 5px;
}
#person_info {
  display: flex;
  justify-content: space-between;
}
audio {
  color: white;
  width: 100%;
}
#audio {
  padding: 10px 15px 10px 15px;
  font-weight: bold;
  background: white;
  margin-bottom: 60px;
}
#images {
  margin-bottom: 5px;
}
</style>