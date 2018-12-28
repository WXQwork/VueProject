<template>
    <div class="barrage" :style="barrageStyle">

        <div v-if="direction">
            <div :style="{top:(barrageHeight+1)+'px'}" class="comment" v-for="(item,index) in barragdata" :key="index" :ref="item.ugcId">
                <span class="avatar">
                    <img :src="item.avatar" alt="">
                </span>
                <span class="word">{{item.text}}</span>
            </div>
        </div>
        <div v-else>
            <div :style="{left:100+'%'}" class="comment" v-for="(item,index) in barragdata" :key="index" :ref="item.ugcId">
                <span class="avatar">
                    <img :src="item.avatar" alt="">
                </span>
                <span class="word">{{item.text}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui.js'
export default {
    props:{
        barrageHeight:{
            type:Number,
            default:100
        },
        barragetop:{
            type:Number,
            default:0
        },
        barragdata:{
            type:Array,
            default:[]
        },
        direction:{
            type:Boolean,
            default:true
        }
    },
    data () {
        return {
            barrageStyle:{
                width:'100%',
                height:this.barrageHeight+'px',
                top:this.barragetop+'px'
            },
            myrefs:[],
            timer:null
        }
    },
    watch:{
        barragdata () {
            this.$nextTick(()=>{
                for(let key in this.$refs){
                    this.myrefs.push(this.$refs[key][0])
                }
            })
        }
    },
    mounted() {
        this.$nextTick(()=>{
            //不好控制--pass
            // var mySequence = []
            // let itcont = 1
            // for(let key in this.$refs){
            //     let obj = {
            //         elements: this.$refs[key],
            //         properties: { 
            //             top: -150
            //         },
            //         options: { 
            //             duration: 6000,
            //             easing:'swing',
            //             sequenceQueue:false,
            //             delay: (400+itcont*10),
            //             begin:()=>{
            //                 this.$refs[key][0].style.opacity = 1
            //             },
            //             complete:()=>{
            //                 this.$refs[key][0].style.opacity = 0
            //                 this.$refs[key][0].style.top = 150 + 'px'
            //             } 
            //         } 
            //     }
            //     itcont++
            //     mySequence.push(obj)
            // }
            // Velocity.RunSequence(mySequence)

            //自己写的函数不流畅--pass
            // Velocity.RegisterEffect("callout.customPulse", {
            //     defaultDuration: 5000,
            //     calls: [
            //         [ { top: 113,opacity:1 }, 0.1 ],
            //         [ { top: 0 }, 0.8 ],
            //         [ { top: 30,opacity:0 }, 0.1 ]     
            //     ]
            // });
            for(let key in this.$refs){
                this.myrefs.push(this.$refs[key][0])
                // Velocity(this.$refs[key][0],{ 
                // top:[-40,'linear'],
                // },{ 
                //     duration: 4000 ,
                //     delay: sb*800,
                //     complete:()=>{
                //         console.log(1)
                //         this.$refs[2941708][0].style.top = 151+'px'
                //         this.$refs[2941708][0].style.opacity = 0
                // }},{ queue: this.$refs[key][0].ugcId })
                // sb++
            }
            let nbst = 0
            //console.log(this.myrefs===){判断是否存在}
            if(this.direction === true){
                clearInterval(this.timer)
                this.timer = setInterval(()=>{
                    Velocity(this.myrefs[0],{ 
                    top:[-30,'linear'],
                    },{ 
                        duration: 5000 ,
                        complete:()=>{
                            this.myrefs[0].style.top = (this.barrageHeight+1)+'px'
                    }})
                    let sb = this.myrefs.shift()
                    this.myrefs.push(sb)
                },1200)
            }else{
                clearInterval(this.timer)
                this.timer = setInterval(()=>{

                    if(nbst%3==0){
                        this.myrefs[0].style.top = 15+'%'
                    }else if(nbst%3==1){
                        this.myrefs[0].style.top = 35+'%'
                    }else if(nbst%3==2){
                        this.myrefs[0].style.top = 55+'%'
                    }

                    Velocity(this.myrefs[0],{ 
                    left:[-100+'%','linear'],
                    },{ 
                        duration: 10000 ,
                        complete:()=>{
                            this.myrefs[0].style.left = 100+'%'
                    }})
                    let sb = this.myrefs.shift()
                    this.myrefs.push(sb)
                    nbst++
                },1200)
            }

            //完美
            // Velocity(this.$refs[2941708][0],{ 
            //     opacity: [1,"easeOutQuart"],
            //     top:[-40,'linear'],
            //     },{ 
            //         duration: 4000 ,
            //         delay: 1000,
            //         complete:()=>{
            //             this.$refs[2941708][0].style.top = 151+'px'
            //             this.$refs[2941708][0].style.opacity = 0
            //     }},{ queue: "a" })
        })
    },
    destroyed() {
        for(let i = 0;i<this.myrefs.length;i++){
            Velocity(this.myrefs[i],{
                stop:true
            })
        }     
    },
}
</script>


<style lang="stylus" scoped>
@import '~styles/ellipsis.styl'
.barrage
    position absolute
    padding-left .15rem
    z-index 99
    background-color:rgba(0,0,0,0)
    overflow hidden 
    .comment
        display flex
        position absolute
        max-width 80%
        height .26rem
        padding-right .13rem
        border-radius .13rem
        background-color rgba(0,0,0,.65)
        font-size 0
        opacity 1
        .avatar
            flex-shrink 0
            display inline-block
            width .24rem
            height .24rem
            margin .01rem 0 0 .01rem
            border-radius .12rem
            vertical-align middle
            img 
                width 100%
                height 100%
                display block 
                border-radius 50%
        .word
            flex 1
            margin-left .05rem
            font-size .12rem
            color #fff
            vertical-align middle
            line-height .26rem
            ellipsis()
</style>

