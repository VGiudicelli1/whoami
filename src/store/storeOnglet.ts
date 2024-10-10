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
});