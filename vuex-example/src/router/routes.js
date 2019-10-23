import Home from '@/components/Home'
import Login from '@/components/Login'

export default [
    {
        path: '/',
        component: Home,
        meta: { auth: true }
    },
    {
        path: '/login',
        component: Login,
        meta: { auth: true }
    }
]