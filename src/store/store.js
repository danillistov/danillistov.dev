import { createStore } from 'vuex';

const store = createStore({
    state () {
        return {
            loading: true,
        };
    },

    getters: {
        getLoadingState(state) {
            return state.loading;
        }
    },

    actions: {
        showOverlay({ commit }, value) {
            console.log(value);
            commit('SET_OVERLAY_STATE', value);
        },
    },

    mutations: {
        SET_OVERLAY_STATE(state, payload) {
            state.loading = payload;
        },
    },
});

export default store;