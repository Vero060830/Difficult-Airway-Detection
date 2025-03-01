<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <van-nav-bar title="设置" />
  <div id="person_info">
    <div style="display: flex; align-items: center">
      <img
        src="../assets/nurse.jpg"
        alt=""
        style="
          box-sizing: border-box;
          height: 100px;
          width: 100px;
          border: black solid 0.9px;
          border-radius: 50%;
        "
      />
    </div>
    <div>
      <p>姓名：杨颜</p>
      <p>员工号：31238194</p>
    </div>
  </div>
  <div id="edit">
    <div class="edit_bar">修改密码</div>
    <div class="edit_bar">帮助中心</div>
    <div class="edit_bar">关于我们</div>
  </div>
  <div id="btns">
    <van-button type="success">退出登录</van-button>
  </div>
</template>

<style>
body {
  background: #e6e2e2d3;
}
#person_info {
  background: rgb(130, 192, 130);
  height: 150px;
  background: white;
  display: flex;
  margin-bottom: 10px;
}
#person_info div {
  padding: 20px;
}
.edit_bar {
  height: 60px;
  font-size: 20px;
  border-bottom: solid #ccc 0.8px;
  line-height: 60px;
  padding-left: 15px;
}
#edit {
  margin-bottom: 20px;
  background: white;
}
#btns {
  display: flex;
  justify-content: center;
}
</style>