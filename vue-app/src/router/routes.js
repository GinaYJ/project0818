const routes = [
    {
        path: "/",
        name: 'Home',
        component: () => import('../views/PhoneValidation.vue'),
        // children: [
        //     { 
        //         path: "/money",
        //         component: () => import('../views/Money.vue'),
        //         // children :[
        //         //     { path: "/bonus", component: () => import('../views/Bonus.vue')},
        //         // ]
        //     },
        //     { path: "/bonus", component: () => import('../views/Bonus.vue')},
        //     { path: "/test", component: () => import('../views/Test.vue')},
        // ]
    },
    {
        path: "/test",
        name: 'test',
        component: () => import('../views/Test.vue'),
    },
    // {
    //     path: '/:catchAll(.*)',
    //     name: '404',
    //     component: () => import('../views/404.vue')
    // } 
]

export default routes