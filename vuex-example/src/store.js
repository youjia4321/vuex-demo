import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 提交载荷
// 你可以向store.commit传入额外的参数，即mutation的载荷.
// 这里做一个用到mutation的小demo
// 在store.js的state里添加一个count状态
const store = new Vuex.Store({
    state: {
        count: 0,
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
        ],
        songs: [
            { name: '黑色毛衣', singer: '周杰伦' },
            { name: '烟花易冷', singer: '周杰伦' },
            { name: '爱笑的眼睛', singer: '林俊杰' },
            { name: '美人鱼', singer: '林俊杰' },
            { name: '不能说的秘密', singer: '周杰伦' },
            { name: '一千年以后', singer: '林俊杰' },
            { name: '七里香', singer: '周杰伦' },
            { name: '修炼爱情', singer: '林俊杰' },
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
        },
        showSongs: state => {
            return state.songs.filter(item => item.singer == '周杰伦')
        },
    },
    // 更改vuex的store中的状态的唯一方法是提交mutation。
    // 你不能直接调用一个mutation handler。这个选项更像是事件注册。
    // 要唤醒一个mutation handler，你需要以相应的type调用store.commit方法
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
        },


        // addCount(state, n) {
        //     state.count += n
        // },
        // resetCount(state, data) {
        //     state.count = data;
        // },

        // 使用对象形式的载荷也能实现这种效果
        // 很多时候，尤其是当数据比较复杂，使用对象形式的载荷会更好。
        addCount(state, payload) {
            state.count += payload.n
        },
        resetCount(state, payload) {
            state.count = payload.data;
        }
    }
})

export default store