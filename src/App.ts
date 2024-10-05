import './App.css';

import { defineComponent } from 'vue';

import Experiences from './components/Experiences';
import Qualites from './components/Qualites';
import QuiSuisJe from './components/QuiSuisJe';
import Formations from './components/Formations';
import Competences from './components/Competences';

export default defineComponent({
    components: {
        Experiences,
        Qualites,
        QuiSuisJe,
        Formations,
        Competences,
    },
    template: `
    <div class="component-app">
        <QuiSuisJe />
        <Formations />
        <Competences />
        <Qualites />
        <Experiences />
    </div>
    `,
});