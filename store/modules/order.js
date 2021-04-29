const order = {
    state : {
        carts : []
    },
    mutations :{
        ADD_ITEM_TO_CART: (state, data) => {
           state.carts.push(data.carts)
        },
        REMOVE_ITEM_FROM_CART: (state, data) => {
           state.carts.push(data.carts)
        },
    },
    getters : {
        carts(state) {
            return state.carts
        },
    },
    actions : {
        addItem({ commit }, item) {
            commit('ADD_ITEM_TO_CART', { carts : item })
        },
        removeItem({ commit }, item) {
            commit('REMOVE_ITEM_FROM_CART', { item : refresh })
        },
    }
}

export default order;