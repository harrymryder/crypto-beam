import styles from './CampaignItem.module.scss';

import AppCard from '../AppCard/AppCard';
import { Box } from '@mui/system';
import Campaign from '../../../models/campaign';
import Person from '../../../models/person';
import PEOPLE from '../../../data/People';
import { Link } from 'react-router-dom';

const CampaignItem: React.FC<{ campaign: Campaign }> = (props) => {
    const personId: number = props.campaign.personId;
    const person = PEOPLE.find(person => person.id === personId);

    return (
        <AppCard>
            <Link 
                to={`/campaigns/${props.campaign.id}`}
                style={{ textDecoration: 'none' }}>
                <div className={styles['campaign-item']}>
                    <p>{person?.firstName}</p>
                    <h4>{props.campaign.title}</h4>
                    <Box sx={{ height: 40 }} />
                    <h6>{person?.address}</h6>
                    {/* <Box sx={{ height: 40 }} /> */}
                </div>
            </Link>
        </AppCard>
    );
}

export default CampaignItem;