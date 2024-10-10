// components
// static documents (css, json, ...)

// frameworks
import { defineComponent } from 'vue';
import { storeOnglets } from '../../store/storeOnglet';
import "./Header.css";
// stores

// functions, class, constants, ...


/*
Niveau: entre 0 (inconnu) et 10 (parfait)
*/
// define component
export default defineComponent({
    data() {
        return {
            menu:false,
        };
    },
    computed: {
        onglets() {
            return storeOnglets.state.onglets
      }  
    },
    methods: {
        select_onglet(key: string) {
            storeOnglets.dispatch("set_current_onglet", key);
            this.menu = false;
        },
        toggle_menu() {
            this.menu = !this.menu;
        },
    },
    template: `
    <div class="component-header">
        <div class="me">
            <div class="name">
                <span>Vincent</span>
                <span>Giudicelli</span>
            </div>
            <span class="v-sep"></span>
            <div class="post">
                <span>Ingénieur géomaticien</span>
                <span>Développeur</span>
                <span>Régisseur son</span>
            </div>
        </div>
        <div class="btn menu" @click="this.toggle_menu">
            <span></span>
            <span class="visible"></span>
            <span class="visible"></span>
            <span class="visible"></span>
            <span></span>
        </div>
        <div class="nav menu" v-if="this.menu">
            <div class="item" v-for="[key, value] of this.onglets" @click="this.select_onglet(key)">{{ value }}</div>
        </div>
    </div>
    `,
});