const routes = [
    {
        path: "/",
        name: 'Home',
        component: () => import('../views/Home.vue'),
        children: [
            { 
                path: "/checkAccount",
                component: () => import('../views/Money.vue'),
                // children :[
                //     { path: "/bonus", component: () => import('../views/Bonus.vue')},
                // ]
            },
            { path: "/forgetPassword", component: () => import('../views/Bonus.vue')},
            { path: "/test", component: () => import('../views/Test.vue')},
        ]
    },
]

export default routes