<template>
    <div>
        <div class="slogan"><span class="text">热门商品</span></div>
        <div class="list">
            <div class="list-item" v-for="(item,i) in lists" @click="openDetail()">
                <img class="thumb" :src="item.thumb" alt="">
                <div class="desc">{{item.desc}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'hot',
    data () {
        return {
            lists: [{"thumb":"https://img.alicdn.com/bao/uploaded/i4/2928380385/TB1B9J5b_ZRMeJjSspnXXcJdFXa_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 F3耳机入耳式 重低音炮手机电脑音乐有线耳塞通用女生男带麦"},{"thumb":"https://img.alicdn.com/bao/uploaded/i2/2928380385/TB16eajebsTMeJjy1zeXXcOCVXa_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 T0手机耳机入耳式通用女生男全民k歌苹果安卓有线耳塞重低音"},{"thumb":"https://img.alicdn.com/bao/uploaded/i1/TB13tMfPVXXXXafaXXXXXXXXXXX_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 F1手机入耳式耳机 通用重低音炮面条线控笔记本金属耳塞带麦"},{"thumb":"https://img.alicdn.com/bao/uploaded/i4/TB1Gxo6RVXXXXcRaXXXXXXXXXXX_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 A8双动圈入耳式耳机手机通用低音有线四核带麦HIFI电脑耳塞"},{"thumb":"https://img.alicdn.com/bao/uploaded/i4/2928380385/TB1FrgglOAKL1JjSZFoXXagCFXa_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 F5手机耳机入耳式 重低音全民K歌监听有线耳塞苹果安卓通用"},{"thumb":"https://img.alicdn.com/bao/uploaded/i2/2928380385/TB1cEMlfoFWMKJjSZFvXXaenFXa_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 F0耳机入耳式 通用重低音金属面条有线控手机笔记本耳塞带麦"},{"thumb":"https://img.alicdn.com/bao/uploaded/i4/2928380385/TB145chXgfH8KJjy1zcXXcTzpXa_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 T2手机K歌耳机入耳式 通用重低音男女生苹果6带麦有线控耳塞"},{"thumb":"https://img.alicdn.com/bao/uploaded/i2/2928380385/TB14gumSFXXXXatapXXXXXXXXXX_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 F4手机耳机入耳式 通用重低音 金属耳塞HiFi音乐K歌耳机耳麦"},{"thumb":"https://img.alicdn.com/bao/uploaded/i2/2928380385/TB1yg4EkLBNTKJjy1zdXXaScpXa_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 T3耳机入耳式手机通用重低音K歌苹果安卓有线监听耳塞女生男"},{"thumb":"https://img.alicdn.com/bao/uploaded/i4/TB19zoDQFXXXXcKXFXXXXXXXXXX_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 C5手机全民k歌耳机入耳式 苹果安卓通用唱歌耳塞带麦重低音"},{"thumb":"https://img.alicdn.com/bao/uploaded/i3/TB1wkfSNpXXXXaIXFXXXXXXXXXX_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 A7HIFI耳机入耳式重低音苹果安卓手机通用有线控双动圈耳塞"},{"thumb":"https://img.alicdn.com/bao/uploaded/i2/TB1EJ22NpXXXXbhXpXXXXXXXXXX_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 S1运动耳机入耳式线控带麦耳塞 手机Mp3通用重低音防水"},{"thumb":"https://img.alicdn.com/bao/uploaded/i4/2928380385/TB1B9J5b_ZRMeJjSspnXXcJdFXa_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 F3耳机入耳式 重低音炮手机电脑音乐有线耳塞通用女生男带麦"},{"thumb":"https://img.alicdn.com/bao/uploaded/i2/2928380385/TB16eajebsTMeJjy1zeXXcOCVXa_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 T0手机耳机入耳式通用女生男全民k歌苹果安卓有线耳塞重低音"},{"thumb":"https://img.alicdn.com/bao/uploaded/i1/TB13tMfPVXXXXafaXXXXXXXXXXX_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 F1手机入耳式耳机 通用重低音炮面条线控笔记本金属耳塞带麦"},{"thumb":"https://img.alicdn.com/bao/uploaded/i4/TB1Gxo6RVXXXXcRaXXXXXXXXXXX_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 A8双动圈入耳式耳机手机通用低音有线四核带麦HIFI电脑耳塞"},{"thumb":"https://img.alicdn.com/bao/uploaded/i4/2928380385/TB1FrgglOAKL1JjSZFoXXagCFXa_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 F5手机耳机入耳式 重低音全民K歌监听有线耳塞苹果安卓通用"},{"thumb":"https://img.alicdn.com/bao/uploaded/i2/2928380385/TB1cEMlfoFWMKJjSZFvXXaenFXa_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 F0耳机入耳式 通用重低音金属面条有线控手机笔记本耳塞带麦"},{"thumb":"https://img.alicdn.com/bao/uploaded/i4/2928380385/TB145chXgfH8KJjy1zcXXcTzpXa_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 T2手机K歌耳机入耳式 通用重低音男女生苹果6带麦有线控耳塞"},{"thumb":"https://img.alicdn.com/bao/uploaded/i2/2928380385/TB14gumSFXXXXatapXXXXXXXXXX_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 F4手机耳机入耳式 通用重低音 金属耳塞HiFi音乐K歌耳机耳麦"},{"thumb":"https://img.alicdn.com/bao/uploaded/i2/2928380385/TB1yg4EkLBNTKJjy1zdXXaScpXa_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 T3耳机入耳式手机通用重低音K歌苹果安卓有线监听耳塞女生男"},{"thumb":"https://img.alicdn.com/bao/uploaded/i4/TB19zoDQFXXXXcKXFXXXXXXXXXX_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 C5手机全民k歌耳机入耳式 苹果安卓通用唱歌耳塞带麦重低音"}]
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
        ]),
        async openDetail() {
            this.$router.push('/detail/1');
        }
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

        this.activateBottomNav('hot');
        this.showBottomNav();
    }
};
</script>

<style lang="stylus" scoped>

.list
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

.list-item
    width: 49%;
    border: 1px solid #EEE;
    padding: 5px;
    margin-bottom: 10px;
    text-align: left;
    overflow: hidden;

.list-item .thumb
    width: 100%;

.list-item .desc
    display: -webkit-box;
    height: 40px;
    font-size: 14px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

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
