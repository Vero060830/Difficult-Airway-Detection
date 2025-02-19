<script>
import { ref } from "vue";
import { showToast } from "vant";
export default {
  setup() {
    const active = ref(0);
    const patients_list = [
      {
        id: 128190312,
        time: "2025-02-17",
        name: "张三",
        gender: "男",
        age: 45,
        state: "是",
        img: "../assets/patients_img/1.jpg",
      },
      {
        id: 128190313,
        time: "2025-02-16",
        name: "李四",
        gender: "女",
        age: 38,
        state: "否",
        img: "../assets/patients_img/2.jpg",
      },
      {
        id: 128190314,
        time: "2025-02-15",
        name: "王五",
        gender: "男",
        age: 50,
        state: "是",
        img: "../assets/patients_img/3.jpg",
      },
      {
        id: 128190315,
        time: "2025-02-14",
        name: "赵六",
        gender: "女",
        age: 29,
        state: "否",
        img: "../assets/patients_img/4.jpg",
      },
      {
        id: 128190316,
        time: "2025-02-13",
        name: "孙七",
        gender: "男",
        age: 60,
        state: "是",
        img: "../assets/patients_img/1.jpg",
      },
      {
        id: 128190317,
        time: "2025-02-12",
        name: "周八",
        gender: "女",
        age: 33,
        state: "否",
        img: "../assets/patients_img/2.jpg",
      },
      {
        id: 128190318,
        time: "2025-02-11",
        name: "吴九",
        gender: "男",
        age: 41,
        state: "是",
        img: "../assets/patients_img/3.jpg",
      },
      {
        id: 128190319,
        time: "2025-02-10",
        name: "郑十",
        gender: "女",
        age: 25,
        state: "否",
        img: "../assets/user.png",
      },
      {
        id: 128190320,
        time: "2025-02-09",
        name: "王十一",
        gender: "男",
        age: 47,
        state: "是",
        img: "../assets/user.png",
      },
      {
        id: 128190321,
        time: "2025-02-08",
        name: "李十二",
        gender: "女",
        age: 36,
        state: "否",
        img: "../assets/user.png",
      },
    ];
    const checked = ref("all");
    const mark = ref("true");
    const startDate = ref(["2022", "06", "01"]);
    const endDate = ref(["2023", "06", "01"]);

    const onConfirm = () => {
      showToast(`${startDate.value.join("/")} ${endDate.value.join("/")}`);
      if_time.value = false;
    };

    const onCancel = () => {
      showToast("cancel");
    };
    const if_time = ref(false);
    const select_time = () => {
      console.log;
      if_time.value = !if_time.value;
    };
    return {
      active,
      patients_list,
      checked,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 5, 1),
      endDate,
      startDate,
      onConfirm,
      onCancel,
      if_time,
      select_time,
      mark,
    };
  },
};
</script>

<template>
  <div id="search_bar">
    <div id="time" style="display: flex">
      <van-button
        @click="select_time"
        style="background-color: #25bc99; color: white; width: 100px !important"
        >选择</van-button
      >
      <van-field
        v-model="username"
        placeholder="开始时间"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="username"
        name="用户名"
        placeholder="结束时间"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
    </div>
    <div>
      <div style="display: block; margin-bottom: 10px">
        <van-radio-group v-model="checked" direction="horizontal">
          患者性别：&emsp;
          <van-radio name="all">不限</van-radio>
          <van-radio name="male">男</van-radio>
          <van-radio name="female">女</van-radio>
        </van-radio-group>
      </div>
      <div style="display: block">
        <van-radio-group v-model="mark" direction="horizontal">
          需要标注：&emsp;
          <van-radio name="true">是</van-radio>
          <van-radio name="false">否</van-radio>
        </van-radio-group>
      </div>
    </div>
    <van-picker-group
      title="预约日期"
      :tabs="['开始日期', '结束日期']"
      @confirm="onConfirm"
      @cancel="onCancel"
      v-show="if_time"
    >
      <van-date-picker
        v-model="startDate"
        :min-date="minDate"
        :max-date="maxDate"
      />
      <van-date-picker
        v-model="endDate"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-picker-group>

    <van-field v-model="sms" center clearable placeholder="输入患者姓名/住院号">
      <template #button>
        <van-button size="small" style="background-color: #25bc99; color: white"
          >搜索</van-button
        >
      </template>
    </van-field>
  </div>
  <div id="patients_list" v-for="patient in patients_list" :key="patient.id">
    <div class="patient_item">
      <p
        style="
          margin: 0px;

          font-size: 15px;
          padding: 0px 5px 0px 5px;
        "
        class="patient_title"
      >
        住院号：{{ patient.id }}&emsp; 采集日期：{{ patient.time }}
      </p>
      <div class="patient_item_bottom" style="background-color: white">
        <div class="img" style="background-color: white; text-align: center">
          <img
            src="../assets/patients_img/1.jpg"
            alt=""
            style="width: 90px; border-radius: 50%; margin-top: 5px"
          />
        </div>
        <div class="info">
          <p style="margin: 0cqh 5px 10px 5px; font-size: 20px">
            {{ patient.name }}
          </p>
          <p style="height: 20px; margin: 10px 5px 6px 5px">
            {{ patient.gender }} {{ patient.age }}岁
          </p>
          <p style="height: 20px; margin: 6px 5px 10px 5px">
            需要标注：{{ patient.state }}
          </p>
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            background-color: white;
            margin-right: 10px;
          "
        >
          <div style="color: green; border: green solid">正常气道</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: rgb(227, 226, 226);
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.patient_item {
  margin-bottom: 10px;
}
.patient_item_bottom {
  height: 100px;
  display: flex;
}
.patient_title {
  background-color: rgba(66, 178, 148, 0.817);
}
.img {
  width: 100px;
  height: 100px;
}
#search_bar {
  padding: 10px;
  height: 150px;
  margin-bottom: 10px;
  background: white;
}
.info {
  padding: 5px;
  flex-grow: 2;
  background: white;
}
</style>
