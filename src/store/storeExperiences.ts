import { createStore } from 'vuex';


const formatDate = (d: Date) => d.toLocaleDateString("fr", { month: "short", year: "numeric" });


type ExperienceJson = {
    id: number,
    tags: string[],
    date_debut: string,
    date_fin: string,
    duree: string,
    poste: string,
    entreprise: string,
    description: string,
    contenu: string,
    photos: string[],
    liens: string[],
};

export class Experience {
    public readonly is_null: boolean;
    public readonly id: number;
    public readonly tags: string[];
    public readonly d_begin: Date;
    public readonly d_end: Date;
    public readonly d_begin_str: string;
    public readonly d_end_str: string;
    public readonly duree: string;
    public readonly poste: string;
    public readonly entreprise: string;
    public readonly description: string;
    public readonly contenu: string;
    public readonly photos: string[];
    public readonly liens: string[];

    public constructor(
        id: number,
        tags: string[],
        d_begin:  Date,
        d_end:   Date,
        duree: string,
        poste: string,
        entreprise: string,
        description: string,
        contenu: string,
        photos: string[],
        liens: string[],
    ) {
        this.id = id;
        this.tags = tags;
        this.d_begin = d_begin;
        this.d_end = d_end;
        this.duree = duree;
        this.poste = poste;
        this.entreprise = entreprise
        this.description = description;
        this.contenu = contenu
        this.photos = photos
        this.liens = liens
        
        this.d_begin_str = formatDate(d_begin);
        this.d_end_str = formatDate(d_end);

        

        this.is_null = id == 0;
    }

    public static fromJson(doc: ExperienceJson) : Experience {
        return new Experience(
            doc.id,
            doc.tags,
            new Date(Date.parse(doc.date_debut)),
            new Date(Date.parse(doc.date_fin)),
            doc.duree,
            doc.poste,
            doc.entreprise,
            doc.description,
            doc.contenu,
            doc.photos,
            doc.liens
        );
    }

    public static readonly NULL = new Experience(
        0, [], new Date(0), new Date(0), "", "", "", "", "", [], []
    );
}

export const storeExperiences = createStore({
    state() {
        return {
            experiences: new Map<Number, Experience>(),
        };
    },
    actions: {
        async _set_experiences(store, experiences) {
            store.commit("_set_experiences", experiences);
        },
        async load(store) {
            fetch("./experiences.json")
                .then(r => r.json())
                .then(r => {
                    return new Map(Object.entries(r)
                        .map(([_, doc]: [string, any]) => Experience.fromJson(doc))
                        .filter(exp => !exp.is_null)
                        .map(exp => [exp.id, exp]));
                })
                .then(r => {
                    store.dispatch("_set_experiences", r);
            })
        }
    },
    mutations: {
        _set_experiences(state, experiences) {
            state.experiences = experiences;
        },
    },
});

storeExperiences.dispatch("load");