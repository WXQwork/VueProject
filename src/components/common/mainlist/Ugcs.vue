<template>
    <div class="Ugcs">
        <div class="contend">
            <div class="head">
                <svg t="1541497230104" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2282" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18"><path d="M800.512 474.944h-377.6a24.256 24.256 0 0 0-24.32 24.32c0 13.504 10.816 24.32 24.32 24.32h377.6c13.504 0 24.32-10.816 24.32-24.32a24.576 24.576 0 0 0-24.32-24.32z m-377.6 203.776a24.256 24.256 0 0 0-24.32 24.32c0 13.504 10.816 24.32 24.32 24.32h377.6c13.504 0 24.32-10.816 24.32-24.32a24.576 24.576 0 0 0-24.32-24.32h-377.6z" p-id="2283" fill="#ff5687"></path><path d="M928.064 209.6h-252.736l-5.376-15.68c-37.824-104.832-110.272-129.728-164.288-132.416h-409.728a62.592 62.592 0 0 0-62.72 62.144v776.704c0 34.048 28.096 62.144 62.72 62.144h832.128a62.72 62.72 0 0 0 62.72-62.144v-628.608a62.272 62.272 0 0 0-62.72-62.144z m-848.384-56.256c0-48.128 17.856-41.6 90.816-41.6h261.056c110.784 0 139.456 23.808 160.512 61.056l15.68 36.736h-528.064v-56.192z m773.248 759.424H170.496c-74.56 0-86.464-5.952-86.464-85.952v-566.464h784.576c78.912 0 70.784 30.784 70.784 85.952v492.928c0.064 72.448-25.344 73.536-86.464 73.536z" p-id="2284" fill="#ff5687"></path><path d="M196.992 536.576h78.912v-78.912h-78.912v78.912z m0 205.952h78.912v-78.912h-78.912v78.912z" p-id="2285" fill="#ff5687"></path></svg>
                <span>精选评论</span>
            </div>
            <div class="comment">
                <div class="com1">
                    <img :src="datas.commentImg" alt="">
                </div>
                <div class="com2">
                    <p>{{datas.message}}</p>
                    <span>@{{datas.uname}}</span>
                </div>
            </div>
            <div class="goods">
                <div class="img-contend">
                    <img :src="datas.itemImg" alt="">
                </div>
                <div class="desc">
                    <p class="line"><span>[{{datas.preSaleTagName}}]</span>{{datas.subjectName}}</p>
                    <p class="prive">
                        <span class="gop">{{datas.itemPrice}}</span>
                        <span class="gub">去购买 &gt;</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Object
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/ellipsis.styl'
.Ugcs
    margin-bottom .12rem
.contend
    padding 0 .1rem
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
    .comment
        height .85rem
        margin-bottom .12rem
        display flex
        justify-content space-between
        .com1
            width .85rem
            height .85rem
            img
                width 100%
                height 100%
                display block
                border-radius .05rem
        .com2
            width 2.3rem
            display flex
            flex-direction column
            justify-content space-between
            padding .05rem 0 .03rem 0
            p
                font-size .16rem
                line-height .22rem
                ellipsis(230,2)
            span
                font-size .12rem
                color #757575
                line-height .17rem
    .goods
        height .64rem
        margin-bottom .1rem
        display flex
        justify-content space-between
        align-items center
        background-color #f7f7f7
        .img-contend
            width .64rem
            height .64rem
            background-color #fff
            img
                width 100%
                height 100%
                display block
                border-radius .05rem
        .desc
            height .64rem
            flex 1
            .line
                padding-top .09rem
                font-size .14rem
                ellipsis(2.56rem,,1)
                span
                    color #ff5687 
            .prive
                height .3rem
                padding-top .1rem
                padding-left .1rem
                padding-right .1rem
                display flex
                justify-content space-between
                align-items flex-end
                .gop
                    font-size .12rem
                    color #212121
                .gub
                    font-size .12rem
                    color #ff5687
</style>


