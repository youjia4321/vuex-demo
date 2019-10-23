import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLogin: false, //登录状态
        username: '', //用户名
        password: '', //密码
        list: [
            { name: '张三', checked: true },
            { name: '李四', checked: false },
            { name: '哪吒', checked: true },
            { name: '敖丙', checked: false },
            { name: '申公豹', checked: true },
            { name: '太乙真人', checked: true },
        ]
    },
    // getters: {
    //     showChecked: state => {
    //         return state.list.filter(item => item.checked)
    //     }
    // },
    getters: {
        showChecked: (state) => (checked) => {
            return state.list.filter(item => item.checked === checked)
        }
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

export default store