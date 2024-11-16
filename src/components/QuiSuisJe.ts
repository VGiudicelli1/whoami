// components
// static documents (css, json, ...)

// frameworks
import { defineComponent } from 'vue';

// stores

// functions, class, constants, ...


// define component
export default defineComponent({
    props: {},
    emits: [],
    components: {},
    data() {
        return {};
    },
    mounted() {
        const app = document.querySelector("div.component-app");
        if (app instanceof HTMLDivElement) {
            app.style.backgroundImage = "url('./images/illustration_canvas/geomatique.png')";
        }        
    },
    computed: {},
    watch: {},
    methods: {},
    template: `
    <div class="component-QuiSuisJe">
        <h2>Qui suis-je ?</h2>
        <p>
            Ingénieur géomaticien de formation, je développe des logiciels web et bureau, avec une expertise en manipulation de données spatio-temporelles. Je suis également régisseur audio-visuel dans l'évènementiel.
            
        </p>
        <p>
        Très polyvalent, je m'adapte à toutes situations, et sait proposer des solutions que ce soit pour
            répondre à une situation d'urgence (en particulier dans mon expérience dans l'audio-visuel) ou pour
            anticiper des problèmes sur le long terme</p>
    </div>
    `,
});