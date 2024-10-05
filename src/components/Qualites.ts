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
        return {
            rep: "",
            show_more:false,
        };
    },
    computed: {},
    watch: {},
    methods: {},
    template: `
    <div class="component-qualites">
        <h2>Mes qualités</h2>
        <ul>
            <li>Grand</li>
            <li>Beau</li>
            <li>Musclé</li>
            <li>Bien bronzé</li>
            <li><i>Ah non, c'est vrai, je suis développeur...</i></li>
            <li>Passionné</li>
            <li>À l'écoute</li>
            <li>Logique</li>
            <li>très (trop?) pointilleux</li>
        </ul>

        <h2>Mes défauts</h2>
        <p>Ça, c'est un secret bien gardé !</p>
        <div v-if="!this.show_more" class="button" @click="this.show_more = true">En savoir plus</div>
        <div v-else class="button" @click="this.show_more = false">J'en sais déjà trop</div>
        <div v-if="show_more">
            <p>Garder une information secrète consiste à la maintenir en état de confidentialité, en restreignant la divulgation aux personnes autorisées. Vous pensiez vraiment qu'il suffit de cliquer sur un bouton pour tout savoir ?</p>
            <input type="text" v-model="this.rep">
            <p v-if="this.rep=='oui'">
                Quelle naiveté ! Mais comme je suis sympa, en voici un : je vais parfois un peu trop loin dans mes blagues.
            </p>
            <p v-else-if="this.rep=='non'">
                Ben alors, pourquoi avoir essayé ? Vous saviez pourtant que je ne vous dirais jamais que l'un de mes défauts est que je suis un peu trop tétu !
            </p>
            <p v-else-if="this.rep=='juste \\'oui\\' ou \\'non\\''">
                je vois que vous avez le même humour que moi, certains diront que c'est un défaut, moi je trouve que c'est une grande qualté !
            </p>
            <p v-else-if="this.rep">
                désolé, je n'ai pas compris votre réponse. Dites-moi juste 'oui' ou 'non'
            </p>
        </div>
    </div>
    `,
});