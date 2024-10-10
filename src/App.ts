import './App.css';

import { defineComponent } from 'vue';

import Experiences from './components/Experiences';
import Qualites from './components/Qualites';
import QuiSuisJe from './components/QuiSuisJe';
import Formations from './components/Formations';
import Competences from './components/Competences';
import Header from './components/page/Header';

export default defineComponent({
    components: {
        Experiences,
        Qualites,
        QuiSuisJe,
        Formations,
        Competences,
        Header,
    },
    template: `
    <div class="component-app">
        <Header />
        <div class="content-box">
            <div class="bg"></div>
            <div class="content">
                <QuiSuisJe />
                <Formations />
                <Competences />
                <Qualites />
                <Experiences />
            </div>
        </div>
    </div>
    `,
});