import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import echarts from 'echarts';
import 'iview/dist/styles/iview.css';


Vue.use(VueRouter);
Vue.use(Vuex);


Vue.use(iView);

Vue.prototype.$echarts = echarts


// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});


const store = new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
});

    Util.ajax.get("http://139.199.7.161:4000/getTable")
    .then(response => {Vue.MainTable.data1 = response.data});


new Vue({ 
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});
