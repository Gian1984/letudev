import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
    state: {},
    plugins: [createPersistedState()],
    mutations: {
    },
    actions: {
    },
    modules: {
    },
})
