import shop from '@/api/data'

const state = {
    all:[]
}

const actions = {
    async getAllproducts ({commit}) {
        let products = await shop()
        //获取商品信息的东东
        commit('setProducts',products)
    }
}

const mutations = {
    setProducts (state,products) {
        //直接赋值的
        state.all = products
    },

    //库存--
    update (state , {id} ) {
        let product = state.all.find( product => product.id ===id)
        product.inventory--
    }
}

export default {
    namespaces:true,
    state,
    actions,
    mutations
}
