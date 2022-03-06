import { Col, Container, Row } from 'react-bootstrap';
import styles from './HomeView.module.css';

function HomeView() {
    const COLUMNS: string[] = [
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six'
    ];

    return (
        <div className={styles.home}>
            {/* <Container> */}
                <Row>
                    {COLUMNS.map((string) => <Col xs={12} md={4} lg={3}>{string}</Col>)}
                </Row>
            {/* </Container> */}
        </div>
    );
}

export default HomeView;