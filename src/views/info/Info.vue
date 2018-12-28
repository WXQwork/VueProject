<template>
    <div class="info-main">
        <header :style="{opacity:backgroundpacity}">商品详情</header>
        <div class="weizao">
            <svg  @click="goback" t="1541769555069" class="icon headersvg" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1860" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30"><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m158.4 674.4L625.6 784l-272-272 272-272 45.6 45.6L444 512l226.4 226.4z" p-id="1861" fill="#707070"></path></svg>
        </div>
        <main id="infoscroll">
            <div>
                <div class="bannerbox">
                    <Banner :bannerimages="bannerimages" :seiperheight='350'></Banner>
                </div>
                <barrage v-if="iszujianjiazai" :barrageHeight='200' :barragetop='0' :barragdata='mypinglun' :direction='iscol'></barrage>
                <div class="front-money" v-if="advState!==null">
                    <div class="price">
                        <span class="price-left">预售定金</span>
                        <span class="price-right">
                            <span class="currency-type">￥</span>
                            <span>{{advState.deposit|intval}}.</span>
                            <span class="price-decimal">{{advState.deposit|floval}}</span>
                        </span>
                    </div>
                    <div class="time">
                        <div class="remain-tips">定金截止：</div>
                        <div class="remain-time">{{advState.presaleStartOrderTime|oneday}}<span>天</span>{{advState.presaleStartOrderTime|onehours}}<span>小时</span></div>
                    </div>
                </div>
                <div class="front-title">
                    <div class="font-tit">{{infodata.name}}</div>
                    <div class="simple-desc">{{infodata.brief}}</div>
                    <div class="scale-wrapper">
                        <div class="detail-price">
                            <span class="price-type">全款</span>
                            <span class="price-value">
                                <span class="currency-type">¥</span>
                                <span style="display:inline-block">{{infodata.price}}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="ip-brand" v-if="!!brandName">
                    <div class="ip-brand1">
                        <div class="brand">品牌</div>
                        <div class="pinpai">{{infodata.brandName}}</div>
                        <svg t="1541920276452" class="icon go-detail-icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1825" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M714.19904 549.84704l-328.704 328.69376c-20.91008 20.91008-54.80448 20.91008-75.70432 0-20.89984-20.89984-20.89984-54.80448 0-75.70432L600.63744 512 309.80096 221.16352c-20.89984-20.91008-20.89984-54.80448 0-75.70432 20.89984-20.91008 54.79424-20.91008 75.70432 0l328.704 328.69376c10.4448 10.45504 15.6672 24.14592 15.6672 37.84704S724.64384 539.40224 714.19904 549.84704z" p-id="1826" fill="#999999"></path></svg>
                    </div>
                    <div class="ip-brand2">
                        <div class="brand">作品</div>
                        <div class="pinpai">{{infodata.ipRightName}}</div>
                        <svg t="1541920276452" class="icon go-detail-icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1825" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M714.19904 549.84704l-328.704 328.69376c-20.91008 20.91008-54.80448 20.91008-75.70432 0-20.89984-20.89984-20.89984-54.80448 0-75.70432L600.63744 512 309.80096 221.16352c-20.89984-20.91008-20.89984-54.80448 0-75.70432 20.89984-20.91008 54.79424-20.91008 75.70432 0l328.704 328.69376c10.4448 10.45504 15.6672 24.14592 15.6672 37.84704S724.64384 539.40224 714.19904 549.84704z" p-id="1826" fill="#999999"></path></svg>
                    </div>
                </div>
                <div class="like-wrapper" v-if="itemsLikeVO!==undefined">
                    <div class="like-peoples">
                        <div class="like-avatar" :key="index" v-for="(item,index) in itemsLikeVO.users">
                            <img :src="item" alt="">
                        </div>
                    </div>
                    <div class="like-number">
                        <div>等{{itemsLikeVO.count}}人想要</div>
                    </div>
                    <div class="like-button">
                        想要
                    </div>
                </div>
                <div class="ensure-wrapper"></div>
                <div class="procedure-wrapper"  v-if="advState!==null">
                    <div class="procedure-item" :class="{procedureactive:index===0}" v-for="(item,index) in advState.state" :key="index">
                        <div v-if="!!item.timeNode.day" class="procedure1">{{item.timeNode.month}}月{{item.timeNode.day}}日</div>
                        <div v-else class="procedure1">待定</div>
                        <div class="procedure2">{{item.process}}</div>
                    </div>
                    <div class="process-tip">预售阶段说明 &gt;</div>
                </div>
                <div class="sbbb" v-if="ugcListVO!==null">
                    <dir class="sbbb-header">
                        <span class="ps1">讨论区 ({{ugcListVO.totalCount}})</span>
                        <span class="ps2">全部讨论</span>
                    </dir>
                    <div class="sbbbscroll" id="sbbbscroll">
                        <ul class="sbbb-comments">
                            <li class="sbbb-item" v-for="(item,index) in ugcListVO.ugcList" :key="index">
                                <div class="sbbb1">
                                    <div class="sbbb2">
                                        <p class="sbp1"><img :src="item.userInfo.avatar" alt=""><span>{{item.userInfo.name}}</span></p>
                                        <p class="sbp2">{{item.content}}</p>
                                    </div>
                                </div>
                            </li>
                            <li class="sbbb-itemend">
                                <p>全部评论</p>
                                <p class="linemy"></p>
                                <P>{{ugcListVO.totalCount}}条</P>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="shop-wrapper" v-if="shopVO!==null">
                    <div class="shop-logo"></div>
                    <div clsss="shop-content">
                        <div class="shop-name">{{shopVO.shopName}}</div>
                        <div class="shop-cont">在售商品{{shopVO.count}}件</div>
                    </div>
                    <div class="follow-button">
                        + 关注
                    </div>
                </div>
                <div class="recommend-wrapper" v-if="attrList!==null">
                    <div class="recommend-title">为你推荐</div>
                    <div class="recommend-scroll" id="recommendscroll">
                        <ul class="recommend-list">
                            <li class="recommend-item" v-for="(item,index) in attrList" :key="index">
                                <img :src="item.img[0]" alt="" @click="gotutuijian(item)">
                                <div>{{item.name}}</div>
                                <p>定金 <span>￥{{item.price}}</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="panel">
                    <div class="partner-detail">
                        <div v-for="(item,index) in attrListshop" :key="index">
                            <div class="form-item" v-if="index<3">
                                <div class="form-item-label">{{item.attrName}}</div>
                                <div class="form-item-content">{{item.attrValue|types}}</div>
                            </div>
                        </div>
                        <div class="panel-control" @click="isnavlistshop=true;isgotocar=false">查看全部</div>
                    </div>
                </div>
                <div class="ql-editor" v-html="mobileDesc"></div>
                <div class="height40"></div>
            </div>
        </main>
        <footer>
            <div class="bottom-help"></div>
            <div class="bottom-cart" @click="gogo">
                <div v-if="totalPrice>0" class="bottom-cart-count">{{totalPrice}}</div>
            </div>
            <div class="bottom-buy" @click="gotocar">加购物车</div>
        </footer>
        <transition name="fade in">
            <div class="navlistshop" v-show="isnavlistshop">
                <div class="popup-container-wrapper">
                    <div class="popup-container">
                        <div class="popup-close">
                            <svg @click="isnavlistshop=false" t="1542027289554" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1862" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40"><path d="M499.752592 524.344987m-499.655003 0a499.655003 499.655003 0 1 0 999.310007 0 499.655003 499.655003 0 1 0-999.310007 0Z" fill="#C6C6C6" p-id="1863"></path><path d="M738.74773 746.847606l-8.099876 8.490231c-11.125131 11.613075-29.764605 11.905842-41.37768 0.780711L260.562277 343.317637c-11.613075-11.125131-11.905842-29.764605-0.780711-41.37768l8.099876-8.490231c11.125131-11.613075 29.764605-11.905842 41.37768-0.780711l428.707897 412.800911c11.613075 11.125131 12.003431 29.764605 0.780711 41.37768z" fill="#FFFFFF" p-id="1864"></path><path d="M276.762029 763.925657l-8.490231-8.099876c-11.613075-11.125131-11.905842-29.764605-0.780711-41.37768l412.800911-428.707896c11.125131-11.613075 29.764605-11.905842 41.37768-0.780711l8.490231 8.099876c11.613075 11.125131 11.905842 29.764605 0.780711 41.37768L318.237298 763.144947c-11.22272 11.613075-29.862194 11.905842-41.475269 0.78071z" fill="#FFFFFF" p-id="1865"></path></svg>
                        </div>
                        <div class="popup-body" v-if="!isgotocar">
                            <h3>商品信息</h3>
                            <div class="info-container">
                                <div class="info-row">
                                    <label>品牌</label>
                                    <span>{{infodata.brandName}}</span>
                                </div>
                                <div class="info-row">
                                    <label>IP</label>
                                    <span>{{infodata.ipRightName}}</span>
                                </div>
                                <div class="info-row" v-for="(item,index) in attrListshop" :key="index">
                                    <label>{{item.attrName}}</label>
                                    <span>{{item.attrValue|types}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="popup-body" v-else>
                            <div class="popup-image">
                                <img :src="infodata.img[0]" alt="">
                            </div>
                            <div class="gotobuy-body">
                                <div class="gobuinfo">
                                    <div class="advance-price">
                                        ￥{{advState&&advState.deposit||infodata.price}}
                                    </div>
                                    <div class="stock"></div>
                                    <div class="support-return"></div>
                                </div>
                            </div>
                            <div class="sku-container">
                                <div class="spec-container">
                                    <h4>数量确认</h4>
                                    <div class="purchase-wrapper">
                                        <div @click="shopnum>1?shopnum--:shopnum=1" class="purchase-control" :class="{activepurchasecontrol:shopnum>1}">-</div>
                                        <div>{{shopnum}}</div>
                                        <div @click="shopnum++" class="purchase-control activepurchasecontrol">+</div>
                                    </div>
                                </div>
                                <div class="button-container">
                                    <div class="button" @click="letgocar">加购物车</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <div class="gototop" @click="gototop" v-show="isgotoshop">
            <svg t="1542029228420" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1630" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40"><path d="M910.222222 796.444444c-17.066667 0-34.133333-5.688889-45.511111-17.066666L551.822222 409.6c-11.377778-5.688889-17.066667-11.377778-34.133333-11.377778-5.688889 0-22.755556 5.688889-28.444445 11.377778l-329.955555 364.088889c-22.755556 22.755556-56.888889 22.755556-79.644445 5.688889-22.755556-22.755556-22.755556-56.888889-5.688888-79.644445l329.955555-364.088889c28.444444-34.133333 73.955556-51.2 119.466667-51.2s85.333333 22.755556 119.466666 56.888889l312.888889 364.088889c22.755556 22.755556 17.066667 56.888889-5.688889 79.644445-11.377778 5.688889-28.444444 11.377778-39.822222 11.377777z" p-id="1631" fill="#707070"></path></svg>
        </div>
    </div>
</template>

<script>
import axios from "utils/http"
import BScroll from "better-scroll"
import Banner from "components/common/banner/Banner"
import _ from 'lodash'
import monent from 'moment'
import axioss from 'axios'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import { Toast } from 'mint-ui';
export default {
    data () {
        return {
            infodata:{},
            bannerimages:[],
            advState:{},
            brandName:'',
            ipRightName:'',
            itemsLikeVO:{},
            ugcListVO:{},
            shopVO:{},
            attrList:{},
            attrListshop:[],
            mobileDesc:'',
            isnavlistshop:false,
            isgotoshop:false,
            itemID:'',
            mypinglun:[],
            iscol:false,
            isgotocar:false,
            shopnum:1,
            backgroundpacity:0,
            iszujianjiazai:false
        }
    },
    async beforeCreate() {
        // this.itemID = this.$route.query.itemsId
        // let that = this
        // console.log(that.itemID)

        let result = await axios({
            url: "/mall-c/items/info",
            method: "get",
            params: {
                itemsId:this.$route.query.itemsId
            }
        })
        // console.log(that.itemID)
        this.infodata = result.data
        this.bannerimages = result.data.img

        let shopresult = await axios({
            url: "/mall-c/items/recommend",
            method: "get",
            params: {
                itemsId:this.$route.query.itemsId
            }
        })

        this.attrList = shopresult.data.items

        let mypinglunresult = await axioss.post('/mall-c/ugc/content/allList',{
                pageNum: 1,
                pageSize: 20,
                platform: 2,
                subPageSize: 2,
                subjectId: this.$route.query.itemsId,
                subjectType: 1,
                version: "1.0",
            }).then((response)=>{
                return response.data.data.commonList
            })
        for(let k =0;k<mypinglunresult.length;k++){
            let obj = {
                avatar: mypinglunresult[k].userinfo.avatar,
                text:mypinglunresult[k].content,
                ugcId:mypinglunresult[k].ugcId
            }
            this.mypinglun.push(obj)
        }
        //模拟组件懒加载
        this.iszujianjiazai = true
    },
    mounted() {
        // let result = await axios({
        //     url: "/mall-c/items/info",
        //     method: "get",
        //     params: {
        //         itemsId:this.$route.query.itemsId
        //     }
        // })
        // this.infodata = result.data
        // this.bannerimages = result.data.img

        this.$nextTick(()=>{
            this.bscroll = new BScroll('#infoscroll',{
                probeType: 1,
                click:true
            })

            new BScroll('#sbbbscroll',{
                probeType: 1,
                scrollX: true,
                click:true
            })

            new BScroll('#recommendscroll',{
                probeType: 1,
                scrollX: true,
                click:true
            })
            let that = this
            this.bscroll.on('scroll',function(){
                that.backgroundpacity = parseFloat(-this.y/600)
                if(this.y<-400){
                    that.isgotoshop = true
                }else{
                    that.isgotoshop = false
                }
            })
        })
    },
    watch:{
        infodata () {
            // this.$nextTick(()=>{
            //     this.bscroll = new BScroll('#infoscroll',{
            //         probeType: 1
            //     })
            // })
            this.advState = this.infodata.advState
            this.brandName = this.infodata.brandName
            this.ipRightName = this.infodata.ipRightName
            this.itemsLikeVO = this.infodata.itemsLikeVO
            this.ugcListVO = this.infodata.ugcListVO
            this.shopVO = this.infodata.shopVO
            this.attrListshop = this.infodata.attrList
            this.mobileDesc = this.infodata.mobileDesc
        },
        '$route' (to,from) {
            //console.log(1)
        }
    },
    methods:{
        goback () {
            this.$router.go(-1)
        },
        gogo () {
            this.$router.push('my/list')
        },
        gototop () {
            this.bscroll.scrollTo(0,0,800)
            this.backgroundpacity = 0
            this.isgotoshop = false
        },
        gotocar () {
            this.isnavlistshop=true
            this.isgotocar = true
        },
        letgocar () {

            let product = {
                id:this.infodata.itemsId,
                img:this.infodata.img[0],
                title:this.infodata.name,
                price:this.advState&&this.advState.deposit||this.infodata.price,
                num:this.shopnum
            }
            this.$store.dispatch('cart/addToCart', product)

            setTimeout(()=>{
                this.isnavlistshop =false
            },1000)

            // Toast({
            //     message: '加车成功',
            //     position: 'bottom',
            //     duration: 1000
            // })
        },
        gotutuijian (item) {
            this.$router.push('/info?itemsId='+item.itemsId)
        }
    },
    filters:{
        intval (value) {
            return Math.floor(value)
        },
        floval (value) {
            return (_.round(value%Math.floor(value), 2))*100
        },
        oneday (value) {
            return monent(value).format('DD')
        },
        onehours (value) {
            return monent(value).format('HH')
        },
        types (value) {
            if(value instanceof Array){
                return value[0]
            }else if(value === true){
                return '是'
            }else if(value === false){
                return '否'
            }else{
                return value
            }
        }
    },
    computed:{
        ...mapGetters('cart',['totalPrice'])
    },
    components:{
        Banner
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/border.styl'
@import '~styles/ellipsis.styl'
.info-main
    height 100%
    width 100%
    overflow hidden
    display flex
    flex-direction column
    .gototop
        position fixed
        bottom .8rem
        right .2rem
        height .4rem
        width .4rem
    .navlistshop
        position fixed
        width 100%
        height 100%
        background rgba(0,0,0,.5)
        z-index 1000
        .popup-container-wrapper
            position fixed
            left 0
            right 0
            bottom 0
            background transparent
            z-index 1001
            .popup-container
                position relative
                margin-left .12rem
                margin-right .12rem
                margin-bottom .12rem
                background-color #fff
                border-radius .04rem
                .popup-close
                    width .4rem
                    height .4rem
                    position absolute
                    top -.2rem
                    right .1rem
                    z-index 1002
                .popup-body
                    width 100%
                    height 100%
                    // overflow auto
                    position relative
                    .popup-image
                        width 1rem
                        height 1rem
                        position absolute
                        background #fff
                        left .1rem
                        top -.35rem
                        z-index 1002
                        box-shadow: 0 2px 6px 0 rgba(0,0,0,.3)
                        border-radius .04rem
                        img
                            width 100%
                            height 100%
                            display block
                    .gotobuy-body
                        width 100%
                        height 100%
                        overflow auto
                        position relative
                        .gobuinfo
                            margin-left 1.26rem
                            .advance-price
                                margin-top .18rem
                                height .18rem
                                font-size .18rem
                                color #ff5687
                                line-height .18rem
                            .stock
                                height .12rem
                                margin-top .06rem
                                font-size .12rem
                                color #999
                                letter-spacing .5px
                                line-height .12rem
                            .support-return
                                    margin-top .04rem
                                    height .12rem
                                    font-size .12rem
                                    color #999
                                    letter-spacing 0
                                    line-height .12rem
                    .sku-container
                        max-height 3.53rem
                        margin-top .25rem
                        width 100%
                        padding 0 .1rem
                        .spec-container
                            overflow hidden
                            padding .06rem 0
                            h4
                                display inline-block
                                margin 0
                                height .32rem
                                line-height .32rem
                                font-size .14rem
                                color #212121
                                font-weight 400
                            .purchase-wrapper
                                float right
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
                        .button-container
                            height .64rem
                            width 100%
                            border 1px 0 0 0,#eee,solid,0
                            padding-top .1rem
                            .button
                                height .4rem
                                background-image linear-gradient(-236deg,#ff5687,#ff62c5)
                                box-shadow 0 2px 4px 0 rgba(255,100,145,.7)
                                border-radius .36rem
                                color #fff
                                font-size .14rem
                                text-align center
                                line-height .4rem
                    h3
                        font-size .14rem
                        color #212121
                        letter-spacing 0
                        font-weight 400
                        text-align center
                        line-height .54rem
                    .info-container
                        max-height 4.25rem
                        min-height 1rem
                        margin-bottom: 10px
                        box-sizing border-box
                        max-height 4.40rem
                        overflow auto
                        width 100%
                        .info-row
                            display flex
                            margin 0 .1rem
                            overflow hidden
                            position relative
                            padding .09rem 0
                            label
                                width .82rem
                                margin-right .09rem
                                overflow hidden
                                font-size .12rem
                                line-height .18rem
                                color #999
                            span
                                flex 1
                                margin-right .09rem
                                overflow hidden
                                font-size .12rem
                                line-height .18re,
                                white-space normal
                                word-wrap break-word
    .weizao
        height .44rem
        width 100%
        padding-left .1rem
        position fixed
        left 0
        top 0
        z-index 100
        .headersvg
            position absolute
            left .1rem
            top .09rem
            z-index 9999
    header
        height .44rem
        text-align center
        line-height .44rem
        width 100%
        padding-left .1rem
        background rgba(255,255,255,0)
        position fixed
        left 0
        top 0
        background-color #fff
        z-index 99
    main
        flex 1
        overflow hidden
        .bannerbox
            height 3.5rem
            width 100%
            position relative
        .front-money
            width 100%
            height .5rem
            display flex
            .price
                height 100%
                padding 0 .12rem
                background-image linear-gradient(90deg,#ff6692,#ff80d0)
                flex 1
                align-items center
                display flex
                align-items center
                span
                    font-size .2rem
                    color #fff
                    display inline-block
                    letter-spacing 0
                .price-left
                    height .14rem
                    line-height .14rem
                    font-size .14rem
                    margin-right .08rem
                .price-right
                    height .2rem
                    line-height .2rem
                    .currency-type
                            position relative
                            bottom .01rem
                            font-size .12rem
                            line-height .12rem
                            margin-right .02rem
                    .price-decimal
                        font-size .12rem
                        line-height .12rem
            .time
                height 100%
                width 1.4rem
                background-color #fff6fc
                padding .08rem 0
                .remain-tips
                    font-size .12rem
                    color #ff5687
                    letter-spacing 0
                    line-height .12rem
                    text-align center
                .remain-time
                    text-align center
                    margin-top .06rem
                    font-size .16rem
                    color #ff5687
                    letter-spacing 0
                    line-height .16rem
                    font-weight 700
                    span
                        font-size .12rem
                        color #ff5687
                        letter-spacing 0
                        line-height .12rem
                        font-weight 400
        .front-title
            padding .1rem .12rem .12rem
            background-color #fff
            border 0 0 1px 0,#ccc,solid,0
            .font-tit
                margin 0
                font-size .16rem
                color #212121
                letter-spacing .53px
                line-height .22rem
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
            .simple-desc
                margin-top .06rem
                font-size .12rem
                color #999
                line-height .16rem
                letter-spacing 0
            .scale-wrapper
                height .3rem
                width 100%
                .detail-price
                    font-size .16rem
                    color #ff5687
                    line-height .3rem
                    display flex
                    align-items flex-end
                    .price-type
                        color #757575
                        font-size .14rem
                        margin-right .02rem
                    .price-value
                        font-size .18rem
                        .currency-type
                            font-size .12rem
                            margin-right .02rem
        .ip-brand
            width 100%
            background-color #fff
            .ip-brand1,.ip-brand2
                display flex
                justify-content space-between
                align-items center
                height .45rem
                margin 0 .12rem
                border 0 0 1px 0,#ccc,solid,0
                .brand
                    padding-left .22rem
                    width .6rem
                    font-size .14rem
                    color #757575
                    line-height .16rem
                    background url(//s1.hdslb.com/bfs/static/mall-c/static/img/brand.cd8853c.svg) no-repeat
                    background-size .16rem .16rem
                .pinpai
                    width 2.6rem
            .ip-brand2 .brand
                background url(//s1.hdslb.com/bfs/static/mall-c/static/img/ip-icon.85e0861.svg) no-repeat
        .like-wrapper
            padding 0 .12rem
            border 0 0 1px 0,#ccc,solid,0
            height .6rem
            background-color #fff
            display flex
            justify-content space-between
            align-items center
            .like-peoples
                display flex
                padding-left .09rem
                .like-avatar
                    display block
                    height .35rem
                    width .35rem
                    border-radius 50%
                    border .02rem solid #fff
                    margin-left -.09rem
                    img
                        width 100%
                        height 100%
                        display block
                        border-radius 50%
            .like-number
                margin-left .1rem
                overflow hidden
                margin-right .8rem
                height .6rem
                line-height .6rem
                color #757575
                font-size .12rem
            .like-button
                width .8rem
                border  1px,#ff5687,solid,32px
                height .32rem
                line-height .32rem
                text-align center
                color #ff5687
        .ensure-wrapper
            height .4rem
            width 100%
            background url(//s1.hdslb.com/bfs/static/mall-c/static/img/ensure.1659c17.png) no-repeat
            background-size 100%
        .procedure-wrapper
            margin-top .1rem
            width 100%
            background-color #fff
            .procedure-item
                display flex
                font-size .12rem
                letter-spacing 0
                line-height .12rem
                &.procedureactive
                    color #ff5587
                .procedure1
                    padding .22rem .18rem 0 .31rem
                    width 1.09rem
                .procedure2
                    padding .20rem 0 0 0
                    font-size .14rem
            .process-tip
                display inline-block
                padding .12rem .14rem .16rem .26rem
                font-size .12rem
                color #999
                line-height .12rem
                letter-spacing 0
        .sbbb
            margin-top .1rem !important
            margin-bottom 0 !important
            padding-left 0 !important
            width 100%
            background-color #fff
            height 1.9rem
            .sbbb-header
                width 100%
                display flex
                padding-top .16rem
                padding-left .12rem !important
                padding-right .12rem !important
                justify-content space-between
                font-size .12rem
                .ps1
                    color #212121
                    font-size .14rem
                .ps2
                    color #ff5687
            .sbbbscroll
                height 1.2rem
                width 100%
            .sbbb-comments
                padding .06rem .12rem .12rem
                height 1.2rem
                overflow-y hidden
                margin-top .1rem
                width max-content
                .sbbb-item
                    display inline-block
                    height 1.1rem
                    width 2.8rem
                    margin-right .1rem
                    box-shadow 0 0 5px 0 rgba(0,0,0,.2)
                    border-radius .07rem
                    background-color #fff
                    vertical-align top
                    .sbbb1
                        display flex
                        .sbbb2
                            flex 1
                            padding .1rem
                            .sbp1
                                height .24rem
                                line-height .24rem
                                display flex
                                width 100%
                                justify-content flex-start
                                img
                                    width .24rem
                                    height .24rem
                                    display block
                                    border-radius 50%
                                span
                                    margin-left .06rem
                                    font-size .13rem
                                    color #757575
                                    display inline-block
                            .sbp2
                                margin-top .1rem
                                font-size .12rem
                                color #212121
                                line-height .18rem
                                overflow hidden
                                ellipsis(260,2)
                .sbbb-itemend
                    display inline-block
                    width 1.2rem
                    height 100%
                    border-radius .07rem
                    background url(//s1.hdslb.com/bfs/static/mall-c/static/img/all-comments.2f35f82.png) no-repeat
                    text-align center
                    padding-top .3rem
                    p
                        color #999
                    .linemy
                        width 50%
                        height 0.02rem
                        margin-left 25%
                        background-color #999
        .height40
            height .4rem
            width 100%
        .shop-wrapper
            margin-top .1rem
            width 100%
            height .6rem
            background #fff
            display flex
            justify-content space-between
            align-items center
            padding 0 .12rem
            .shop-logo
                background-image url(//s1.hdslb.com/bfs/static/mall-c/static/img/detail-selfshop.a86239e.png)
                height .35rem
                width .35rem
                background-repeat no-repeat
                background-size cover
                background-position 50%
                box-sizing border-box
                border-radius 50%
            .shop-name
                width 1.8rem
                margin-top .13rem
                font-size .12rem
                color #212121
            .shop-cont
                margin-top .03rem
                font-size .12rem
                color #999
            .follow-button
                width .8rem
                height .32rem
                text-align center
                line-height .32rem
                border 1,#ff5687,solid,20px
                color #ff5687
        .recommend-wrapper
            margin-top .08rem
            height 2.04rem
            background-color #fff
            .recommend-title
                padding .16rem 0 .12rem .12rem
                font-size .14rem
                color #212121
                line-height .14rem
            .recommend-scroll
                width 100%
                height 1.62rem
                padding 0 .12rem
                .recommend-list
                    width max-content
                    height 100%
                    .recommend-item
                        width .89rem
                        height 100%
                        margin-right .12rem
                        display flex
                        flex-direction column
                        justify-content center
                        align-items center
                        float left
                        img
                            height .89rem
                            width .89rem
                            display block
                        div
                            ellipsis(89,2)
                            line-height .16rem
                            color #212121
                            font-size .12rem
                        p
                            margin-top .06rem
                            font-size .12rem
                            line-height .14rem
                            color #999
                            span
                                color #ff5687
        .panel
            margin-top .1rem
            width 100%
            background-color #fff
            .partner-detail
                padding-top .44rem
                background url(//s1.hdslb.com/bfs/static/mall-c/static/img/partner-details.34953a8.svg) center 0 no-repeat
                .form-item
                    height .36rem
                    padding 0 .2rem
                    line-height .36rem
                    font-size .12rem
                    display flex
                    justify-content flex-start
                    .form-item-label
                        width .58rem
                        height .36rem
                        color #999
                        padding-right .1rem
                    .form-item-content
                        color #212121
                        height .36rem
                .panel-control
                    height .36rem
                    line-height .36rem
                    text-align center
                    color #757575
                    font-size .12rem
        .ql-editor
            line-height 1.42
            width 100%
            >>>p
                width 100%
            >>>p img
                width 100%
    footer
        height .44rem
        width 100%
        display flex
        padding 0 .2rem
        justify-content flex-start
        align-items center
        background-color #fff
        box-shadow: 0 -1px 0 0 rgba(0,0,0,.08)
        .bottom-help
            width .22rem
            height .22rem
            margin-right .2rem
            background url(//s1.hdslb.com/bfs/static/mall-c/static/img/icon-help.1b14df6.svg) no-repeat
        .bottom-cart
            width .22rem
            margin-right .3rem
            position relative
            height .22rem
            background url(//s1.hdslb.com/bfs/static/mall-c/static/img/icon-cart.3e1c645.svg) no-repeat
            .bottom-cart-count
                    position absolute
                    top -.05rem
                    left .17rem
                    background #ff5687
                    color #fff
                    text-align center
                    border-radius .13rem
                    font-size .2rem
                    height .26rem
                    line-height .26rem
                    letter-spacing 0
                    padding 0 .04rem
                    box-sizing border-box
                    transform-origin 0 0
                    transform scale(.5)
                    min-width .28rem
        .bottom-buy
            width 2.3rem
            height .37rem
            border-radius .2rem
            background-color #ff62c5
            line-height .37rem
            text-align center
            color #fff
            font-size .14rem
</style>


