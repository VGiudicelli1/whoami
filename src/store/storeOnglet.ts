import { createStore } from 'vuex';
import { List } from '../components/ListLimit';


export const storeOnglets = createStore({
    state() {
        return {
            onglets: new Map([
                ["accueil", "à propos de moi"],
                ["parcours", "mon parcours"],
                ["projets", "mes projets"],
                ["cv", "CV"],
                // ["contact","contact"],
            ]),
            current_onglet: "accueil",
            cv: new Map<string,string>(),
        };
    },
    actions: {
        set_current_onglet(store, onglet: string) {
            store.commit("_set_current_onglet", onglet);
        },
        load_cv(store) {
            fetch("./cv")
                .then(r => r.text())
                .then(r => (new DOMParser()).parseFromString(r, 'text/html'))
                .then(doc => [...doc.querySelectorAll("a")].map(a => ({ name: a.innerText.split(".")[0], uri: a.href })))
                .then(r => store.commit("_set_cv", r));
        }
    },
    mutations: {
        _set_current_onglet(state, onglet: string) {
            state.current_onglet = onglet;
        },
        _set_cv(state, cv: { name: string, uri: string }[]) {
            state.cv = new Map(cv.map(c => [c.name, c.uri]));
        }
    },
});

storeOnglets.dispatch("load_cv");