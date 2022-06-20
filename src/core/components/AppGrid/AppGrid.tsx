import { Col, Row } from 'react-bootstrap';

const AppGrid = (props: any) => {
    return (
        <Row>
            {props.children.map((child: any) => <Col xs={12} md={4} lg={3}>{child}</Col>)}            
        </Row>
    );
}

export default AppGrid;