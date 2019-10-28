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
            { name: '钢铁侠', checked: true },
            { name: '美国队长', checked: false },
            { name: '黑寡妇', checked: true },
            { name: '雷神', checked: false },
            { name: '黑豹', checked: true },
            { name: '蜘蛛侠', checked: true },
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
        showChecked: state => {
            return state.list.filter(item => item.checked)
        },
        showChecked2: (state) => (checked) => {
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
    },
    // 在mutation中混合异步调用会导致你的程序很难调试。
    // 例如当你调用了两个包含异步回调的mutation来改变状态，你怎么知道什么时候回调和哪个先回调呢？这就是为什么我们要区分这两个概念。
    // 在Vuex中，mutation都是同步事务。为了处理异步操作，让我们来看一看Action.

    // Action类似于Mutation，不同在于：

    // Action提交的是mutation，而不是直接变更状态
    // Action可以包含任意异步操作
    // actions: {
    //     // Action函数接受一个与store实例具有相同方法和属性的context对象，
    //     // 因此你可以调用context.commit提交一个mutation，或者通过context.state和context.getters来获取state和getters
    //     // 实践中，可以用参数结构来简化代码
    //     changeLogin(context) {
    //         console.log(context)
    //         context.commit('changeLogin')
    //     },
    //     changeUsername(context) {
    //         context.commit('changeUsername')
    //     },
    //     changePassword(context) {
    //         context.commit('changePassword')
    //     }
    // }
    actions: {
        changeLogin2({ commit }, data) {
            commit('changeLogin', data)
        },
        // changeUsername(context, data) {
        //     context.commit('changeUsername', data)
        // },
        changeUsername2({ commit }, data) {
            commit('changeUsername', data)
        },
        // 可以进行异步操作
        changePassword2(context, data) {
            setTimeout(() => {
                context.commit('changePassword', data)
            }, 1000)
        }
    }
})

export default store