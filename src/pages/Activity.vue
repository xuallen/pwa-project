<template>
    <div>
        <div class="slogan"><span class="text">特惠活动</span></div>
        <div class="list">
            <div class="list-item" v-for="(item,i) in lists">
                <img class="banner" :src="item.banner" alt="">
                <div class="title">{{item.title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'activity',
    data () {
        return {
            lists: [{
                    banner: 'https://gdp.alicdn.com/imgextra/i1/2928380385/TB21c46hfMTUeJjSZFKXXagopXa_!!2928380385.jpg',
                    title: '限时优惠，满100减10'
                }, {
                    banner: 'https://gdp.alicdn.com/imgextra/i2/2928380385/TB20y3TXhHfFuJjSspoXXX4zFXa_!!2928380385.jpg',
                    title: '买一送一，仅限本周'
                }]
        }
    },
    props: {},
    methods: {
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ]),
        ...mapActions('appShell/appBottomNavigator', [
            'showBottomNav',
            'activateBottomNav'
        ])
    },
    async asyncData() {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 500);
        });
    },
    activated() {
        this.setAppHeader({
            show: true,
            title: '唐麦优品',
            showMenu: true,
            showBack: false,
            showLogo: true,
            actions: [
                {
                    icon: 'search',
                    route: '/search'
                }
            ]
        });

        this.activateBottomNav('activity');
        this.showBottomNav();
    }
};
</script>

<style lang="stylus" scoped>

.list
    padding: 5px;

.list-item
    width: 100%;
    border: 1px solid #EEE;
    padding: 5px;
    margin-bottom: 20px;
    text-align: left;
    overflow: hidden;

.list-item .banner
    width: 100%;

.list-item .title
    color: #F00;

.slogan
    border-top: 1px solid #EEE;
    margin: 30px 0px 0;

.slogan .text{
    position: relative;
    top: -10px;
    background: #FFF;
    padding: 0 10px;
    color: #999;
}

</style>
