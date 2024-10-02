import { defineComponent } from 'vue';

import ComponentTemplate from './components/ComponentTemplate';

import "./App.css";

export default defineComponent({
    components: {
        ComponentTemplate,
    },
    template: `
    <div class="component-app">
        <ComponentTemplate />
    </div>
    `,
});