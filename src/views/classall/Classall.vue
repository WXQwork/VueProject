<template>
    <div class="classall">
        <div class="menu-left">
            <ul>
                <li :key="indexs" @click="addactive(indexs,item)" :class="{active:indexs==current}" v-for="(item,indexs) in typenname||[]">{{item}}</li>
            </ul>
        </div>
        <div class="category-main" id="clascroll">
            <div class="category-part">
                <div class="category-part-item" v-for="(item,index) in specific" :key="index">
                    <h5 :ref="typenname[index]">{{item.title}}</h5>
                    <ul>
                        <li v-for="(datas,ind) in item.categoryInfos" :key="ind">
                            <div>
                                <img v-lazy="datas.img" alt="">
                            </div>
                            <p>{{datas.name}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "../../utils/http"
import BScroll from "better-scroll"
export default {
    data () {
        return {
            datas:null,
            typenname:[],
            current:0,
            specific:[],
            itemTop:[],
            remove:true,
        }
    },
    async created() {
        let that = this;
        let allresult = await axios({
            url: "/mall-c/home/category/list",
            method: "get",
            params: {
                shopId:2233
            }
        })
        this.remove = false
        this.datas = allresult.data.vo
        for(let i = 0;i<allresult.data.vo.length;i++){
            this.typenname.push(allresult.data.vo[i].typeName)
        }
        for(let j = 0;j<allresult.data.vo.length;j++){
            this.specific.push(allresult.data.vo[j].categorySecondLevels[0])
        }
        this.$nextTick(()=>{
            this.bscroll = new BScroll('#clascroll',{
                probeType: 1,
                click:true   
            })
            for(let key in this.$refs){
                this.itemTop.push(this.$refs[key][0].offsetTop)
            }

            this.bscroll.on('scroll',function(){
                console.log(11)
                let bStrop = true
                let items = -this.y+10
                for(var i =0;i<that.itemTop.length;i++){
                    if(that.itemTop[i]<items&&items<that.itemTop[i+1]){
                        that.current = i
                        bStrop=false
                        return
                    }
                }
                if(bStrop){
                    that.current = 6
                }
            })

        })
    },
    mounted() {
    },
    methods:{
        addactive (indexs,item) {
            this.current = indexs
            this.bscroll.scrollToElement(this.$refs[item][0])
        }
    }
}
</script>


<style lang="stylus" scoped>
.classall
    width 100%
    height 100%
    background-color #fff
    display flex
    .menu-left
        width .92rem
        height 100%
        overflow-x hidden
        background-color #f4f4f4
        ul
            li
                height .5rem
                line-height .5rem
                padding-left .22rem
                font-size .14rem
                &.active
                    color #ff5687
                    background url('~images/line.png') left .07rem center no-repeat #fff
    .category-main
        height 100%
        flex 1
        .category-part
            margin 0 .12rem
            width 100%
            .category-part-item
                height auto
                h5
                    font-size .14rem
                    color #212121s
                    line-height .14rem
                    padding .17rem 0
                    font-weight 400
                ul
                    margin 0 2%
                    overflow hidden
                    li
                        width 30%
                        margin  0 1%
                        height .78rem
                        float left
                        margin-bottom .2rem 
                        div
                            width 100%
                            height .78rem
                            img
                                width 100%
                                height 100%
                                display block
                        p
                            font-size .12rem
                            line-height .14rem
                            color #999
                            text-align center
                            margin .06rem 0
</style>

