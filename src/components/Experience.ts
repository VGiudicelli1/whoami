// components
// static documents (css, json, ...)
import { Experience } from '../store/storeExperiences';
import './Experience.css';

// frameworks
import { defineComponent } from 'vue';

// stores

// functions, class, constants, ...



// define component
export default defineComponent({
    props: {
        experience: Experience,
    },
    emits: [],
    components: {},
    data() {
        return {
            _experience: this.experience ?? Experience.NULL,
            open: false,
        };
    },
    watch: {},
    methods: {},
    template: `
    <div class="component-experience">
        <div class="tags">
            <span v-for="tag in this._experience.tags">{{ tag }}</span>
        </div>
        <span class="entreprise">{{ this._experience.entreprise }}</span>
        <span class="dates" v-if="this._experience.duree">
            {{ this._experience.d_begin_str }} - {{ this._experience.d_end_str }} ({{ this._experience.duree }})
        </span>
        <span class="dates" v-else>
            depuis {{ this._experience.d_begin_str }}
        </span>
        <h3>{{ this._experience.poste }}</h3>
        <p>{{ this._experience.description }}</p>
        <p v-if="this.open">{{ this._experience.contenu }}</p>
        <div v-if="this.open" class="liens">
            <a v-for="lien in this._experience.liens" :href="lien">{{ lien }}</a>
        </div>
        <div v-if="this.open" class="photos">
            <div class="photo" v-for="photo in this._experience.photos">
                <img :src="photo"/>
            </div>
        </div>
        <div class="button" v-if="!this.open" @click="this.open=true">afficher plus</div>
        <div class="button" v-if="this.open" @click="this.open=false">réduire</div>
    </div>
    `,
});