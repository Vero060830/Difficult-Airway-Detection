<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <div id="title"></div>
  <main style="margin: 20px">
    <div id="loginCard">
      <van-tabs v-model:active="active" style="border-radius: 5px">
        <van-tab title="登录">
          <van-form @submit="onSubmit" id="loginForm">
            <van-field
              class="myField"
              v-model="username"
              name="员工号"
              label="员工号"
              placeholder="员工号"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
              class="myField"
              v-model="password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
            <p
              style="
                color: #2bae7e;
                font-size: 13px;
                float: right;
                margin: -5px 20px 10px 20px;
              "
            >
              忘记密码
            </p>
            <div style="margin: 20px">
              <van-button
                round
                block
                native-type="submit"
                style="height: 50px; color: white; background-color: #25bc99"
              >
                登录
              </van-button>
            </div>
          </van-form></van-tab
        >
        <van-tab title="注册"
          ><van-form @submit="onSubmit" id="loginForm">
            <van-field
              class="myField"
              v-model="username"
              name="员工号"
              label="员工号"
              placeholder="员工号"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
              class="myField"
              v-model="password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
            <van-field
              class="myField"
              v-model="password"
              type="password"
              name="确认密码"
              label="确认密码"
              placeholder="确认密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />

            <div style="margin: 20px">
              <van-button
                round
                block
                type="success"
                native-type="submit"
                style="height: 50px; background-color: #25bc99"
              >
                注册
              </van-button>
            </div>
          </van-form></van-tab
        >
      </van-tabs>
    </div>
  </main>
</template>

<style>
#loginCard {
  background-color: rgb(245, 242, 242);
  margin-top: 50px;
  margin-bottom: 50px;
  padding-bottom: 20px;
  height: 300px;

  display: flex;
  align-items: center;
  justify-content: center; /* 居中对齐内容 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
}
#loginForm {
  margin: 10px;
}
#loginCard h1 {
  color: #25bc99; /* 让文字更加清晰 */
  font-size: 24px;
  text-align: center;
}
#loginForm {
}
.myField {
  border-radius: 5px;
  height: 50px;
  width: 90% !important;
  font-size: 20px;
  margin: 20px;
  border: black solid 0.8px;
}
#title {
  width: 100%; /* 设置宽度为视口宽度 */
  height: 200px; /* 保持高度 */
  background: url("../assets/loginBg.png");
  background-size: cover; /* 图片会覆盖整个 div，保持比例 */
  background-position: center; /* 图片居中显示 */
  background-repeat: no-repeat; /* 防止图片重复 */
}
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>