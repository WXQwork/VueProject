<template>
    <div class="main">
        <div class="tmage">
            <img :src="imageUrls||''" alt="">
        </div>
        <p class="p1">{{title||''}}</p>
        <p class="p2">{{summary||''}}</p>
    </div>
</template>

<script>
export default {
    props:['imageUrls','title','summary']
}
</script>


<style lang="stylus" scoped>
@import '~styles/ellipsis.styl'
.main
    .tmage
        width 100%
        height 1.84rem
        img
            width 100%
            height 100%
            display block
    .p1
        line-height .34rem
        font-size .16rem
        margin-bottom .08rem
    .p2
        font-size .12rem
        line-height .17rem
        color #999
        ellipsis(3.3rem,2)
</style>

