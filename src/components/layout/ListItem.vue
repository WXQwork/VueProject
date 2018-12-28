<template>
    <div class="shop-item">
        <div class="click-area">
            <svg @click="onechecket" v-if="ischecket" t="1542207503954" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1669" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zM844.8 364.8l-428.8 428.8L179.2 556.8c-25.6-25.6-25.6-64 0-89.6s64-25.6 89.6 0l147.2 147.2 339.2-339.2c25.6-25.6 64-25.6 89.6 0S870.4 339.2 844.8 364.8z" p-id="1670" fill="#ff5587"></path></svg>
            <svg @click="onechecket" v-else t="1542248962227" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1732" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18"><path d="M512 960.5c-60.5 0-119.3-11.9-174.6-35.3-53.4-22.6-101.4-54.9-142.5-96.1-41.2-41.2-73.5-89.1-96.1-142.6-23.4-55.3-35.3-114.1-35.3-174.6s11.9-119.3 35.3-174.6c22.6-53.4 54.9-101.4 96.1-142.6 41.1-41 89.1-73.4 142.5-96C392.7 75.4 451.5 63.5 512 63.5s119.3 11.9 174.6 35.2c53.4 22.6 101.4 54.9 142.6 96.1s73.5 89.1 96.1 142.6c23.4 55.3 35.3 114.1 35.3 174.6s-11.9 119.3-35.3 174.6c-22.7 53.4-55 101.4-96.2 142.6-41.2 41.2-89.1 73.5-142.6 96.1-55.2 23.3-114 35.2-174.5 35.2z m0-832c-211.5 0-383.5 172-383.5 383.5s172 383.5 383.5 383.5 383.5-172 383.5-383.5-172-383.5-383.5-383.5z" fill="#999999" p-id="1733"></path></svg>
        </div>
        <div class="item-img">
            <img :src="product.img" alt="" @click="$router.push('/info?itemsId='+product.id)" />
        </div>
        <div class="item-info">
            <p class="p1">{{product.title}}</p>
            <p class="p2">￥{{product.price}}</p>
            <div class="action">
                <div class="action-wrapper">
                    <div @click="productremove(product)" class="purchase-control activepurchasecontrol">-</div>
                    <div>{{product.num}}</div>
                    <div @click="productadd(product)" class="purchase-control activepurchasecontrol">+</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
    props:["product"],
    data () {
        return {
            ischecket:false,
            allmoney:0
        }
    },
    mounted() {
        this.allmoney = _.round((parseInt(this.product.num)*this.product.price),2)
    },
    methods:{
        productadd (product) {
            this.$store.dispatch('cart/addone', product.id)
            if(this.ischecket){
                this.$emit('listenchildEvent',{
                    price:this.product.price
                })
            }
        },
        productremove (product) {
            if(product.num>1){
                this.$store.dispatch('cart/removeone', product.id)
                if(this.ischecket){
                    this.$emit('listenchildEvent',{
                        price:-this.product.price
                    })
                }
            }else{

            }
        },
        onechecket() {
            this.ischecket = !this.ischecket
            if(this.ischecket){
                this.$emit('listenchildEvent',{
                    price:this.allmoney,
                    radio:true
                })
            }else{
                this.$emit('listenchildEvent',{
                    price:-this.allmoney,
                    radio:false
                })
            }
        },
        //保留两位小时
        simpleFixed (num,fractionDigits=2) {
            return (parseInt(num * Math.pow( 10, fractionDigits  ) + 0.5)/Math.pow(10,fractionDigits));
        }
    },
    updated() {
        this.allmoney = _.round((parseInt(this.product.num)*this.product.price),2)
    },
    watch:{

    }
}
</script>


<style lang="stylus" scoped>
@import '~styles/ellipsis.styl'
@import '~styles/border.styl'
.shop-item
    height 1.4rem
    width 100%
    background-color #fff
    box-shadow inset 0 -1px 0 0 #e7e7e7
    display flex
    padding .1rem .1rem
    justify-content space-between
    align-items center
    .click-area
        width .4rem
        height 1rem
        display flex
        justify-content center
        align-items center
    .item-img
        width .8rem
        height .8rem
        margin-right .1rem
        img
            height 100%
            width 100%
            display block
    .item-info
        flex 1
        height 1.4rem
        display flex
        flex-direction column
        justify-content space-around
        p
            line-height .14rem
            font-size .14rem
            color #212121
        .p1
            ellipsis(240,2)
        .p2
            color #ff5587
            font-weight 500 
        .action
            height .32rem
            width 100%
            .action-wrapper
                width 100%
                height .32rem
                overflow hidden
                div
                    height .32rem
                    width .32rem
                    float left
                    text-align center
                    line-height .32rem
                    font-size .14rem
                    color #212121
                    margin-left .1rem
                .purchase-control
                    border 1px,#999,solid,50%
                    font-size .18rem
                    font-weight 700
                    color #999
                .activepurchasecontrol
                    border 1px,#ff5687,solid,50%
                    color #ff5687
</style>
