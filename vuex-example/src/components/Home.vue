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
    总和：a + b = {{ sum }}
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
    <hr />
    <div>
      <div>周杰伦的歌</div>
      <ul>
        <li v-for="(item, index) in showSongs" :key="index">{{item.name}} - {{item.singer}}</li>
      </ul>
    </div>
    <hr />
    <p>{{ count }}</p>
    <Button @click="add">+</Button>
    <Button @click="reset">reset</Button>
    <br />
    <Button @click="logout">logout</Button>
  </div>
</template>

<script>
// mapState辅助函数：当一个组件需要获取多个状态时，将这些状态都声明为计算属性会有些重复和冗余。
// 为了解决这个问题，我们可以使用mapState辅助函数帮助我们生成计算属性。
import { mapState, mapGetters, mapMutations } from "vuex";
// 使用vuex中的mapState映射store中的变量
export default {
  data() {
    return {
      a: 10,
      b: 20,
      checkList: []
    };
  },
  created() {
    this.getChecked(true);
  },
  methods: {
    getChecked(checked) {
      console.log(this.$store.getters.showChecked2(checked));
      this.checkList = this.showChecked2(checked);
    },
    logout() {
      this.$store.state.isLogin = false;
      this.$router.push("/login");
    },
    // method1
    ...mapMutations(["addCount", "resetCount"]),
    add() {
      this.addCount({ n: 1 });
    },
    reset() {
      this.resetCount({ data: 0 });
    }

    // memthod2
    // add() {
    //   this.$store.commit({
    //     type: "addCount",
    //     n: 1
    //   });
    // },
    // reset() {
    //   this.$store.commit({
    //     type: "resetCount",
    //     data: 0
    //   });
    // },

    // method3
    // ...mapMutations({
    //   theAdd: 'addCount',
    //   theReset: 'resetCount'
    // }),

    // add () {
    //   this.theAdd({n: 1})
    // },
    // reset () {
    //   this.theReset({data: 0})
    // }
  },
  // 对象展开运算符[...]
  computed: {
    sum() {
      return this.a + this.b;
    },
    showChecked() {
      return this.showChecked;
    },
    // ...mapState({
    //   isLogin: state => state.isLogin,
    //   username: state => state.username,
    //   password: state => state.password,
    //   count: state => state.count
    // }),
    ...mapState(["isLogin", "username", "password", "count"]),
    ...mapGetters(["showSongs", "showChecked", "showChecked2"])
  }
};
</script>

<style scoped>
a:focus {
  color: red;
}
li {
  display: block;
}
</style>