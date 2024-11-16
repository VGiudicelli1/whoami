import { defineComponent } from "vue";
import { storeOnglets } from "../store/storeOnglet";

export default defineComponent({
    computed: {
        cv() {
            return storeOnglets.state.cv;
        },
    },
    template: `
    <div>
        <h1>Mes CV</h1>
        <p>J'ai plusieurs versions de CV disponnibles :</p>
        <ul v-if="this.cv.size > 0">
            <li v-for="[name, uri] of this.cv"><a :href="uri">{{ name }}</a></li>
        </ul>
        <div v-else>
            Vous pouvez les consulter <a href="./cv">ici</href>
        </div>
    </div>
    `
})