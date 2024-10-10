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
        };
    },
    computed: {
        onglets() {
            return storeOnglets.state.onglets
      }  
    },
    methods: {
        select_onglet(key: string) {
            console.log(key);
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
        <div class="btn menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="menu">
            <ul>
                <li v-for="[key, value] of this.onglets" @click="this.select_onglet(key)">{{ value }}</li>
            </ul>
        </div>
    </div>
    `,
});