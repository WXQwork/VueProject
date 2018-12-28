<template>
    <div class="mains" id="main-scroll">
        <div>
          <Reflogo v-if="remove"></Reflogo>
          <div class="toplayn">
              <div class="refresh-img"></div>
              <div class="refresh-info">
                  <svg t="1541326957333" class="icon" :class="{svgresolve:isresolve}" style="" viewBox="0 0 1079 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17418" xmlns:xlink="http://www.w3.org/1999/xlink" width="21.07421875" height="20"><path d="M 503.074 573.449 a 51.6864 51.6864 0 0 0 73.3184 0 l 369.707 -370.492 a 52.224 52.224 0 0 0 0 -73.6597 a 51.6693 51.6693 0 0 0 -73.3184 0 L 539.716 463.07 L 206.652 129.297 a 51.6693 51.6693 0 0 0 -73.3184 0 a 52.2667 52.2667 0 0 0 0 73.6597 l 369.741 370.492 Z m 369.707 -122.871 L 539.716 784.341 L 206.652 450.577 a 51.6693 51.6693 0 0 0 -73.3184 0 a 52.2496 52.2496 0 0 0 0 73.6427 l 369.732 370.492 a 51.7035 51.7035 0 0 0 73.3184 0 l 369.741 -370.492 a 52.2581 52.2581 0 0 0 0 -73.6427 a 51.7035 51.7035 0 0 0 -73.344 0 Z" fill="#999999" p-id="17419"></path></svg>
                  <span>{{refreshtop}}</span>
              </div>
          </div>
          <Banner :bannerimages="bannerimages"></Banner>
          <div class="second-categories">
              <div :key="index" v-for="(item,index) in tabs">
                  <div>
                    <img :src="item.imageUrl" alt="">
                  </div>
                  <p>{{item.name}}</p>
              </div>
          </div>
          <div class="content">
              <div :key="index" v-for="(item,index) in feeds.list||[]">
                  <evaluation :datas="item" v-if="item.type === 'evaluation'"></evaluation>
                  <information :datas="item" v-if="item.type === 'information'"></information>
                  <mallitems :datas="item" v-if="item.type === 'mallitems'"></mallitems>
                  <pictures :datas="item" v-if="item.type === 'picture'"></pictures>
                  <ticketproject :datas="item" v-if="item.type === 'ticketproject'"></ticketproject>
                  <ugcs :datas="item" v-if="item.type === 'ugcs'"></ugcs>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
import axios from "utils/http";
import Banner from "components/common/banner/Banner";
import { Indicator } from "mint-ui";
import Reflogo from 'components/common/ref/Reflogo'
import evaluation from 'components/common/mainlist/Evaluation'
import information from 'components/common/mainlist/Information'
import mallitems from 'components/common/mainlist/Mallitems'
import pictures from 'components/common/mainlist/Pictures'
import ticketproject from 'components/common/mainlist/Ticketproject'
import ugcs from 'components/common/mainlist/Ugcs'

export default {
  data() {
    return {
      isresolve: false,
      refreshtop: "再拉，再拉就刷新给你看",
      bannerimages: [],
      alldata: null,
      remove:true,
      tabs:[],
      feeds:[] 
    };
  },
  beforeCreate() {
  },
  created() {
    //请求数据，只有这里才能获取数据
    this._ajaxdata();
    this.$nextTick(()=>{
      
    })
  },

  mounted() {
    let that = this;
    let bscroll = new BScroll("#main-scroll", {
      probeType: 1,
      //开始距离
      startY: -80,
      click: true
    });
    bscroll.on("scrollEnd", function() {
      if (this.y >= -80 && this.y < 0) {
        this.scrollTo(0, -80, 300);
      }
      if (this.y >= 0 && this.y < 100) {
        that._ajaxdata();
        this.scrollTo(0, -80, 300);
      }
    });
    bscroll.on("scroll", function() {
      if (this.y >= 0) {
        that.isresolve = true;
        that.refreshtop = "够了啦，松开人家啦";
      } else {
        that.isresolve = false;
        that.refreshtop = "再拉，再拉就刷新给你看";
      }
    });
  },

  updated() {},
  methods: {
    _ajaxdata: async function() {
      let that = this;
      let allresult = await axios({
        url: "/mall-c/home/index",
        method: "get",
        params: {
          network: "",
          mobi_app: "iphone",
          openEvent: "cold",
          build: 0,
          pageNum: 1,
          pageSize: 10,
          mVersion: 7
        }
      })
      that.alldata = allresult
      that.bannerimages = allresult.data.vo.banner.imageUrls
      that.tabs = allresult.data.vo.tabs
      that.feeds = allresult.data.vo.feeds
      that.remove = false
    }
  },
  components: {
    Banner,
    Reflogo,
    evaluation,
    information,
    mallitems,
    pictures,
    ticketproject,
    ugcs
  }
};
</script>

<style lang="stylus" scoped>
.mains
    height 100%
    .toplayn 
        height 0.8rem
        width 100%
        .refresh-img 
            height 0.6rem
            background url('~images/refresh.png') center top no-repeat
            background-size 50%
        .refresh-info 
            height 0.2rem
            line-height 0.2rem
            color #999
            font-size 0.14rem
            display flex
            justify-content center
            svg 
                margin-right 0.05rem
            .svgresolve 
                transition all 1s
                transform rotate(180deg)
    .second-categories
        height .8rem
        width 100%
        padding 0 .2rem
        margin .15rem 0 .2rem 0
        display flex
        justify-content space-between
        div
          display flex
          flex-direction column
          align-content center
          justify-content center
          text-align center
          div img 
            width 100%
            height 100%
            display block
          p
            font-size .12rem
    .content
      padding 0 .12rem
      width 100%
      min-height 10rem
      div
        background-color #ffffff
        border-radius .1rem
    

</style>

