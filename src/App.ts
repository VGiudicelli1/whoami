import { defineComponent } from 'vue';

import ComponentTemplate from './components/ComponentTemplate';

import "./App.css";

export default defineComponent({
    components: {
        ComponentTemplate,
    },
    template: `
    <div class="component-app">
        <div>
            <h1>Qui suis-je ?</h1>
            <ul>
                <li>Ingénieur géomaticien</li>
                <li>Développeur logiciel</li>
                <li>Régisseur</li>
                <li>Technicien autio-vidéo</li>
            </ul>
        </div>

        <div>
            <h1>Mes formation</h1>
        </div>

        <div>
            <h1>Mes expériences</h1>
            <i>-- filtrer par date ou par mot clef</i><br>
            <i>-- rechercher un terme</i>
        </div>

        <div>
            <h1>Mes compétences</h1>
        </div>

        <div>
            <h1>Mes qualités</h1>

            <h3>Mes défauts</h3>
            Ça, c'est un secret bien gardé ! En savoir plus.
            Garder une information secrète consiste à la maintenir en état de confidentialité, en restreignant la divulgation aux personnes autorisées. Vous pensiez vraiment qu'il suffit de cliquer sur un bouton pour tout savoir ?
            input
            si 'oui'
            Quelle naiveté ! Mais comme je suis sympa, en voici un : je vais parfois un peu trop loin dans mes blagues.
            si 'non'
            Ben alors, pourquoi avoir essayé ? Vous saviez pourtant que je ne vous dirais jamais que l'un de mes défauts est que je suis un peu trop tétu !
            si "juste 'oui' ou 'non'":
            je vois que vous avez le même humour que moi, certains diront que c'est un défaut, moi je trouve que c'est une grande qualté !
            si autre chose:
            désolé, je n'ai pas compris votre réponse. Dites-moi juste 'oui' ou 'non'
        </div>

        <ComponentTemplate />
    </div>
    `,
});