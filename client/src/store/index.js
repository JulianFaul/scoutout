import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { companyGetters} from './getters'
import { companyMutations} from './mutations'
import { companyActions } from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    // plugins: [createPersistedState()],
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false,
        company:{},
        companies: []
    },
    
    mutations:Object.assign({}, companyMutations),
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
    actions:Object.assign({}, companyActions),
        // setToken({ commit }, token) {
        //     commit('setToken', token)
        // },

        // setUser({ commit }, user) {
        //     commit('setUser', user)
        // },

    getters: Object.assign({}, companyGetters)

    
})