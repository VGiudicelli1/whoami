import { createStore } from 'vuex';


export const storeOnglets = createStore({
    state() {
        return {
            onglets: new Map([
                ["accueil", "à propos de moi"],
                ["parcours", "mon parcours"],
                ["projets", "mes projets"],
                ["cv", "CV"],
                ["contact","contact"],
            ]),
            current_onglet: "accueil"
        };
    },
    actions: {
        set_current_onglet(store, onglet: string) {
            store.commit("_set_current_onglet", onglet);
        },
    },
    mutations: {
        _set_current_onglet(state, onglet: string) {
            state.current_onglet = onglet;
        },
    },
});