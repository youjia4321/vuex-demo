<template>
  <div class="home">
    登录状态：{{ isLogin }}
    <!-- {{ $store.state.isLogin }} -->
    <br />
    <!-- {{ $store.state.username }} -->
    用户名：{{ username }}，你好！
    <br />
    密码：{{ password }}
    <br />
    总和： {{ sum }}
    <hr />
    <div>
      <div>
        <a href="javascript:;" @click="getChecked(true)">已签到</a> |
        <a href="javascript:;" @click="getChecked(false)">未签到</a>
      </div>
      <ul>
        <li v-for="(item, index) in checkList" :key="index">{{item.name}}</li>
      </ul>
    </div>
    <br />首页
  </div>
</template>

<script>
import { mapState } from "vuex";
// 使用vuex中的mapState映射store中的变量
export default {
  data() {
    return {
      a: 10,
      b: 20,
      checkList: []
    };
  },
  methods: {
    getChecked(checked) {
      console.log(this.$store.getters.showChecked(checked));
      this.checkList = this.$store.getters.showChecked(checked);
    }
  },
  // 对象展开运算符[...]
  computed: {
    sum() {
      return this.a + this.b;
    },
    showChecked() {
      return this.$store.getters.showChecked;
    },
    ...mapState({
      isLogin: state => state.isLogin,
      username: state => state.username,
      password: state => state.password
    })
  }
};
</script>

<style>
</style>