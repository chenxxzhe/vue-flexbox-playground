import Vue from 'vue';

import store from 'store';

import MainView from 'Views/main.vue';

const app = new Vue({
    el: '#container',
    render: h=>h(MainView),
    store,
});

export default app;
