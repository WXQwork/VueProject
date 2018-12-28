<template>
    <div v-if="$route.name==='main'" class="header-wrap">
        会员购
        <svg t="1541313871509" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3789" xmlns:xlink="http://www.w3.org/1999/xlink" width="28" height="28"><defs></defs><path d="M906 426.6c3.3 0 6.5 0.6 9.8 0.9V235.6c0-21.1-17.6-38.2-39.4-38.2h-709c-21.7 0-39.4 17.1-39.4 38.2v191.9c3.3-0.4 6.5-0.9 9.8-0.9 49 0 88.6 38.5 88.6 85.9 0 47.4-39.6 85.9-88.6 85.9-3.3 0-6.5-0.6-9.8-1v192c0 21.1 17.6 38.2 39.4 38.2h709c21.7 0 39.4-17.1 39.4-38.2v-192c-3.3 0.4-6.5 1-9.8 1-49 0-88.7-38.5-88.7-85.9 0-47.4 39.7-85.9 88.7-85.9z m-49.3 222.6v119.3H187.1V649.2c57.3-19.9 98.5-73.7 98.5-136.7 0-63-41.2-116.8-98.5-136.7V256.5h669.6v119.3c-57.3 20-98.5 73.7-98.5 136.7 0 63 41.2 116.8 98.5 136.7z" fill="#ffffff" p-id="3790"></path><path d="M600.7 295.9h59.1v78.8h-59.1zM600.7 414.1h59.1v78.8h-59.1zM600.7 532.2h59.1V611h-59.1zM600.7 650.3h59.1v78.8h-59.1z" fill="#ffffff" p-id="3791"></path></svg>
    </div>
    <div v-else-if="$route.name==='classall'" class="header-search">
        <svg v-if="!isbtnshow" t="1541506843374" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3048" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22"><path d="M263.8 494.3L698.5 70.7c9.5-9.3 24.7-9.1 33.9 0.4 9.3 9.5 9.1 24.7-0.4 33.9L314.3 512l420.2 405.3c9.5 9.2 9.8 24.4 0.6 33.9-4.7 4.9-11 7.3-17.3 7.3-6 0-12-2.2-16.7-6.7L268 534c-1.7-1.6-3-3.4-4.1-5.3l-0.5-0.5c-9.3-9.4-9.1-24.6 0.4-33.9z" p-id="3049" fill="#ffffff"></path></svg>
        <input @click="isbtnsh" @input="issh" type="text" placeholder="商品、品牌、作品名" v-model="message">
        <svg @click="valrem" :class="{iconshow:isshow}" t="1541598473000" class="icon rem" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1861" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M512 981.333A469.333 469.333 0 1 1 981.333 512 469.333 469.333 0 0 1 512 981.333zM447.573 506.88L285.44 669.013a42.667 42.667 0 1 0 58.88 58.88L506.453 565.76l162.134 162.133a42.667 42.667 0 1 0 58.88-58.88L565.333 506.88l162.134-162.133a42.667 42.667 0 1 0-58.88-58.88L506.453 448 344.32 285.867a42.667 42.667 0 0 0-58.88 58.453z" p-id="1862" fill="#999999"></path></svg>
        <span v-if="isbtnshow" class="quxiao" @click="isbtns">取消</span>
        <div v-if="isbtnshow" class="shopsearch">
            <div class="shopsearchlist">
                <span @click="isshopxian(0)" :class="{active:!isshopactive}">商品<i v-show="!isshopactive" class="icon-bar"></i></span>
                <span @click="isshopxian(1)" :class="{active:isshopactive}">漫展<i v-show="isshopactive" class="icon-bar"></i></span>
            </div>
            <div class="search-board" v-if="isserachok">
                <div class="no-result">
                    <img class="nosearchimg" src="~images/no_result.png" alt="">
                </div>
                <p class="word">什么都没找到啊 /(ㄒoㄒ)/</p>
            </div>
            <div v-else class="yousearch">
                <div class="shops" v-if="!isshopactive">
                    <p v-for="item in searchdata1" :key="item.id">{{item.name}}</p>
                </div>
                <div v-else class="manzhan">
                    <p v-for="item in searchdata2" :key="item.id">{{item.name}}</p>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="$route.name==='shopingcar'" class="header-other">
        <svg @click="$router.go(-1)" t="1541506843374" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3048" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22"><path d="M263.8 494.3L698.5 70.7c9.5-9.3 24.7-9.1 33.9 0.4 9.3 9.5 9.1 24.7-0.4 33.9L314.3 512l420.2 405.3c9.5 9.2 9.8 24.4 0.6 33.9-4.7 4.9-11 7.3-17.3 7.3-6 0-12-2.2-16.7-6.7L268 534c-1.7-1.6-3-3.4-4.1-5.3l-0.5-0.5c-9.3-9.4-9.1-24.6 0.4-33.9z" p-id="3049" fill="#212121"></path></svg>
        会员购 的订单
    </div>
    <div v-else class="header-other">
        <svg @click="$router.go(-1)" t="1541506843374" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3048" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22"><path d="M263.8 494.3L698.5 70.7c9.5-9.3 24.7-9.1 33.9 0.4 9.3 9.5 9.1 24.7-0.4 33.9L314.3 512l420.2 405.3c9.5 9.2 9.8 24.4 0.6 33.9-4.7 4.9-11 7.3-17.3 7.3-6 0-12-2.2-16.7-6.7L268 534c-1.7-1.6-3-3.4-4.1-5.3l-0.5-0.5c-9.3-9.4-9.1-24.6 0.4-33.9z" p-id="3049" fill="#212121"></path></svg>
        会员购 的购物车<span v-if="totalPrice>0">({{totalPrice}})</span>
    </div>
</template>

<script>
//引入mint，按需加载
import { Button } from 'mint-ui'
import _ from 'lodash'
import axios from "utils/http"
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            message:'',
            isshow:true,
            isbtnshow:false,
            isshopactive:false,
            isserachok:false,
            searchdata1:[],
            searchdata2:[]
        }
    },
    created() {
        this.debouncedGetAnswer = _.debounce(this.search, 500)
    },
    watch:{
        message () {
            this.debouncedGetAnswer(1)
        }
    },
    mounted() {
        //console.log(this.$route.name)
    },
    methods:{
        async search (n) {
            let result = await axios({
                url: "/mall-c/home/sug",
                method: "get",
                params: {
                    term:this.message,
                    type:n,
                    platform:'h5'
                }
            })

            console.log(result)
            if(result.data.vo.length>0){
                this.isserachok=false
                if(n===1){
                    this.searchdata1 = []
                    for(var i=0;i<result.data.vo.length;i++){
                        this.searchdata1.push(result.data.vo[i])
                    }
                }else{
                    this.searchdata2 = []
                     for(var i=0;i<result.data.vo.length;i++){
                        this.searchdata2.push(result.data.vo[i])
                    }
                }
            }else{
                this.isserachok=true
            }
        },
        issh () {
            if(this.message!=''){
                this.isshow= false
            }else{
                this.isshow= true
            }
        },
        isbtnsh () {
            this.isbtnshow = true
        },
        isbtns () {
            this.isbtnshow = false
            this.isshow = true
            this.message = ''
        },
        valrem () {
            this.message = ''
            this.isshow = true
        },
        isshopxian (sb) {
            if(sb===0){
                this.isshopactive=false
            }else{
                this.debouncedGetAnswer(2)
                this.isshopactive=true
            }
        }
    },
    components:{
        [Button.name]:Button
    },
    computed:{
        ...mapGetters('cart',['totalPrice'])
    }
}
</script>


<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/ellipsis.styl'
.header-other
    height .44rem
    background-color #fff
    font-size .16rem
    line-height .44rem
    color #212121
    text-align center
    position relative
    svg
        position absolute
        left .11rem
        top .11rem    
.header-wrap
    height .44rem
    background $base-color
    color #fff
    font-size .16rem
    line-height .44rem
    letter-spacing 0
    width 100%
    text-align center
    position relative
    svg
        position absolute
        right .1rem
        top .08rem
.header-search
    height .44rem
    background $base-color
    width 100%
    padding 0 .12rem
    display flex
    justify-content space-between
    align-items center
    position relative
    .quxiao
        float right 
        width .5rem
        text-align right 
        font-size .14rem
        height .2rem
        line-height .2rem
        color #fff
        padding-right .05rem
    input
        width 3.17rem
        height .3rem
        border-radius .2rem
        border none
        text-indent .3rem
        position relative
        background url('~images/search.png') left .07rem center no-repeat #fff
    .rem
        position absolute
        top .15rem
        right 0.7rem
    .iconshow
        display none
    .shopsearch
        position absolute
        top .44rem
        left 0
        width 100%
        z-index 999
        overflow hidden
        height 6.23rem
        background-color #f4f4f4
        .shopsearchlist
            height .44rem
            width 100%
            background-color #fff
            display flex
            span
                flex 1
                text-align center
                line-height .44rem
                font-size .14rem
                color #999
                position relative
                &.active
                    color #ff5687
                .icon-bar
                    position: absolute
                    bottom 3px
                    left 50%
                    width 50px
                    height 3px
                    transform translateX(-25px)
                    border-radius 2px
                    background-color #ff5687
        .search-board
            width 100%
            margin-top 1rem
            height 1.96rem
            .no-result
                width 2.8rem
                height 1.44rem
                margin 0 auto  
                img
                    width 100%
                    height 100%
                    display block
            .word
                margin-top .28rem
                text-align center
                font-size .16rem
                color #999
        .yousearch
            width 100%
            max-height 4rem
            .shops,.manzhan
                width 100%
                height auto
                p
                    height .44rem
                    padding 0 .12rem
                    line-height .44rem
                    font-size .14rem
                    border-bottom .01rem solid #e7e7e7
                    background-color #fff
                    padding-right .14rem
                    color #212121
                    ellipsis()
</style>

