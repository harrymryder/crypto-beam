// interface CampaignParams {
//     id?: number;
//     personId: number;
//     title?: string;
//     target?: number;
//     totalRaised?: number;
// }

class Campaign {
    id: number;
    personId: number;
    title: string;
    target?: number;
    totalRaised?: number;

    constructor({ id, title, personId }: { id: number, title: string, personId: number }) {
        this.id = id;
        this.title = title;
        this.personId = personId;
    }
}

export default Campaign;