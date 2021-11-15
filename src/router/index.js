import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('../views/home/Index')
        },
        {
            path: '/tsingsee',
            name: 'Tsingsee',
            component: () => import('../views/tsingsee/Index'),
            children: [
                {
                    path: 'easyplayer',
                    name: 'EasyPlayer',
                    component: () => import('../views/tsingsee/EasyPlayer')
                },
                {
                    path: 'easywasmplayer',
                    name: 'EasyWasmPlayer',
                    component: () => import('../views/tsingsee/EasyWasmPlayer')
                }
            ],
        },
        {
            path: '/jsmpeg-player',
            name: 'JsmpegPlayer',
            component: () => import('../views/jsmpeg-player/Index')
        }
    ]
})


export default router