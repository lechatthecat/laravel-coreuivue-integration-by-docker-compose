import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/js/laypouts/containers/DefaultContainer.vue')

// Views - Pages
const Home = () => import('@/js/views/pages/Home')
const Login = () => import('@/js/views/pages/Login')
const Register = () => import('@/js/views/pages/Register')
const page404 = () => import('@/js/views/pages/Page404')
const page500 = () => import('@/js/views/pages/Page500')

// components
const User = () => import('@/js/components/User')
const Users = () => import('@/js/components/Users')
const Dashboard = ()  => import('@/js/components/Dashboard')

Vue.use(Router)

export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            redirect: '/pages/home',
            name: 'Home',
            component: DefaultContainer,
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: Dashboard
                },
                {
                    path: '/users',
                    name: 'users',
                    component: Users
                },
                {
                    path: '/users/:id',
                    name: 'user',
                    component: User
                },
            ]
        },      
        {
            path: '/pages',
            redirect: '/pages/404',
            name: 'Pages',
            component: {
              render (c) { return c('router-view') }
            },
            children: [
                {
                    path: '/pages/',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/pages/home',
                    name: 'home2',
                    component: Home
                },
                {
                    path: '/pages/login',
                    name: 'login',
                    component: Login
                },
                {
                    path: '/pages/register',
                    name: 'register',
                    component: Register
                },
                {
                    path: '/pages/page404',
                    name: 'page404',
                    component: page404
                },
                {
                    path: '/pages/page500',
                    name: 'page500',
                    component: page500
                },
            ]
        },      
    ]
})
