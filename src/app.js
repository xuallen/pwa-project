/**
 * @file entry
 * @author Allen斯松(xuallen20@qq.com)
 */

import Vue from 'vue';
import {
    Vuetify,
    VBtn,
    VApp,
    VList,
    VIcon,
    VCarousel,
    VProgressCircular,
    VDivider,
    VBottomNav,
    VGrid,
    VAvatar
} from 'vuetify';
import {createRouter} from './router';
import store from './store';
import App from './App.vue';
import Icon from 'vue-awesome/components/Icon.vue';


Vue.use(Vuetify, {
    components: {
        VApp,
        VBtn,
        VList,
        VIcon,
        VCarousel,
        VProgressCircular,
        VDivider,
        VBottomNav,
        VGrid,
        VAvatar
    }
});

Vue.component('icon', Icon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
export function createApp() {
    let router = createRouter();
    let app = new Vue({
        router,
        store,
        ...App
    });
    return {app, router, store};
}
