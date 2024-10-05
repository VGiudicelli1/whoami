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
    computed: {},
    watch: {},
    methods: {},
    template: `
    <div class="component-QuiSuisJe">
        <h2>Qui suis-je ?</h2>
        <ul>
            <li>Ingénieur géomaticien</li>
            <li>Développeur logiciel</li>
            <li>Régisseur</li>
            <li>Technicien autio-vidéo</li>
        </ul>
        <a href="./cv">Mon CV</a>
    </div>
    `,
});