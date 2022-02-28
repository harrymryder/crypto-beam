import { stringify } from "querystring";

class Project {
    id: number;
    name: string;

    constructor(name: string) {
        this.id = Math.random();
        this.name = name;
    }
}

export default Project;