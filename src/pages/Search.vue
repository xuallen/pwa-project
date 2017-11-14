<template>
    <div class="app-search-page">
        <header>
            <v-btn light icon class="search-btn" @click.native="$router.go(-1)">
                <v-icon class="search-icon">arrow_back</v-icon>
            </v-btn>
            <form @submit.prevent="search">
                <input class="search-input" v-model="query" type="search" autocomplete="off" placeholder="请输入搜索词" autocapitalize="off" />
            </form>
            <v-btn light icon class="search-btn" @click.native="query = ''">
                <v-icon class="search-icon">close</v-icon>
            </v-btn>
        </header>
        <div v-if="loading" class="search-loading">
            <v-progress-circular indeterminate v-bind:size="70" class="primary--text"></v-progress-circular>
        </div>
        <div v-if="data && data.length" class="search-content">
            <div class="list">
                <div class="list-item" v-for="(item,i) in data" @click="openDetail()">
                    <img class="thumb" :src="item.thumb" alt="">
                    <div class="desc">{{item.desc}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'search',
    data() {
        return {
            query: '',
            loading: false,
            data: []
        };
    },
    methods: {
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ]),
        ...mapActions('appShell/appBottomNavigator', [
            'hideBottomNav'
        ]),
        async search() {

            // 把数据清空
            this.data = [];

            // 显示加载动画
            this.loading = true;

            // 让当前输入框失去焦点
            this.$el.querySelector('.search-input').blur();

            // 等待 1s，模拟加载中的效果
            await new Promise(resolve => {
                setTimeout(resolve, 1000);
            });

            // 设置搜索结果数据
            this.data = [{"thumb":"https://img.alicdn.com/bao/uploaded/i4/2928380385/TB1B9J5b_ZRMeJjSspnXXcJdFXa_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 F3耳机入耳式 重低音炮手机电脑音乐有线耳塞通用女生男带麦"},{"thumb":"https://img.alicdn.com/bao/uploaded/i2/2928380385/TB16eajebsTMeJjy1zeXXcOCVXa_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 T0手机耳机入耳式通用女生男全民k歌苹果安卓有线耳塞重低音"},{"thumb":"https://img.alicdn.com/bao/uploaded/i1/TB13tMfPVXXXXafaXXXXXXXXXXX_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 F1手机入耳式耳机 通用重低音炮面条线控笔记本金属耳塞带麦"},{"thumb":"https://img.alicdn.com/bao/uploaded/i4/TB1Gxo6RVXXXXcRaXXXXXXXXXXX_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 A8双动圈入耳式耳机手机通用低音有线四核带麦HIFI电脑耳塞"},{"thumb":"https://img.alicdn.com/bao/uploaded/i4/2928380385/TB1FrgglOAKL1JjSZFoXXagCFXa_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 F5手机耳机入耳式 重低音全民K歌监听有线耳塞苹果安卓通用"},{"thumb":"https://img.alicdn.com/bao/uploaded/i2/2928380385/TB1cEMlfoFWMKJjSZFvXXaenFXa_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 F0耳机入耳式 通用重低音金属面条有线控手机笔记本耳塞带麦"},{"thumb":"https://img.alicdn.com/bao/uploaded/i4/2928380385/TB145chXgfH8KJjy1zcXXcTzpXa_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 T2手机K歌耳机入耳式 通用重低音男女生苹果6带麦有线控耳塞"},{"thumb":"https://img.alicdn.com/bao/uploaded/i2/2928380385/TB14gumSFXXXXatapXXXXXXXXXX_!!0-item_pic.jpg_180x180.jpg","desc":"唐麦 F4手机耳机入耳式 通用重低音 金属耳塞HiFi音乐K歌耳机耳麦"}];

            this.loading = false;
        }
    },
    activated() {
        this.setAppHeader({show: false});
        this.hideBottomNav();
    }
};
</script>

<style lang="stylus" scoped>

header
    display flex
    align-items center
    height 52px
    box-shadow 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12)

form
    flex 1

.search-input
    width 100%
    outline none
    font-size 16px
    height 50px

.search-btn
    color #959595

.search-loading
    margin-top 30%
    display flex
    justify-content center

.search-content
    margin-top 20px

li
    list-style-type none


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

</style>
