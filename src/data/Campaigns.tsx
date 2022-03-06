import Campaign from "../models/campaign";

const CAMPAIGNS: Campaign[] = [
    new Campaign({
        id: 1,
        title: 'Hiba needs a new laptop',
        personId: 1
    }),
    new Campaign({
        id: 2,
        title: 'Malaz wants to move to Canada',
        personId: 2
    }),
    new Campaign({
        id: 3,
        title: 'Help Nour',
        personId: 2
    }),
];

export default CAMPAIGNS;