import { Container, Row, Col, Button } from "react-bootstrap";

const Introduction = () => {
    return (
        <div className="intro">
          <Container className="text-white d-flex justify-content-center align-item-center">
            <Row>
              <Col>
                <div className="title">Hello Risdo,</div>
                <div className="title2">Happy Watching !</div>
                <div className="mt-3 text-center">
                <Button variant="outline-warning">See All Movies</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}
export default Introduction;