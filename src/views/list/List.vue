<template>
    <div class="shop-list">
        <div v-if="products.length===0" class="empty-main">
            <div class="empty-content">
                <div class="background-img"><img src="" alt=""></div>
                <div class="empty-info">购物车里空空如也</div>
            </div>
        </div>
        <div v-else class="shop-list-scroll">
            <ListItem :ref="product.id" v-on:listenchildEvent="itemprice" v-for="product in products" :key="product.id" :product="product"></ListItem>
            <div class="high">
                <div class="uncheck-state" @click="isall">
                    <svg v-if="isallchecket" t="1542207503954" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1669" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zM844.8 364.8l-428.8 428.8L179.2 556.8c-25.6-25.6-25.6-64 0-89.6s64-25.6 89.6 0l147.2 147.2 339.2-339.2c25.6-25.6 64-25.6 89.6 0S870.4 339.2 844.8 364.8z" p-id="1670" fill="#ff5587"></path></svg>
                    <svg v-else t="1542248962227" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1732" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18"><path d="M512 960.5c-60.5 0-119.3-11.9-174.6-35.3-53.4-22.6-101.4-54.9-142.5-96.1-41.2-41.2-73.5-89.1-96.1-142.6-23.4-55.3-35.3-114.1-35.3-174.6s11.9-119.3 35.3-174.6c22.6-53.4 54.9-101.4 96.1-142.6 41.1-41 89.1-73.4 142.5-96C392.7 75.4 451.5 63.5 512 63.5s119.3 11.9 174.6 35.2c53.4 22.6 101.4 54.9 142.6 96.1s73.5 89.1 96.1 142.6c23.4 55.3 35.3 114.1 35.3 174.6s-11.9 119.3-35.3 174.6c-22.7 53.4-55 101.4-96.2 142.6-41.2 41.2-89.1 73.5-142.6 96.1-55.2 23.3-114 35.2-174.5 35.2z m0-832c-211.5 0-383.5 172-383.5 383.5s172 383.5 383.5 383.5 383.5-172 383.5-383.5-172-383.5-383.5-383.5z" fill="#999999" p-id="1733"></path></svg>
                </div>
                <div class="uncheck-text" >全选</div>
                <div class="footer-info">
                    <div class="total-info">
                        <span class="sp1">合计 : </span>
                        <span class="sp2">￥{{itemprices}}</span>
                    </div>
                    <div class="to-info">不含运费</div>
                </div>
                <div class="price-info" :class="{activeorice:itemprices>0}">结算({{listnum}})</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ListItem from 'components/layout/ListItem'
import _ from 'lodash'
export default {
    data (){
        return {
            isallchecket:false,
            itemprices:0,
            listnum:0,
            shopallmoney:0,
        }
    },
    methods:{
        isall () {
            this.isallchecket = !this.isallchecket
            if(this.isallchecket){
                this.shopallmoney = 0
                this.listnum = 0
                for(var key in this.$refs){
                    this.listnum += 1
                    this.$refs[key][0]._data.ischecket = true
                    this.shopallmoney+=this.$refs[key][0]._data.allmoney
                }
                this.itemprices = this.shopallmoney
            }else{
                for(var key in this.$refs){
                    this.$refs[key][0]._data.ischecket = false
                }
                this.itemprices = 0
                this.listnum = 0
            }
        },
        itemprice ({price,radio}) {
            this.listnum = 0
            let bStop = true
            for(var key in this.$refs){
                if(this.$refs[key][0]._data.ischecket){
                    this.listnum += 1
                }else{
                    bStop = false
                }
            }
            this.isallchecket = bStop
            this.itemprices =  _.round((this.itemprices+parseFloat(price)),2)
        }
    },
    mounted() {
        
    },
    computed:{
        ...mapState('cart',['products'])
    },
    components:{
        ListItem
    }
}
</script>

<style lang="stylus" scoped>
.shop-list
    width 100%
    height 100%
    overflow hidden
    padding-top .1rem
    position relative
    .empty-main
        height 100%
        width 100%
        position relative
        .empty-content
            position absolute
            width 100%
            top 30%
            height 1.7rem
            display flex
            flex-direction column
            justify-content center
            align-items center
            .background-img
                height 1.3rem
                width  1.3rem
                margin-bottom .1rem
                background url(//s1.hdslb.com/bfs/static/mall-c/static/img/empty@2x.b71ff83.png) no-repeat
                background-size 100%
            .empty-info
                text-align center
                font-size .14rem
                line-height .14rem
                height .14rem
                color #999
    .shop-list-scroll
        width 100%
        height 100%
    .high
        position absolute
        bottom 0
        left 0
        height .5rem
        width 100%
        box-shadow 0 -1px 0 0 rgba(0,0,0,.15)
        background-color #fff
        display flex
        padding 0 .12rem
        align-items center
        .uncheck-state
            height .5rem
            width .18rem
            display flex
            justify-content center
            align-items center
            margin-right .1rem
        .uncheck-text
            flex 1
            height .18rem
            line-height .18rem
            font-size .14rem
            color #212121
        .footer-info
            width .9rem
            height .34rem
            display flex
            flex-direction column
            justify-content center
            align-items center
            .total-info
                height .18rem
                line-height .18rem
                display flex
                align-items flex-end
                justify-content space-between
                .sp2
                    flex 1
                    font-size .12rem
                    color #ff5587
                    height .16rem
                .sp1
                    width .4rem
                    font-size .14rem
                    color #212121
            .to-info
                font-size .12rem
                line-height .16rem
                color #999
        .price-info
            width .9rem
            height .4rem
            text-align center
            line-height .4rem
            border-radius 1rem
            background-color #e7e7e7
            color #999
            &.activeorice
                background-image linear-gradient(-236deg,#ff5687,#ff62c5)
                box-shadow 0 2px 4px 0 rgba(255,100,145,.7)
                color #fff
</style>


