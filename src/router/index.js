import Vue from 'vue'
import VueRouter from 'vue-router'

//因为是插件，所以得使用
Vue.use(VueRouter)

import Main from 'views/main/Main'
import Classall from 'views/classall/Classall'
import Shopingcar from 'views/shopingcar/Shopingcar'
import List from 'views/list/List'
import Info from 'views/info/Info'
import My from 'views/info/my'

const routes = [
    {
        path: '/',
        redirect: '/my/main'
    },
    {
        name:'info',
        path:'/info',
        component:Info
    },
    {
        name: 'my',
        path: '/my',
        component: My,
        children:[
            {
                name: 'main',
                path: 'main',
                component: Main
            },
            {
                name: 'classall',
                path: 'classall',
                component: Classall
            },
            {
                name: 'shopingcar',
                path: 'shopingcar',
                component: Shopingcar
            },
            {
                name: 'list',
                path: 'list',
                component: List
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
