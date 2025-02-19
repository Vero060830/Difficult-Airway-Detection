<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="filter-o">
      <RouterLink to="/collect_list">采集</RouterLink></van-tabbar-item
    >
    <van-tabbar-item icon="friends-o">
      <RouterLink to="/patients_list">患者</RouterLink></van-tabbar-item
    >
    <van-tabbar-item icon="chart-trending-o">
      <RouterLink to="/statistics_charts">图表</RouterLink></van-tabbar-item
    >
    <van-tabbar-item icon="setting-o">
      <RouterLink to="/patient_detail">我的</RouterLink></van-tabbar-item
    >
  </van-tabbar>

  <RouterView />
</template>

<style scoped>
</style>
