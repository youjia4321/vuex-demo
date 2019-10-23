<template>
  <div class="login">
    登录状态：{{ $store.state.isLogin }}
    <br />登录页
    <br />
    <i-Input
      type="text"
      v-model="username"
      placeholder="username"
      style="width: 300px"
      maxlength="10"
      show-word-limit
    />
    <br />
    <i-Input
      type="password"
      v-model="password"
      placeholder="username"
      style="width: 300px"
      @keyup.enter.native="loginHandle"
      maxlength="15"
      show-word-limit
    />
    <br />
    <Button type="primary" @click="loginHandle">登录</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    loginHandle() {
      // 表单验证
      if (!this.username || !this.password) return;

      // 修改isLogin状态
      this.$store.commit("changeLogin", true);
      // 修改username状态
      this.$store.commit("changeUsername", this.username);
      // 修改password状态
      this.$store.commit("changePassword", this.password);

      this.$router.push("/"); // 跳到首页

      console.log(this.$store.state);
    }
  }
};
</script>

<style>
</style>