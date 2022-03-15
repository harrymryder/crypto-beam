class Person {
    id: number;
    firstName: string;
    nationality: string;
    address: string;

    constructor({ id, firstName, nationality, address }: { id: number, firstName: string, nationality: string, address: string }) {
        this.id = id;
        this.firstName = firstName;
        this.nationality = nationality;
        this.address = address;
    }
}

export default Person;