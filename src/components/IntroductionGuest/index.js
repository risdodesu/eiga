import { Container, Row, Col, Button } from "react-bootstrap";
import './index.css'

const IntroductionGuest = () => {
    return (
        <div className="intro">
          <Container className="text-white d-flex justify-content-center align-item-center">
            <Row>
              <Col>
                <div className="title">Hello,</div>
                <div className="title2">Login first, so you can find your favorite movies !</div>
                <div className="mt-3 text-center">
                <Button variant="outline-warning">See All Movies</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}
export default IntroductionGuest;