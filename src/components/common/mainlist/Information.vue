<template>
    <div class="information">
        <div class="contend">
            <Maintitle title="情报"></Maintitle>
            <Mainmain :imageUrls='datas.imageUrls' :title='datas.title' :summary='datas.summary'></Mainmain>
        </div>
    </div>
</template>

<script>
import Maintitle from 'components/common/mainlist/Maintitle'
import Mainmain from 'components/common/mainlist/Mainmain'

export default {
    props:{
        datas:{
            type:Object
        }
    },
    components:{
        Maintitle,
        Mainmain
    }
}
</script>

<style lang="stylus" scoped>
.information
    margin-bottom .12rem
.contend
    padding .1rem
</style>

