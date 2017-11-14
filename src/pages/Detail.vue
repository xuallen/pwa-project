<template>
    <div class="detail-wrapper">
        <div class="list-item" v-for="(item,i) in ads">
            <img class="thumb" :src="item" alt="">
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'detail',
    data () {
        return {
            ads: ["https://img.alicdn.com/imgextra/i2/2928380385/TB2mUgacwb.PuJjSZFpXXbuFpXa_!!2928380385.jpg","https://img.alicdn.com/imgextra/i1/2928380385/TB2cVY4fol7MKJjSZFDXXaOEpXa_!!2928380385.jpg","https://img.alicdn.com/imgextra/i1/2928380385/TB2Sq.4fKALL1JjSZFjXXasqXXa_!!2928380385.jpg","https://img.alicdn.com/imgextra/i1/2928380385/TB2Goo0fS3PL1JjSZFtXXclRVXa_!!2928380385.jpg","https://img.alicdn.com/imgextra/i4/2928380385/TB2Yw0bf5AKL1JjSZFoXXagCFXa_!!2928380385.jpg","https://img.alicdn.com/imgextra/i4/2928380385/TB2Moltf.cKL1JjSZFzXXcfJXXa_!!2928380385.jpg","https://img.alicdn.com/imgextra/i1/2928380385/TB2S.W4drsTMeJjy1zcXXXAgXXa_!!2928380385.jpg","https://img.alicdn.com/imgextra/i3/2928380385/TB2Y53YXK38SeJjSZFPXXc_vFXa_!!2928380385.jpg","https://img.alicdn.com/imgextra/i4/2928380385/TB2n2L.dEgQMeJjy0FjXXaExFXa_!!2928380385.jpg","https://img.alicdn.com/imgextra/i4/2928380385/TB2tni2dBUSMeJjSszbXXberFXa_!!2928380385.jpg","https://img.alicdn.com/imgextra/i1/2928380385/TB23hc0fN3IL1JjSZPfXXcrUVXa_!!2928380385.jpg","https://img.alicdn.com/imgextra/i3/2928380385/TB24l4ff.3IL1JjSZFMXXajrFXa_!!2928380385.jpg","https://img.alicdn.com/imgextra/i3/2928380385/TB2JyjbdBUSMeJjy1zjXXc0dXXa_!!2928380385.jpg","https://img.alicdn.com/imgextra/i3/2928380385/TB2mUFtf.cKL1JjSZFzXXcfJXXa_!!2928380385.jpg","https://img.alicdn.com/imgextra/i3/2928380385/TB2RVxmf.UIL1JjSZFrXXb3xFXa_!!2928380385.jpg","https://img.alicdn.com/imgextra/i3/2928380385/TB2utlMXp9gSKJjSspbXXbeNXXa_!!2928380385.jpg","https://img.alicdn.com/imgextra/i1/2928380385/TB29Fq8fJqUQKJjSZFIXXcOkFXa_!!2928380385.jpg"]
        }
    },
    methods: {
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ]),
        ...mapActions('appShell/appBottomNavigator', [
            'hideBottomNav'
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
    created() {
        this.setAppHeader({
            show: true,
            title: '商品详情',
            showMenu: false,
            showBack: true,
            showLogo: false,
            actions: [
                {
                    icon: 'home',
                    route: {
                        name: 'home'
                    }
                }
            ]
        });
        this.hideBottomNav();
    }
};
</script>

<style lang="stylus" scoped>

.detail-content
    font-size 16px
    line-height 30px
    margin-top 30px

    .detail-title
        margin-bottom 20px
        padding 10px 0
        font-size 36px
        font-weight bold

img
    width: 100%;
    display: block;

</style>
