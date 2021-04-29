import Vuex from 'vuex'
import order from './modules/order'

const createStore = () => {
    return new Vuex.Store({
            modules : {
                order
            }
        })
}

export default createStore