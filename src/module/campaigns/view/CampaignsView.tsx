import { Col, Container, Row } from 'react-bootstrap';
import CampaignItem from '../../../components/CampaignItem/CampaignItem';
import Card from '../../../components/Card/Card';
import ViewContainer from '../../../components/ViewContainer/ViewContainer';
import Campaign from '../../../models/campaign';
import Person from '../../../models/person';
import styles from './CampaignsView.module.scss';

function CampaignsView() {
    const CAMPAIGNS: Campaign[] = [
        new Campaign(
            {
                title: 'Hiba needs a new laptop',
                personId: 1
            }
        ),
        new Campaign(
            {
                title: 'Malaz wants to move to Canada',
                personId: 2
            }
        ),
        new Campaign(
            {
                title: 'Help Nour',
                personId: 2
            }
        ),
    ];

    const PEOPLE: Person[] = [
        new Person({id: 1, firstName: 'Hiba', nationality: 'Syrian'}),
        new Person({id: 2, firstName: 'Malaz', nationality: 'Syrian'}),
        new Person({id: 3, firstName: 'Nour', nationality: 'Syrian'}),
    ]

    return (
        <ViewContainer>
            <Container>
                <Row>
                    {CAMPAIGNS.map((campaign: Campaign) =>
                        <Col xs={12} sm={6} md={4}>
                            <CampaignItem campaign={campaign} />
                        </Col>)}
                </Row>
            </Container>
        </ViewContainer>
    );
}

export default CampaignsView;