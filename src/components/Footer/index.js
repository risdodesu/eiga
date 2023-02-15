import {Container, Col, Row} from 'react-bootstrap'
const Footer = () => {
    return (
        <Container>
            <Row>
                <Col sm={6}>Ini Kiri</Col>
                <Col sm={6}>Ini Kanan</Col>
            </Row>
        </Container>
    )
}

export default Footer;