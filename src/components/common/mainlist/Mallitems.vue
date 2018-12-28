<template>
    <div class="Malitmes">
        <div v-if="datas.templateId == 6" class="v_mallitems">
            <div class="matop" @click="letgo(datas.itemsId)">
                <div class="matops">
                    <img :src="datas.imageUrls[0]" alt="">
                </div>
                <barrage :barrageHeight='100' :barragetop='148' :barragdata='datas.ugcList' :direction='iscol'></barrage>
            </div>
            <div class="mabom">
                <p>{{datas.title}}</p>
                <div>
                    <span class="sple">￥{{datas.priceDesc[0]}}</span>
                    <span class="spri">{{datas.like}}人想要</span>
                </div>
            </div>
        </div>
        <div v-if="datas.templateId == 4" class="v_goodsmallitems">
            <div class="gmatop" @click="letgo(datas.itemsId)">
                <img :src="datas.imageUrls[0]" alt="">
            </div>
            <div class="gmabom">
                <div class="gma-t">
                    <p class="p1">{{datas.title}}</p>
                    <p class="p2">{{datas.brief}}</p>
                </div>
                <div class="gma-b">
                    <span class="sp1">￥{{datas.priceDesc[0]}}</span>
                    <span class="sp2">{{datas.like|datawan}}人想要</span>
                </div>
            </div>           
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'
    export default {
        props:{
            datas:{
                type:Object
            }
        },
        data () {
            return {
                iscol:true
            }
        },
        filters:{
            datawan (value) {
                if(value>=10000){
                    return _.floor(value/10000, 1)+'万'
                }else{
                    return value
                }
            }
        },
        methods:{
            letgo (data) {
                this.$router.push('/info?itemsId='+data)
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/ellipsis.styl'
.Malitmes
    margin-bottom .12rem

.v_goodsmallitems
    padding .05rem
    display flex
    justify-content space-between
    align-items center
    .gmatop
        width 1.42rem
        height 1.42rem
        img 
            width 100%
            height 100%
            display block
    .gmabom
        height 1.42rem
        flex 1
        display flex
        flex-direction column
        justify-content space-between
        margin-left .08rem
        .gma-t
            .p1
                padding-top .07rem
                ellipsis(1.9rem,2)
                font-size .16rem
                line-height .22rem
                margin-bottom .1rem
                font-family PingFangSC
            .p2
                font-size .12rem
                height .12rem
                color #999
                line-height .12rem
        .gma-b
            display flex
            align-items flex-end
            justify-content space-between
            margin-bottom .05rem
            margin-right .03rem
            .sp1
                font-size .18rem
                line-height .18rem
                color #ff5687
            .sp2
                font-size .12rem
                line-height .12rem
                color #999
            
.v_mallitems
    padding .1rem .1rem .1rem .1rem
    display flex
    flex-direction column
    .matop
        height 2.48rem
        background-color #eee
        width 100%
        position relative
        .matops
            width 80%
            margin-left 10%
            height 100%
            background-color #ffffff
            img
                width 100%
                height 100%
                display block
    .mabom
        height .52rem
        p
            ellipsis()
            height .24rem
            line-height .24rem
            font-size .16rem
            margin-bottom .1rem
        div
            height .18rem
            width 100%
            display flex
            justify-content space-between
            align-items flex-end
            .sple
                font-size .18rem
                color #ff5687
            .spri
                font-size .12rem
                color #999
</style>

