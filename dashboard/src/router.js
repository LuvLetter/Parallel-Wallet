const routers = [{
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path:'/analytics',
        component: (resolve) => require(['./views/analytics.vue'], resolve)

    },
    {
        path: '/profile',
        component: (resolve) => require(['./views/profile.vue'], resolve)
    }
];
export default routers;