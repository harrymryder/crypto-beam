import { Col, Container, Row } from 'react-bootstrap';
import './Campaigns.module.scss';

function CampaignsView() {
    const COLUMNS: string[] = [
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six'
    ];

    return (
        <Container>
            <Row>
                {COLUMNS.map((string) => <Col xs={12} md={4} lg={3}>{string}</Col>)}
            </Row>
        </Container>
    );
}

export default CampaignsView;