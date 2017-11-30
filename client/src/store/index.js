import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { companyGetters,   productGetters} from './getters'
import { companyMutations, productMutations} from './mutations'
import { companyActions,   productActions } from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    // plugins: [createPersistedState()],
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false,
        company:{},
        companies: [],
        products : []
    },
    
    mutations:Object.assign({}, companyMutations,productMutations),
    // setToken(state, token) {
    //     state.token = token
    //     if (token) {
    //         state.isUserLoggedIn = true
    //     } else {
    //         state.isUserLoggedIn = false
    //     }
    // },
    // setUser(state, user) {
    //     state.user = user
    // },
    actions:Object.assign({}, companyActions,productActions),
        // setToken({ commit }, token) {
        //     commit('setToken', token)
        // },

        // setUser({ commit }, user) {
        //     commit('setUser', user)
        // },

    getters: Object.assign({}, companyGetters,productGetters)

    
})