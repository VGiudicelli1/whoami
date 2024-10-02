export function fetch_api(
    url: string,
    data: any = "",
    done: (result: any) => void = () => { },
    undone: (code: number, value: string, response: Response) => boolean | void = () => false
): Promise<void> {
    return fetch(url, {
        method: "post",
        body: data
    }).then(r => {
        return r.status == 200 ? r.clone().json().catch(err => ({
            result: "undone",
            code: 0,
            value: err,
        })).then(r2 => {
            r2.response = r;
            return r2;
        }) : {
            result: "undone",
            code: 0,
            value: r.status,
            response: r,
        };
    }).then(r => {
        if (r.result == "done") {
            done(r);
        } else {
            if (!undone(r.code, r.value, r.response)) {
                console.error(r.code, r.value, r.response);
            }
        }
        return;
    });
}


export class Path {
    public readonly base: string;
    public readonly dir: string;
    public readonly ext: string;
    public readonly name: string;
    public readonly path: string;

    private constructor(
        dir: string,
        name: string,
        ext: string,
    ) {
        this.dir = dir;
        this.ext = ext;
        this.name = name;
        this.base = name + ext;
        this.path = this.dir + "/" + this.base;
    }

    public static parse(
        path: string
    ): Path {
        const splited = path.split(/\/|\\/);
        const base = splited.pop() ?? "";
        const dir = splited.join("/");

        const name_splited = base.split(".");
        const ext = name_splited.length > 1 ? "." + name_splited.pop() : "";
        const name = name_splited.join(".");

        return new Path(dir, name, ext);
    }
}

export const modeDev = import.meta.env.MODE == "development";