import styles from './CampaignItem.module.scss';

import Card from '../Card/Card';
import { Box } from '@mui/system';
import Campaign from '../../models/campaign';
import Person from '../../models/person';

const PEOPLE: Person[] = [
    new Person({id: 1, firstName: 'Hiba', nationality: 'Syrian'}),
    new Person({id: 2, firstName: 'Malaz', nationality: 'Syrian'}),
    new Person({id: 3, firstName: 'Nour', nationality: 'Syrian'}),
]

const CampaignItem: React.FC<{campaign: Campaign}> = (props) => {
    const personId: number = props.campaign.personId;
    const person = PEOPLE.find(person => person.id === personId);    

    return (
        <Card>
            <div className={styles['campaign-item']}>
                <p>{person?.firstName}</p>
                <h4>{props.campaign.title}</h4>
                <Box sx={{height: 40}} />
            </div>
        </Card> 
    );
}

export default CampaignItem;