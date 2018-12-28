import BarrageComponent from './barrage.vue'

let Barrage = {}

Barrage.install = (Vue)=>{
    Vue.component('barrage',BarrageComponent)
}

export default Barrage