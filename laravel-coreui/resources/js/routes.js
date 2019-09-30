import Vue from 'vue'
import Router from 'vue-router'

// Views - Pages
const Login = () => import('@/js/views/pages/Login')
const Register = () => import('@/js/views/pages/Register')
const Home = () => import('@/js/components/Home')

Vue.use(Router)

export default new Router({
    // hashモードを使うのはhistoryモード(html5)に対応していないブラウザがあるため
    // hashによるurlの指定: / -> home, /#/login -> login 等, #を使うのがhash
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})
