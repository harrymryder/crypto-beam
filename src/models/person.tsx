class Person {
    id: number;
    firstName: string;
    nationality: string;

    constructor({ id, firstName, nationality }: { id: number, firstName: string, nationality: string }) {
        this.id = id;
        this.firstName = firstName;
        this.nationality = nationality;
    }
}

export default Person;