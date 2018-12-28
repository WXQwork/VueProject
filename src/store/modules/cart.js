const state = {
    products:[]
}

const mutations = {
    push (state,item) {
        state.products.push(item)
    },
    //加一个
    update (state,product) {
        let item = state.products.find(item =>item.id===product.id )
        item.num = item.num + Number(product.num)
    },
    addone (state,id) {
        let item = state.products.find(item =>item.id===id )
        item.num = item.num + 1
    },
    removeone (state,id) {
        let item = state.products.find(item =>item.id===id )
        item.num = item.num - 1
    }
}

const actions = {
    addToCart ({commit,state},product) {
        //寻找id相同的元素
        //console.log(product)
        let item = state.products.find(item =>item.id===product.id )
        if(!!item){
            commit('update',product)
        }else{
            //推送product
            commit('push', product)
        }
    },
    addone ({commit},id) {
        commit('addone', id)
    },
    removeone ({commit},id) {
        commit('removeone',id)
    }
}

const getters = {
    totalPrice (state,getters) {
        return state.products.reduce((total,product)=>{
            return total + product.num
        },0)
    }
}

export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}