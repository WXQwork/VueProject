<template>
    <div class="Ticketproject">
        <div class="contend">
            <div class="head">
                <svg t="1541492644263" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3456" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18"><path d="M277.333333 320h42.666667v-42.666667h-42.666667z m0 213.333333h42.666667v-42.666666h-42.666667z m0 213.333334h42.666667v-42.666667h-42.666667zM810.666667 64H213.333333a85.333333 85.333333 0 0 0-85.333333 85.333333v725.333334a85.333333 85.333333 0 0 0 85.333333 85.333333h597.333334a85.333333 85.333333 0 0 0 85.333333-85.333333V149.333333a85.333333 85.333333 0 0 0-85.333333-85.333333z m42.666666 810.666667a42.666667 42.666667 0 0 1-42.666666 42.666666H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666666V149.333333a42.666667 42.666667 0 0 1 42.666666-42.666666h597.333334a42.666667 42.666667 0 0 1 42.666666 42.666666zM405.333333 320h341.333334v-42.666667H405.333333z m0 213.333333h341.333334v-42.666666H405.333333z m0 213.333334h341.333334v-42.666667H405.333333z" p-id="3457" fill="#ff5687"></path></svg>
                <span>漫展</span>
            </div>
            <div class="titimg">
                <img :src="datas.imageUrls" alt="">
            </div>
            <div class="title">{{datas.title}}</div>
            <div class="info">{{datas.startTime|reverstime}} - {{datas.endTime|reverstime}} {{datas.provinceName}} {{datas.venueName}}</div>
            <p class="price"><span class="pr1">￥{{datas.price[0]}}</span><span class="pr3">起</span></p>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props:{
            datas:{
                type:Object
            }
        },
    filters:{
        //过滤时间
        reverstime (value) {
            return moment(value).format('MM/DD')
        }
    }     
}
</script>


<style lang="stylus" scoped>
@import '~styles/ellipsis.styl'
.Ticketproject
    margin-bottom .12rem
.contend
    padding 0 .1rem .1rem .1rem
    .head
        height .32rem
        display flex
        justify-content flex-start
        align-items center
        svg
            margin-right .02rem
        span 
            font-size .12rem
            color #757575
    .titimg
        height 2.05rem
        margin-bottom .12rem
        img 
            width 100%
            height 100%
            display block
            border-radius .05rem
    .title
        height .24rem
        line-height .24rem
        font-size .16rem
        margin-bottom  .05rem
        ellipsis()
    .info
        height .16rem
        line-height .16rem
        color #999
        font-size .12rem
        margin-bottom .1rem
    .price
        height .18rem
        display flex
        align-items flex-end
        justify-content flex-start
        .pr1
            font-size .16rem
            color #ff5687
        .pr3
            font-size .1rem
            color #999
            margin-left .02rem
</style>

