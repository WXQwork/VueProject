<template>
  <div class="swiper-container" :style="{height:seiperheight+'px'}">
    <div class="swiper-wrapper">
        <div class="swiper-slide" :key="index" v-for="(item,index) in bannerimages">
            <img :src='item' />
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
    props:{
        bannerimages:Array,
        default:[],
        seiperheight:{
            type : Number,
            default : 126
        }
    },
    data () {
        return {
            mySwiper:null
        }
    },
    mounted() {
        
    },
    watch:{
        bannerimages:function(){
            this.$nextTick(() => {
                if(!!this.mySwiper){
                    this.mySwiper.destroy()
                    
                }
                this.mySwiper = new Swiper('.swiper-container', {
                    pagination : '.swiper-pagination',
                })
        })}
    }
}
</script>

<style lang="stylus" scoped>
.swiper-container 
    width 100%
    height 1.26rem
    .swiper-wrapper
        width 100%
        height 100%
        div
            width 100%
            height 100%
            img
                height 100%
                width 100%
                display block
</style>

