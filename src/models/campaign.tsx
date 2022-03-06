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

    constructor({title, personId}: {title: string, personId: number}) {
        this.id = Math.random();
        this.title = title;
        this.personId = personId;
    }
}

export default Campaign;