// components
// static documents (css, json, ...)

// frameworks
import { defineComponent } from 'vue';
import ListLimit, { List } from './ListLimit';

// stores

// functions, class, constants, ...


/*
Niveau: entre 0 (inconnu) et 10 (parfait)
*/
// define component
export default defineComponent({
    props: {},
    emits: [],
    components: {
        ListLimit
    },
    data() {
        return {
            programmingLangages: Object.entries({
                python: 8,
                SQL: 7,
                HTML: 6,
                PHP: 7,
                JavaScript: 7,
                TypeScript: 5,
                CSS: 4,
                LaTeX: 7,
                Java: 5,
                C: 6,
                "C++": 7,
                "C#": 1,
                Kotlin: 0,
                Swift: 1,
                Caml: 5,
                ADA: 4,
                Bash: 4,
                Basic: 5,
                Ruby: 2,
                Julia: 0,
                Scalia: 0,
            }),
            frameworks: Object.entries({
                VueJS: 5,
                ThreeJS: 6,
                "OpenGL (C++)": 5
            }),
            prgm_theory: Object.entries({
                "programmationorientéeobjet":5,
                "programmationfonctionnelle":5,
                "programmationimpérative":5,
                "programmationévénementielle":5,
                "programmationréactive":5,
                "compilateurs":5,
                "interpréteur":5,
                "basesdedonnées":5,
                "réseaux":5,
                "théoriedesgraphes":5,
                "moindres carrés":5,
                "plateformes mobiles":5,
                "programmation scientifique":5,
                "programmation sous SIG":5,
                "apprentissageautomatique":5,
                "intelligenceartificielle":5,
                "Git":5,
                "WEBresponsif":5,
                "UI/UX design":5,
                "modélisation3D":5,
                "rendu3D":5,
                "programmationembarquée":5
            }),
        };
    },
    mounted() {
        this.programmingLangages
            .sort((a, b) => a[1] - b[1])
            .reverse();
        this.frameworks
            .sort((a, b) => a[1] - b[1])
            .reverse();
        this.prgm_theory
            .sort((a, b) => a[1] - b[1])
            .reverse();
    },
    computed: {
        _programmingLangages() {
            return new List( this.programmingLangages.map(v => `${v[0]} : ${v[1]}`));
        },
        _frameworks() {
            return new List( this.frameworks.map(v => `${v[0]} : ${v[1]}`));
        },
        _prgm_theory() {
            return new List( this.prgm_theory.map(v => `${v[0]} : ${v[1]}`));
        }
    },
    watch: {},
    methods: {},
    template: `
    <div class="component-competences">
        <h2>Mes compétences</h2>
        <div>
            <h3>Programmation</h3>
            <h4>Langage de programmation</h4>
            <ListLimit :values="this._programmingLangages" limit="5"/>
            <h4>Frameworks</h4>
            <ListLimit :values="this._frameworks" limit="5"/>
            <h4>Théorie</h4>
            <ListLimit :values="this._prgm_theory" limit="5"/>
        </div>
        <div>
            <h3>Géomatique</h3>
            <h4>Cartographie (QGIS & ArcGIS)</h4>
            <p>réalisation de cartes, manipulation de bases de données géographiques,mise en page,scripts.</p>
            <h4>Géodésie</h4>
            <p>Systèmes de référence, Systèmes de projections, Conversion de coordonnées</p>
            <h4>Photogrammétrie architecturale</h4>
            <p>Orthorectification de photos; création et manipulation de nuages de points 3D (référencement géographique, appareillement colorimétrique, extraction de plans de coupe).</p>
            <h4>Télédetection</h4>
            <p>Classification supervisée et non supervisée, IA, photo-interprétation, analyse d’images (filtrages, opérations statistiques).</p>
            <h4>Topométrie</h4>
            <p>Levé de points, réalisation de plan2D(ex:rue,bâtiment), auscultation métrologique, nivellement</p>
        </div>
        <div>
            <h3>Audio-visuel</h3>
            <p>Là j'ai plein de choses à dire, revenez dans quelques jours, je suis en pleine rédaction...</p>
            <p>installation et réglage de sono, diagnostique et réparation de cables,
enregistrementaudio-vidéo,mixageetpost-traitements</p>
        </div>
        <div>
            <h3>Autre compétences</h3>
            <h4>Électronique</h4>
            <h4>Menuiserie</h4>
            <h4>Gestion de projet et Management</h4>
            <p>gestion de projets en tant que chef de projet, expert technique,testeur,ou développeur.</p>
        </div>
        <div>
            <h3>Langues</h3>
            <p>Français: langue maternelle</p>
            <p>Anglais: niveau B2 (dernier score TOEIC: 790 points)</p>
            <p>Allemand: niveau B1</p>
            <p>Portugais: je sais utiliser google traduction</p>
        </div>
    </div>
    `,
});