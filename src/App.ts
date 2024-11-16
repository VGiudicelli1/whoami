import './App.css';

import { defineComponent } from 'vue';

import Experiences from './components/Experiences';
import Qualites from './components/Qualites';
import QuiSuisJe from './components/QuiSuisJe';
import Formations from './components/Formations';
import Competences from './components/Competences';
import Header from './components/page/Header';
import { storeOnglets } from './store/storeOnglet';
import CV from './components/CV';
import Contact from './components/Contact';

export default defineComponent({
    components: {
        Experiences,
        Qualites,
        QuiSuisJe,
        Formations,
        Competences,
        Header,
        CV,
        Contact,
    },
    computed: {
        onglet() {
            return storeOnglets.state.current_onglet;
        },
    },
    template: `
    <div class="component-app">
        <Header />
        <div class="content-box">
            <div class="bg"></div>
            <div class="content">
                <div style="display:none; color:blue">
                    Ce site est encore en cours de développement. Pour le moment je travaille sur le fond, la forme viendra après. Toutes mes excuses pour l'aspect esthétique. Je vous souhaite néanmoins une bonne visite !
                </div>
                <QuiSuisJe v-if="this.onglet=='accueil'" />
                <Formations v-if="this.onglet=='parcours'" />
                <Competences v-if="this.onglet=='parcours'" />
                <Qualites v-if="this.onglet=='parcours'" />
                <Experiences v-if="this.onglet=='projets'" />
                <CV v-if="this.onglet=='cv'" />
                <Contact v-if="this.onglet=='contact'" />
            </div>
        </div>
    </div>
    `,
});