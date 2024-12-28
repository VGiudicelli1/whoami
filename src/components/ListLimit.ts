import { defineComponent } from "vue";

export class List<T> {
    public values: T[];
    public constructor(values: T[]) {
        this.values = values;
    }
}

export default defineComponent({
    props: {
        values: List<String>,
        limit: [Number,String],
    },
    data() {
        return {
            limited: <null | boolean>null,
        }
    },
    computed: {
        _limit() {
            return Number(this.limit ?? 5);
        },
        _values() {
            return this.values ? (
                this.limited ?
                    [...this.values.values].splice(0, this._limit)
                    : this.values.values
            ) : [];
        },
    },
    watch: {
        values() {
            this.compute_limited();
        },
    },
    methods: {
        compute_limited() {
            this.limited = (this.values?.values.length ?? 0) <= this._limit ? null : this.limited === null ? true : this.limited;
        },
    },
    mounted() {
        this.compute_limited();
    },
    template: `
    <ul>
        <li v-for="item in this._values">{{ item }}</li>
        <div class="button" v-if="this.limited==true" @click="this.limited=false">tout afficher</div>
        <div class="button" v-if="this.limited==false" @click="this.limited=true">réduire</div>
    </ul>
    `
})