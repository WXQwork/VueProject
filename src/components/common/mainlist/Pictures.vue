<template>
    <div class="pictures">
        <div class="contend">
            <Maintitle title="美图"></Maintitle>
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
.pictures
    margin-bottom .12rem
.contend
    padding .1rem
</style>

