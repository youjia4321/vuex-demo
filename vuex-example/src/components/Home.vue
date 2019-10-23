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
      b: 20
    };
  },
  // computed: {
  //   isLogin() {
  //     return this.$store.state.isLogin;
  //   },
  //   username() {
  //     return this.$store.state.username;
  //   },
  //   password() {
  //     return this.$store.state.password;
  //   }
  // }
  // 对象展开运算符[...]
  computed: {
    sum() {
      return this.a + this.b;
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