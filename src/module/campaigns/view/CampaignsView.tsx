import { Col, Container, Row } from 'react-bootstrap';

import CampaignItem from '../../../components/CampaignItem/CampaignItem';
import ViewContainer from '../../../components/ViewContainer/ViewContainer';
import Campaign from '../../../models/campaign';
import CAMPAIGNS from '../../../data/Campaigns';
import styles from './CampaignsView.module.scss';

function CampaignsView() {   
    return (
        <ViewContainer>
            <Container>
                <Row>
                    {CAMPAIGNS.map((campaign: Campaign) =>
                        <Col key={campaign.id} xs={12} sm={6} md={4}>                            
                            <CampaignItem campaign={campaign} />
                        </Col>
                    )}
                </Row>
            </Container>
        </ViewContainer>
    );
}

export default CampaignsView;