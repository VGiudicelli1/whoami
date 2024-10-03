import { createStore } from 'vuex';

const LS_STORE_TEMPLATE_A = "storeTemplate_a";

export const storeTemplate = createStore({
    state() {
        return {
            a: Number(localStorage.getItem(LS_STORE_TEMPLATE_A) ?? 0),
        };
    },
    actions: {
        async set_a(store, value: number) {
            store.commit("_set_a", "" + value);
        }
    },
    mutations: {
        _set_a(state, value: number) {
            state.a = value;
            localStorage.setItem(LS_STORE_TEMPLATE_A, "" + value);
        },
    },
});