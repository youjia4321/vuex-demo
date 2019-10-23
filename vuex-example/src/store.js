import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        isLogin: false, //登录状态
        username: '', //用户名
        password: '' //密码
    },
    mutations: {
        // 修改登录状态
        changeLogin(state, data) {
            state.isLogin = data
        },
        // 修改用户名状态
        changeUsername(state, data) {
            state.username = data
        },
        // 修改密码状态
        changePassword(state, data) {
            state.password = data
        }
    }
})
