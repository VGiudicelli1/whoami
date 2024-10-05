// components
// static documents (css, json, ...)

// frameworks
import { defineComponent } from 'vue';
import Experience from './Experience';

// stores
import { storeExperiences } from '../store/storeExperiences';

// functions, class, constants, ...


// define component
export default defineComponent({
    props: {},
    emits: [],
    components: {
        Experience,
    },
    data() {
        return {};
    },
    computed: {
        experiences() {
            return storeExperiences.state.experiences;
        }
    },
    watch: {},
    methods: {
        alert_not_dev() {
            alert(`cette partie est en cours de développement,
    --> ré-essayez dans quelques instants (ça marchera pas mieux)
    --> ou dans quelques jours (là c\'est plus probable)`);
        }
    },
    template: `
    <div class="component-experiences">
        <!-- todo : use v-for and storage -->
        <h2>Mes expériences</h2>
        <i @click="this.alert_not_dev">-- filtrer par date ou par mot clef</i><br>
        <i @click="this.alert_not_dev">-- rechercher un terme</i>
        <Experience v-for="[id, experience] of this.experiences" :experience="experience" />
    </div>
    `,
});