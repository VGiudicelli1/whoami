// frameworks
import { defineComponent } from "vue";

// stores
import { storeTemplate } from "../store/storeTemplate";

// components

// static documents (css, json, ...)
import "./ComponentTemplate.css";


// functions, class, constants, ...


// define component
export default defineComponent({
    props: {},
    emits: [],
    components: {},
    data() {
        return {
            b: 0
        };
    },
    computed: {
        a() {
            return storeTemplate.state.a;
        },
    },
    watch: {},
    methods: {},
    template: `
    <div class="component-ComponentTemplate">
        ...
    </div>
    `,
});