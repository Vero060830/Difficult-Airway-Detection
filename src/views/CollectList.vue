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
  <van-nav-bar title="患者照片采集" />

  <div id="progress">
    <van-rate
      v-model="value"
      icon="arrow-double-right"
      void-icon="arrow-double-right"
      :size="35"
      :count="6"
    />
    <span style="font-size: 18px; line-height: 35px; float: right"> 进度</span>
  </div>
  <div id="photo_list">
    <van-grid :column-num="2" square :gutter="10">
      <van-grid-item
        v-for="value in photo_types"
        :key="value"
        icon="photo-o"
        :text="value"
      />
    </van-grid>
  </div>
  <div style="text-align: center">
    <van-button type="success">下一步</van-button>
  </div>
</template>

<style>
body {
  background-color: rgba(241, 234, 234, 0.801);
}
#progress {
  margin-top: 15px;
  padding: 5px;
  background: rgb(251, 251, 251);

  justify-content: space-around;
  display: flex;
}
#photo_list {
  margin-top: 15px;
}
</style>