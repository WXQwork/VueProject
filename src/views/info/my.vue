<template>
    <div class="home-wrap">
        <Header></Header>
        <main>
            <transition name="fade">
                <router-view></router-view>
            </transition> 
        </main>
        <TabBar></TabBar>
    </div>
</template>

<script>
    import Header from 'components/layout/Header'
    import TabBar from 'components/layout/TabBar'
    export default {
        components:{
            Header,
            TabBar
        }
    }
</script>

<style lang="stylus" scoped>
.home-wrap
    height 100%
    display flex
    flex-direction column
    main
        flex 1
        overflow hidden
</style>
